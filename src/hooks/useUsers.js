import { useState } from "react";
import { z } from "zod";
import { AxiosHttpAdapter } from "../adapter/httpUser";
import { UsersService } from "../services/usersService";

const STATUS = {
  IDLE: "idle",
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
};

const userSchema = z.object({
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
    .string() .nonempty("Missing password field.")
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
});

export function useUsers() {
  const [state, setState] = useState(STATUS.IDLE);
  const usersService = new UsersService(new AxiosHttpAdapter());

  /**
   * Formats the form data to create new user
   * This function is a callback that will be used to map the form data to the user object
   * @param {Object} data - Form data
   * @returns {Object} New user data
   * INFO: Must have the fields: firstname, lastname, email, password, occupation, region, phone, zipcode, education and city
   */
  const mapUser = (data) => {
    setState(STATUS.LOADING);
    try {
      const parsedData = userSchema.parse(data);
      return {
        firstname: parsedData.firstname,
        lastname: parsedData.lastname,
        email: parsedData.email,
        password: parsedData.password,
        occupation: parsedData.occupation,
        role: "User",
        region: parsedData.region,
        phone: parsedData.phone,
        zipcode: parsedData.zipcode,
        education: parsedData.education,
        city: parsedData.city,
      };
    } catch (error) {
      setState(STATUS.ERROR);
      throw error;
    }
  };
  
  /**
   * Make a requisition for the creation of a new user
   * @param {Object} newUser - User data
   * @returns {Promise<void>}
   */
  const createUser = async (newUser) => {
    try {
      await usersService.create(newUser);
      setState(STATUS.SUCCESS);
    } catch (error) {
      console.error("Registration error:", error);
      setState(STATUS.ERROR);
    }
  };

  /**
   * Make a requisition for the user token
   * @param {Object} user - Email and password
   * @returns {Promise<void>}
   */
  const validateLogin = async (user) => {
    setState(STATUS.LOADING)
    try {
      await usersService.login(user);
      setState(STATUS.SUCCESS);
    } catch(error) {
      console.error("Login error: ", error);
      setState(STATUS.ERROR);
    }
  }

  return {
    mapUser,
    createUser,
    validateLogin,
    state,
  };
}
