import { z, ZodError } from "zod";
import { AxiosHttpAdapter } from "../adapter/httpUser";
import { SessionService } from "../services/sessionService";
import { useSessionStore } from "../stores/sessionStore";
import { useRequestStore, STATE } from "../stores/requestStore";
import { useUserStore } from "../stores/userStore";
import { clearCookies } from "../utils";

const loginSchema = z.object({
  email: z.string().email("Invalid email."),
  password: z
    .string()
    .nonempty("Missing password.")
    .min(8, "Password must have at least 8 characters."),
});

/**
 * Custom hook for session management (authentication, logout, and token refresh).
 * @returns {Object} Session management functions
 */
export function useSession() {
  const { setState } = useRequestStore();
  const sessionService = new SessionService(new AxiosHttpAdapter());

  /**
   * Initiates a user session by logging in.
   * @param {Object} data - The user's email and password.
   * @returns {Promise<void>}
   */
  const startSession = async (data) => {
    setState(STATE.LOADING);
    try {
      const credentials = loginSchema.parse(data);
      const response = await sessionService.start(credentials);

      useSessionStore.getState().setState({
        accessToken: response.access_token,
      });

      useUserStore.setState({
        user: {
          id: response.user.id,
          firstname: response.user.firstname,
          lastname: response.user.lastname,
          email: response.user.email,
          role: response.user.role,
          occupation: response.user.occupation,
          phone: response.user.phone,
          education: response.user.education,
          region: response.user.region,
          city: response.user.city,
          zipcode: response.user.zipcode,
          services: response.user.services,
          languages: response.user.languages,
        },
      });

      setState(STATE.SUCCESS);
    } catch (error) {
      if (error instanceof ZodError) {
        alert("Unexpected Validation Error!");
        console.error("Validation errors (Zod):", error.errors);
      } else if (error.message === "Invalid Credentials") {
        console.error("Login request error:", error.message);
        await new Promise((resolve) => setTimeout(resolve, 5000));
      } else {
        console.error("Login request error:", error);
        alert("Unexpected Error: " + error.message);
      }
      setState(STATE.ERROR);
    }
  };

  /**
   * Ends the current user session (logout).
   * @returns {Promise<void>}
   */
  const endSession = async () => {
    setState(STATE.LOADING);
    try {
      const token = useSessionStore.getState().accessToken;
      if (!token) {
        setState(STATE.ERROR);
        throw new Error("Missing access token");
      }
      await sessionService.end();

      // Cleanup
      useSessionStore.getState().reset();
      useUserStore.getState().reset();
      localStorage.clear();
      clearCookies();

      setState(STATE.SUCCESS);
    } catch (error) {
      console.error("Error in logout request:", error);
      alert("Unexpected error: " + error.message);
      setState(STATE.ERROR);
    }
  };

  /**
   * Refreshes the authentication token.
   * @returns {Promise<string>} The new access token.
   */
  const refreshToken = async () => {
    setState(STATE.LOADING);
    try {
      const response = await sessionService.refresh();
      useSessionStore
        .getState()
        .setState({ accessToken: response.access_token });

      setState(STATE.SUCCESS);
      return response.access_token;
    } catch (error) {
      console.error("Error in token refresh:", error);
      alert("Unexpected error: " + error.message);
      setState(STATE.ERROR);
      throw error;
    }
  };

  return {
    startSession,
    endSession,
    refreshToken,
  };
}
