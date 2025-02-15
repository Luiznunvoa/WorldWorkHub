import { z, ZodError } from "zod";
import { AxiosHttpAdapter } from "../adapter/httpUser";
import { UsersService } from "../services/usersService";
import { useRequestStore, STATE } from "../stores/requestStore";
import { useUserStore, initialState } from "../stores/userStore.js";

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
      setState(STATE.SUCCESS);
    } catch (error) {
      setState(STATE.ERROR);
      if (error instanceof ZodError) {
        alert("Unexpected Validation Error!");
        console.error("Validation errors (Zod):", error.errors);
      } else {
        console.error("User creation request error:", error.message);
      }
    }
  };

  /**
   * Retrieves the current user's information.
   * @returns {Promise<Object>} The user data.
   */
  const getUser = async () => {
    if (useUserStore.getState().user !== initialState) {
      return;
    }
    setState(STATE.LOADING);
    try {
      const response = await usersService.getCurrent();
      useUserStore.setState({
        user: {
          id: response.id,
          firstname: response.firstname,
          lastname: response.lastname,
          email: response.email,
          role: response.role,
          occupation: response.occupation,
          phone: response.phone,
          education: response.education,
          region: response.region,
          city: response.city,
          zipcode: response.zipcode,
          services: response.services,
          languages: response.languages,
        },
      });
      setState(STATE.SUCCESS);
      return response.user;
    } catch (error) {
      setState(STATE.ERROR);
      console.error("Error fetching current user:", error);
      throw error;
    }
  };

  const checkEmail = async (email) => {
    setState(STATE.LOADING);
    console.log(email);
    try {
      const exists = await usersService.emailExists(email);
      setState(STATE.IDLE);
      return exists;
    } catch (error) {
      console.log(error);
      setState(STATE.IDLE);
      return false;
    }
  };

  return {
    createUser,
    getUser,
    checkEmail,
  };
}
