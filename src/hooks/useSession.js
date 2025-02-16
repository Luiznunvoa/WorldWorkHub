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
      const { access_token, user } = await sessionService.start(credentials);

      useSessionStore.getState().setState({ accessToken: access_token });
      useUserStore.setState({ user });

      setState(STATE.SUCCESS);
    } catch (error) {
      if (error instanceof ZodError) {
        const messages = error.errors.map((err) => err.message).join(", ");
        alert(`Unexpected Validation error: ${messages}`);
        console.error("Unexpected Validation errors:", error.errors);
      } else if (error.message === "Invalid Credentials") {
        console.error("Invalid credentials!");
        await new Promise((resolve) => setTimeout(resolve, 5000));
      } else {
        console.error("Login error:", error);
        alert(`Unexpected error: ${error.message}`);
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
      await sessionService.end();
      setState(STATE.SUCCESS);
    } catch (error) {
      console.error("Error in logout request:", error);
      setState(STATE.ERROR);
    } finally {
      useSessionStore.getState().reset();
      useUserStore.getState().reset();
      localStorage.clear();
      clearCookies();
    }
  };

  /**
   * Refreshes the authentication token.
   * @returns {Promise<string>} The new access token.
   */
  // const refreshToken = async () => {
  //   setState(STATE.LOADING);
  //   try {
  //     const response = await sessionService.refresh();
  //     useSessionStore
  //       .getState()
  //       .setState({ accessToken: response.access_token });
  //
  //     setState(STATE.SUCCESS);
  //     return response.access_token;
  //   } catch (error) {
  //     console.error("Error in token refresh:", error);
  //     alert("Unexpected error: " + error.message);
  //     setState(STATE.ERROR);
  //     throw error;
  //   }
  // };

  return {
    startSession,
    endSession,
  };
}
