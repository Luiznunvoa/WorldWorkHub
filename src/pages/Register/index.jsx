import { DynamicForm } from "../../components/dynamicForm";
import { states, jobs } from "../../assets";

export function Register() {

  return (
    <main className="flex w-full flex-col items-center p-6">
      <DynamicForm
        steps={[
          {
            title: "Create your account",
            inputs: [
              {
                name: "firstname",
                type: "text",
                required: "First Name is required",
                minLength: {
                  value: 2,
                  message: "First name must have at least 2 characters",
                },
                pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: "First name can only contain letters",
                },
                placeHolder: "First Name",
              },
              {
                name: "lastname",
                type: "text",
                required: "Last Name is required",
                minLength: {
                  value: 2,
                  message: "Last name must have at least 2 characters",
                },
                pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: "Last name can only contain letters",
                },
                placeHolder: "Last Name",
              },
              {
                name: "email",
                type: "email",
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
                placeHolder: "Email",
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
                placeHolder: "Password",
              },
              {
                name: "confirmPassword",
                type: "password",
                required: "Confirm your password",
                validate: "password",
                placeHolder: "Confirm Password",
              },
            ],
          },
          {
            title: "Address Information",
            inputs: [
              {
                name: "region",
                type: "select",
                required: "Region is required",
                placeHolder: "Select your state",
                options: states
              },
              {
                name: "city",
                type: "text",
                required: "City is required",
                placeHolder: "City",
              },
              {
                name: "zipcode",
                type: "text",
                required: "Zip Code is required",
                pattern: {
                  value: /^\d{5}(-\d{4})?$/,
                  message: "Please enter a valid zip code",
                },
                placeHolder: "Zip Code",
              },
            ],
          },
          {
            title: "Professional Information",
            inputs: [
              {
                name: "Education",
                type: "select",
                required: "Your Education Level is required",
                placeHolder: "Select your Education",
                options: [
                  {
                    label:"No Education",
                    value:"No Education"
                  },
                  {
                    label:"Middle School",
                    value:"Middle School"
                  },
                  {
                    label:"High School",
                    value:"High School"
                  },
                  {
                    label:"Bachelor Degree",
                    value:"Bachelor Degree"
                  },
                  {
                    label:"PhD",
                    value:"PhD"
                  },
                ]
              },
              {
                name: "OccupationName",
                type: "select",
                required: "Your current occupation is required",
                placeHolder: "Select your Occupation",
                options: jobs
              },
              {
                name: "id",
                type: "text",
                required: "ID is required",
                minLength: {
                  value: 5,
                  message: "Last name must have at least 5 characters",
                },
                pattern: {
                  value: /^[0-9]*$/,
                  message: "Please enter a valid ID",
                },
                placeHolder: "ID",
                value: "CPF"
              },
              {
                name: "Phone",
                type: "text",
                required: "Phone is required",
                minLength: {
                  value: 9,
                  message: "Phone number must have at least 9 numbers",
                },
                pattern: {
                  value: /^[0-9]*$/,
                  message: "Please enter a valid Phone number",
                },
                placeHolder: "Phone number",
              },
              {
                name: "ServiceDesc",
                type: "text",
                placeHolder: "(Optional)Job Description",
              },
            ],
          },
        ]} 
      />
    </main>
  );
}
