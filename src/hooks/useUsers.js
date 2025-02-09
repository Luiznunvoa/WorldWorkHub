import { z, ZodError } from "zod";
import { AxiosHttpAdapter } from "../adapter/httpUser";
import { UsersService } from "../services/usersService";
import { useUserStore } from "../stores/userStore";
import { useRequestStore } from "../stores/requestStore";

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
    role: "User", // All user are created with the user role
  }));

const loginSchema = z.object({
  email: z.string().email("Email inválido."),
  password: z
    .string()
    .nonempty("Missing Password.")
    .min(8, "Password must have at least 8 characters."),
});

export function useUsers() {
  useRequestStore(); // to persist the request state
  const usersService = new UsersService(new AxiosHttpAdapter());

  /**
   * Makes a request to create a new user.
   * @param {Object} data - User data.
   * @returns {Promise<void>}
   */
  const createUser = async (data) => {
    try {
      const newUser = userSchema.parse(data);
      await usersService.create(newUser);
    } catch (error) {
      if (error instanceof ZodError) {
        alert("Unexpected Validation Error!");
        console.error("Validation errors (Zod):", error.errors);
      } else {
        console.error("User creation request error:", error.message);
      }
    }
  };

  /**
   * Makes a request to obtain the user token (login).
   * @param {Object} data - Email and password.
   * @returns {Promise<void>}
   */
  const validateUser = async (data) => {
    try {
      const credentials = loginSchema.parse(data);
      const user = await usersService.login(credentials);
      console.log(user);
      useUserStore.getState().setUser(user);
    } catch (error) {
      if (error instanceof ZodError) {
        alert("Unexpected Validation Error!");
        console.error("Validation errors (Zod):", error.errors);
      } else {
        console.error("Login request error:", error.message);
      }
    }
  };

  return {
    createUser,
    validateUser,
  };
}
