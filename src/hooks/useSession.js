import { z, ZodError } from "zod";
import { AxiosHttpAdapter } from "../adapter/httpUser";
import { SessionService } from "../services/sessionService";
import { useSessionStore } from "../stores/sessionStore";
import { useRequestStore, STATE } from "../stores/requestStore";
import { useUserStore } from "../stores/userStore";

const loginSchema = z.object({
  email: z.string().email("Email inválido."),
  password: z
    .string()
    .nonempty("Missing Password.")
    .min(8, "Password must have at least 8 characters."),
});

export function useSession() {
  const { setState } = useRequestStore();
  const sessionService = new SessionService(new AxiosHttpAdapter());

  /**
   * Makes a request to obtain the user token (login).
   * @param {Object} data - Email and password.
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

      useUserStore.getState().setState({ user: response.user });

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
        alert("Unexpected Error: ", error.message)
      }
      setState(STATE.ERROR);
    }
  };

  const endSession = async () => {
    setState(STATE.LOADING);
    try {
      const token = useSessionStore.getState().accessToken;
      if (!token) {
        setState(STATE.ERROR);
        throw new Error("Missing access token");
      }
      await sessionService.end();

      useSessionStore.getState().reset();
      useUserStore.getState().reset();

      setState(STATE.SUCCESS);
    } catch (error) {
      console.error("Error in logout requisition:", error);
      alert("Unexpected error: ", error.message);
      setState(STATE.ERROR);
    }
  };

  const refreshToken = async () => {
    setState(STATE.LOADING);
    try {
      const token = await sessionService.refresh();
      useSessionStore.getState().setState({ accessToken: token });
      setState(STATE.SUCCESS);
      return token;
    } catch (error) {
      console.error("Error in token refresh:", error);
      alert("Unexpected error: ", error.message);
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
