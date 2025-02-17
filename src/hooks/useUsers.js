import { z, ZodError } from "zod";
import { AxiosHttpAdapter } from "../adapter/httpUser";
import { UsersService } from "../services/usersService";
import { useRequestStore, STATE } from "../stores/requestStore";
import { useUserStore, initialState } from "../stores/userStore.js";
import { useSession } from "./useSession";

const userSchema = z
  .object({
    firstname: z
      .string()
      .min(2, "Firstname must have at least 2 characters.")
      .regex(/^[A-Za-z]+$/, "Firstname must contain only letters."),
    lastname: z
      .string()
      .min(2, "Lastname must have at least 2 characters.")
      .regex(/^[A-Za-z]+$/, "Lastname must contain only letters."),
    email: z.string().email("Invalid email address."),
    password: z
      .string()
      .nonempty("Missing password field.")
      .min(8, "Password must have at least 8 characters."),
    occupation: z.string().nonempty("Missing occupation field."),
    region: z.string().nonempty("Missing region field."),
    phone: z
      .string()
      .nonempty("Missing phone field.")
      .length(13, "Phone must have exactly 13 characters.")
      .regex(/^[0-9]*$/, "Phone must only contain numbers"),
    zipcode: z
      .string()
      .nonempty("Missing zipcode field.")
      .length(5, "Zipcode must have exactly 5 characters.")
      .regex(/^[0-9]*$/, "Zipcode must only contain numbers"),
    education: z.string().nonempty("Missing education field."),
    city: z
      .string()
      .min(2, "City must have at least 2 characters.")
      .regex(/^[A-Za-zÇç´^~ ]+$/, "City can only contain letters"),
  })
  .transform((data) => ({
    ...data,
    role: "User", // INFO: All users are created with the user role
  }));

/**
 * Custom hook for user-related operations.
 * @returns {Object} User management functions
 */
export function useUsers() {
  const { setState } = useRequestStore();
  const { startSession } = useSession();
  const usersService = new UsersService(new AxiosHttpAdapter());

  /**
   * Creates a new user.
   * @param {Object} data - The user data.
   * @returns {Promise<void>}
   */
  const createUser = async (data) => {
    setState(STATE.LOADING);
    try {
      const newUser = userSchema.parse(data);
      await usersService.create(newUser);
      startSession({ email: newUser.email, password: newUser.password });
      setState(STATE.SUCCESS);
    } catch (error) {
      setState(STATE.ERROR);
      if (error instanceof ZodError) {
        alert("Unexpected Validation Error!");
        console.error("Validation errors (Zod):", error.errors);
      } else {
        alert("Unexpected Error!" + error.message);
        console.error("User creation request error:", error.message);
      }
    }
  };

  /**
   * Retrieves the current user's information.
   * If the user is already loaded (i.e. not in its initial state), it returns the cached data.
   * Otherwise, it fetches the user data from the API.
   * @returns {Promise<Object>} The user data.
   */
  const getUser = async () => {
    const currentUser = useUserStore.getState().user;
    if (currentUser !== initialState) return currentUser;

    setState(STATE.LOADING);
    try {
      const user = await usersService.getCurrent();
      useUserStore.setState({ user });
      setState(STATE.SUCCESS);
      return user;
    } catch (error) {
      console.error("Error fetching current user:", error);
      setState(STATE.ERROR);
      throw error;
    }
  };

  /**
   * Checks if the given email does not exist in the user service.
   *
   * @param {string} email - The email to check.
   * @returns {Promise<boolean>} - A promise that resolves to true if the email exist.
   */
  const checkEmail = async (email) => {
    const response = await usersService.emailExists({ email });
    return response.exists; 
  };

  /**
   * Checks if the given zip code exists. 
   *
   * @param {string} zipcode - The zip code to check.
   * @returns {Promise<boolean>} - A promise that resolves to true
   */
  const checkZip = async (zipcode) => {
    try {
      const response = await usersService.zipExists({ zipcode });
      if (response.message !== "ZipCode does not exist.") {
        return true;
      }
    } catch (error) {
      console.error("Error checking zip code:", error);
    }
    return false
  };

  return {
    createUser,
    getUser,
    checkEmail,
    checkZip,
  };
}
