import { useState, useCallback } from "react";
import { AxiosHttpAdapter } from "../../adapter/httpUser";
import { UsersService } from "../../services/usersService";

const STATUS = {
  IDLE: "idle",
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
};

export function useRegister() {
  const [state, setState] = useState(STATUS.IDLE);
  const usersService = new UsersService(new AxiosHttpAdapter());

  /**
   * Formats the form data to create new user
   * @param {Object} data - Form data
   * @returns {Object} New user data
   */
  const mapData = useCallback(
    (data) => ({
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      password: data.password,
      occupation: data.occupation,
      role: "Admin", // DEBUG: there's no input for "role", all users are admins
      region: data.region,
      phone: data.phone,
      zipcode: data.zipcode,
      education: data.education,
      city: data.city,
    }),
    [],
  );

  /**
   * Make a requisition for the creation of a new user
   * @param {Object} newUser - User data
   * @returns {Promise<void>}
   */
  const handleSubmit = async (newUser) => {
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
    handleSubmit,
    state,
  };
}
