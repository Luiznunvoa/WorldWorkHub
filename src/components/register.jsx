import { useEffect, useState } from "react";
import { Form } from "./ui/form";
import { AlertMessage } from "./ui/alertMessage";
import { useUsers } from "../hooks/useUsers";
import { useRequestStore } from "../stores/requestStore";
import { useFormStore } from "../stores/formStore";

export function Register() {
  const requestState = useRequestStore.getState().state;
  const { createUser } = useUsers();
  const [cities, setCities] = useState([]);
  const region = useFormStore((state) => state.form.region);

  useEffect(() => {
    if (region) {
      import("../assets/usa_states_and_cities.json")
        .then((module) => {
          setCities(module.default.countries.USA);
        })
        .catch((error) => console.error("Error loading region data:", error));
    }
  }, [region]);

  if (requestState === "success") {
    return (
      <div className="flex flex-col items-center p-6 w-full fill-green text-green">
        <AlertMessage
          message={{
            icon: "check",
            text: "User Created",
            link: {
              text: "Login Now!",
              path: "/login",
            },
          }}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center p-6 w-full h-full">
      {/* Form to create a new account */}
      <p className="h-10 text-center text-red-500 w-100">
        {requestState === "error" && "Unexpected Error in Registration"}
      </p>
      <div className="flex overflow-hidden flex-row-reverse justify-center items-center border-2 border-solid shadow-xl h-[32rem] border-outline">
        <div className="w-96 h-full">
          <Form
            onSubmit={(data) => createUser(data)}
            buttonlabels={{
              next: "next",
              previous: "previous",
              submit: "submit",
            }}
            dialogs={[
              {
                text: "already have an account?",
                label: "Login!",
                path: "/login",
              },
            ]}
            // Config of each step in the form
            steps={[
              {
                title: "Create your Account",
                inputs: [
                  {
                    name: "firstname",
                    type: "text",
                    required: "First name is required",
                    minlength: {
                      value: 2,
                      message: "First name must have at least 2 characters",
                    },
                    pattern: {
                      value: /^[a-zA-Z]+$/,
                      message: "First name can only contain letters",
                    },
                    placeholder: "First name",
                  },

                  {
                    name: "lastname",
                    type: "text",
                    required: "Last name is required",
                    minlength: {
                      value: 2,
                      message: "Last name must have at least 2 characters",
                    },
                    pattern: {
                      value: /^[a-zA-Z]+$/,
                      message: "Last name can only contain letters",
                    },
                    placeholder: "Last name",
                  },

                  {
                    name: "email",
                    type: "email",
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email address",
                    },
                    placeholder: "Email",
                  },

                  {
                    name: "password",
                    type: "password",
                    required: "Password is required",
                    pattern: {
                      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                      message:
                        "Password must be at least 8 characters long and contain both letters and numbers",
                    },
                    placeholder: "Password",
                  },

                  {
                    name: "confirmpassword",
                    type: "password",
                    required: "Confirm your password",
                    validate: (value, methods) =>
                      value === methods.getValues("password") ||
                      "Password is not correct",
                    placeholder: "Confirm password",
                  },
                ],
              },

              {
                title: "Address information",
                inputs: [
                  {
                    name: "region",
                    type: "select",
                    required: "Region is required",
                    placeholder: "Select your state",
                    options: [
                      { label: "Alabama", value: "Alabama" },
                      { label: "Alaska", value: "Alaska" },
                      { label: "Arizona", value: "Arizona" },
                      { label: "Arkansas", value: "Arkansas" },
                      { label: "California", value: "California" },
                      { label: "Colorado", value: "Colorado" },
                      { label: "Connecticut", value: "Connecticut" },
                      { label: "Delaware", value: "Delaware" },
                      { label: "Florida", value: "Florida" },
                      { label: "Georgia", value: "Georgia" },
                      { label: "Hawaii", value: "Hawaii" },
                      { label: "Idaho", value: "Idaho" },
                      { label: "Illinois", value: "Illinois" },
                      { label: "Indiana", value: "Indiana" },
                      { label: "Iowa", value: "Iowa" },
                      { label: "Kansas", value: "Kansas" },
                      { label: "Kentucky", value: "Kentucky" },
                      { label: "Louisiana", value: "Louisiana" },
                      { label: "Maine", value: "Maine" },
                      { label: "Maryland", value: "Maryland" },
                      { label: "Massachusetts", value: "Massachusetts" },
                      { label: "Michigan", value: "Michigan" },
                      { label: "Minnesota", value: "Minnesota" },
                      { label: "Mississippi", value: "Mississippi" },
                      { label: "Missouri", value: "Missouri" },
                      { label: "Montana", value: "Montana" },
                      { label: "Nebraska", value: "Nebraska" },
                      { label: "Nevada", value: "Nevada" },
                      { label: "New Hampshire", value: "New Hampshire" },
                      { label: "New Jersey", value: "New Jersey" },
                      { label: "New Mexico", value: "New Mexico" },
                      { label: "New York", value: "New York" },
                      { label: "North Carolina", value: "North Carolina" },
                      { label: "North Dakota", value: "North Dakota" },
                      { label: "Ohio", value: "Ohio" },
                      { label: "Oklahoma", value: "Oklahoma" },
                      { label: "Oregon", value: "Oregon" },
                      { label: "Pennsylvania", value: "Pennsylvania" },
                      { label: "Rhode Island", value: "Rhode Island" },
                      { label: "South Carolina", value: "South Carolina" },
                      { label: "South Dakota", value: "South Dakota" },
                      { label: "Tennessee", value: "Tennessee" },
                      { label: "Texas", value: "Texas" },
                      { label: "Utah", value: "Utah" },
                      { label: "Vermont", value: "Vermont" },
                      { label: "Virginia", value: "Virginia" },
                      { label: "Washington", value: "Washington" },
                      { label: "West Virginia", value: "West Virginia" },
                      { label: "Wisconsin", value: "Wisconsin" },
                      { label: "Wyoming", value: "Wyoming" },
                    ],
                  },

                  {
                    name: "city",
                    type: "select",
                    required: "City is required",
                    placeholder: "Select your city",
                    options:
                      region && cities[region]
                        ? cities[region].map((city) => ({
                          label: city,
                          value: city,
                        }))
                        : [{ label: "No State Selected", value: "" }],
                  },

                  {
                    name: "phone",
                    type: "text",
                    required: "Phone is required",
                    minlength: {
                      value: 9,
                      message: "Phone number must have at least 9 numbers",
                    },
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "Please enter a valid phone number",
                    },
                    placeholder: "Phone number",
                  },

                  {
                    name: "zipcode",
                    type: "text",
                    required: "Zip code is required",
                    pattern: {
                      value: /^\d{5}(-\d{4})?$/,
                      message: "Please enter a valid zip code",
                    },
                    placeholder: "Zip code",
                  },
                ],
              },

              {
                title: "Personal information",
                inputs: [
                  {
                    name: "education",
                    type: "select",
                    required: "Your education level is required",
                    placeholder: "Select your education",
                    options: [
                      { label: "no education", value: "no education" },
                      { label: "middle school", value: "middle school" },
                      { label: "high school", value: "high school" },
                      { label: "bachelor degree", value: "bachelor degree" },
                      { label: "phd", value: "phd" },
                    ],
                  },

                  {
                    name: "occupation",
                    type: "select",
                    required: "Your current occupation is required",
                    placeholder: "Select your occupation",
                    options: [
                      { label: "Driver", value: "Driver" },
                      { label: "Waiter/Waitress", value: "Waiter/Waitress" },
                      { label: "Cashier", value: "Cashier" },
                      { label: "Cleaner", value: "Cleaner" },
                      { label: "Stock Clerk", value: "Stock Clerk" },
                      {
                        label: "Fast Food Attendant",
                        value: "Fast Food Attendant",
                      },
                      { label: "Janitor", value: "Janitor" },
                      {
                        label: "Construction Worker",
                        value: "Construction Worker",
                      },
                      { label: "Electrician", value: "Electrician" },
                      { label: "Plumber", value: "Plumber" },
                      { label: "Security Guard", value: "Security Guard" },
                      { label: "Cook", value: "Cook" },
                      { label: "Car Washer", value: "Car Washer" },
                      { label: "Intern", value: "Intern" },
                      {
                        label: "Production Operator",
                        value: "Production Operator",
                      },
                      { label: "Bartender", value: "Bartender" },
                      { label: "Seamstress", value: "Seamstress" },
                      { label: "Baker", value: "Baker" },
                      {
                        label: "Inside Salesperson",
                        value: "Inside Salesperson",
                      },
                      { label: "Hairdresser", value: "Hairdresser" },
                      { label: "Laborer", value: "Laborer" },
                      {
                        label: "Administrative Assistant",
                        value: "Administrative Assistant",
                      },
                      { label: "Receptionist", value: "Receptionist" },
                      { label: "Delivery Driver", value: "Delivery Driver" },
                      { label: "Gardener", value: "Gardener" },
                      {
                        label: "Ride-Share Driver",
                        value: "Ride-Share Driver",
                      },
                      {
                        label: "Forklift Operator",
                        value: "Forklift Operator",
                      },
                      { label: "Office Assistant", value: "Office Assistant" },
                      { label: "Butcher", value: "Butcher" },
                      { label: "Mechanic", value: "Mechanic" },
                      { label: "Window Cleaner", value: "Window Cleaner" },
                      { label: "Painter", value: "Painter" },
                      { label: "Tailor", value: "Tailor" },
                      { label: "Delivery Boy", value: "Delivery Boy" },
                      {
                        label: "Furniture Assembler",
                        value: "Furniture Assembler",
                      },
                      {
                        label: "Kitchen Assistant",
                        value: "Kitchen Assistant",
                      },
                      { label: "Carpenter", value: "Carpenter" },
                      { label: "Farmer", value: "Farmer" },
                    ],
                  },
                ],
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
