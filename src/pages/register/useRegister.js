import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AxiosHttpAdapter } from "../../adapter/httpUser";
import { UsersService } from "../../services/usersService";

export function useRegister() {
  const navigate = useNavigate();
  const [state, setState] = useState({ loading: false, error: false });
  const usersService = new UsersService(new AxiosHttpAdapter());

  /**
   * Formats the form data to create new user
   * @param {Object} data - Form data
   * @returns {Object} New user data
   */
  const mapData = (data) => {
    /* INFO: data: 

      city: ""
      confirmpassword: "" (unused)
      education: ""
      email: ""
      firstname: ""
      id: "" (unused)
      lastname: ""
      occupation: ""
      password: ""
      phone: ""
      region: ""
      zipcode: ""
    */

    return {
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
    };
  };

  /**
   * Make a requisition for the creation of a new user
   * @param {Object} newUser - User data
   * @returns {Promise<void>}
   */
  const handleSubmit = async (newUser) => {
    setState({ loading: true, error: false });

    try {
      await usersService.create(newUser);
      alert("User created successfully");
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error);
      setState({ loading: false, error: true });
      alert("Error creating user");
      navigate("/");
    } finally {
      setState((prev) => ({ ...prev, loading: false }));
    }
  };

  return {
    mapData,
    handleSubmit,
    state,
  };
}
