import { DynamicForm } from "./ui/dynamicForm";
import { AlertMessage } from "./ui/alertMessage";
import { useUsers } from "../hooks/useUsers";
import { useRequestStore } from "../stores/requestStore";

export function Register() {
  const requestState = useRequestStore.getState().state;
  const { createUser } = useUsers();

  if (requestState == "success") {
    return (
      <main className="flex flex-col items-center p-6 w-ful fill-green text-green">
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
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center p-6 w-full h-full">
      {/* Form to create a new account */}
      <p className="h-10 text-center text-red-500 w-100">
        {requestState == "error" && "Unexpected Error in Registration"}
      </p>
      <div className="flex overflow-hidden flex-row-reverse justify-center items-center border-2 border-solid shadow-xl h-[32rem] border-outline">
        
        <div className="w-96 h-full">
          <DynamicForm
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
            // Process each step in the form
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
                      message: "please enter a valid email address",
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
                    validate: (value, methods) => {
                      value === methods.getValues("password") ||
                        "password is not correct";
                    },
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
                    required: "region is required",
                    placeholder: "select your state",
                    options: [
                      { label: "Alabama", value: "AL" },
                      { label: "Alaska", value: "AK" },
                      { label: "Arizona", value: "AZ" },
                      { label: "Arkansas", value: "AR" },
                      { label: "California", value: "CA" },
                      { label: "Colorado", value: "CO" },
                      { label: "Connecticut", value: "CT" },
                      { label: "Delaware", value: "DE" },
                      { label: "Florida", value: "FL" },
                      { label: "Georgia", value: "GA" },
                      { label: "Hawaii", value: "HI" },
                      { label: "Idaho", value: "ID" },
                      { label: "Illinois", value: "IL" },
                      { label: "Indiana", value: "IN" },
                      { label: "Iowa", value: "IA" },
                      { label: "Kansas", value: "KS" },
                      { label: "Kentucky", value: "KY" },
                      { label: "Louisiana", value: "LA" },
                      { label: "Maine", value: "ME" },
                      { label: "Maryland", value: "MD" },
                      { label: "Massachusetts", value: "MA" },
                      { label: "Michigan", value: "MI" },
                      { label: "Minnesota", value: "MN" },
                      { label: "Mississippi", value: "MS" },
                      { label: "Missouri", value: "MO" },
                      { label: "Montana", value: "MT" },
                      { label: "Nebraska", value: "NE" },
                      { label: "Nevada", value: "NV" },
                      { label: "New Hampshire", value: "NH" },
                      { label: "New Jersey", value: "NJ" },
                      { label: "New Mexico", value: "NM" },
                      { label: "New York", value: "NY" },
                      { label: "North Carolina", value: "NC" },
                      { label: "North Dakota", value: "ND" },
                      { label: "Ohio", value: "OH" },
                      { label: "Oklahoma", value: "OK" },
                      { label: "Oregon", value: "OR" },
                      { label: "Pennsylvania", value: "PA" },
                      { label: "Rhode Island", value: "RI" },
                      { label: "South Carolina", value: "SC" },
                      { label: "South Dakota", value: "SD" },
                      { label: "Tennessee", value: "TN" },
                      { label: "Texas", value: "TX" },
                      { label: "Utah", value: "UT" },
                      { label: "Vermont", value: "VT" },
                      { label: "Virginia", value: "VA" },
                      { label: "Washington", value: "WA" },
                      { label: "West Virginia", value: "WV" },
                      { label: "Wisconsin", value: "WI" },
                      { label: "Wyoming", value: "WY" },
                    ],
                  },
                  {
                    name: "city",
                    type: "text",
                    required: "city is required",
                    minlength: {
                      value: 2,
                      message: "city must have at least 2 characters",
                    },
                    pattern: {
                      value: /^[A-Za-zÇç´^~ ]+$/,
                      message: "city can only contain letters",
                    },
                    placeholder: "city",
                  },
                  {
                    name: "phone",
                    type: "text",
                    required: "phone is required",
                    minlength: {
                      value: 9,
                      message: "phone number must have at least 9 numbers",
                    },
                    pattern: {
                      value: /^[0-9]*$/,
                      message: "please enter a valid phone number",
                    },
                    placeholder: "phone number",
                  },
                  {
                    name: "zipcode",
                    type: "text",
                    required: "zip code is required",
                    pattern: {
                      value: /^\d{5}(-\d{4})?$/,
                      message: "please enter a valid zip code",
                    },
                    placeholder: "zip code",
                  },
                ],
              },
              {
                title: "Personal information",
                inputs: [
                  {
                    name: "education",
                    type: "select",
                    required: "your education level is required",
                    placeholder: "select your education",
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
                    required: "your current occupation is required",
                    placeholder: "select your occupation",
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
    </main>
  );
}
