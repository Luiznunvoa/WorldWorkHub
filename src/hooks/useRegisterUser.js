import { useState, useCallback } from "react";
import { AxiosHttpAdapter } from "../adapter/httpUser";
import { UsersService } from "../services/usersService";
import { z } from "zod";

const STATUS = {
  IDLE: "idle",
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
};

const dataSchema = z.object({
  firstname: z.string().min(2, "Firstname must have at least 2 characters.").regex(/^[A-Za-z]+$/, "Firstname must contain only letters."),
  lastname: z.string().min(2, "Lastname must have at least 2 characters.").regex(/^[A-Za-z]+$/, "Lastname must contain only letters."),
  email: z.string().email("Invalid email address."),
  password: z.string().nonempty("Missing password field.").min(8, "Password must have at least 8 characters."),
  occupation: z.string().nonempty("Missing occupation field."),
  region: z.string().nonempty("Missing region field."),
  phone: z.string().nonempty("Missing phone field.").length(13, "Phone must have exactly 13 characters."),
  zipcode: z.string().nonempty("Missing zipcode field.").length(5, "Zipcode must have exactly 5 characters."),
  education: z.string().nonempty("Missing education field."),
  city: z.string().min(2, "City must have at least 2 characters."),
});

export function useRegisterUser() {
  const [state, setState] = useState(STATUS.IDLE);
  const usersService = new UsersService(new AxiosHttpAdapter());

  /**
   * Formats the form data to create new user
   * This function is a callback that will be used to map the form data to the user object
   * @param {Object} data - Form data
   * @returns {Object} New user data
   * INFO: Must have the fields: firstname, lastname, email, password, occupation, region, phone, zipcode, education and city
   */
  const mapData = useCallback((data) => {
    const parsedData = dataSchema.parse(data);

    return {
      firstname: parsedData.firstname,
      lastname: parsedData.lastname,
      email: parsedData.email,
      password: parsedData.password,
      occupation: parsedData.occupation,
      role: "Admin", // DEBUG: For now, all users are created as Admin
      region: parsedData.region,
      phone: parsedData.phone,
      zipcode: parsedData.zipcode,
      education: parsedData.education,
      city: parsedData.city,
    };
  }, []);

  /**
   * Make a requisition for the creation of a new user
   * @param {Object} newUser - User data
   * @returns {Promise<void>}
   */
  const createUser = async (newUser) => {
    setState(STATUS.LOADING);
    try {
      await usersService.create(newUser);
      setState(STATUS.SUCCESS);
    } catch (error) {
      console.error("Registration error:", error);
      setState(STATUS.ERROR);
    }
  };

  return {
    mapData,
    createUser,
    state,
  };
}
