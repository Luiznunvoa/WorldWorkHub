import { DynamicForm } from "../../components/dynamicForm";

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
                name: "address",
                type: "text",
                required: "Address is required",
                placeHolder: "Address",
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
            title: "Confirmation",
            inputs: [
              {
                name: "terms",
                type: "checkbox",
                required: "You must accept the terms and conditions",
                placeHolder: "I accept the terms and conditions",
              },
            ],
          },
        ]} 
      />
    </main>
  );
}
