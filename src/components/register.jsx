import { DynamicForm } from "./ui/dynamicForm";
import { Spinner } from "./ui/spinner";
import { AlertMessage } from "./ui/alertMessage";
import { useLocale } from "../hooks/useLocale";
import { useUsers } from "../hooks/useUsers";
import { stringToRegex } from "../utils";

export function Register() {
  const { t } = useLocale("register");
  const { createUser, state } = useUsers();

  if (!t || state == "loading") {
    return <Spinner />;
  }

  if (state == "success") {
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
    <main className="flex flex-col items-center p-6 w-full">
      <div className="w-96">
        {/* Form to create a new account */}
        <p className="w-100 h-10 text-center text-red-500">{ state == "error" && "Unexpected Error in Registration" }</p> 
        <DynamicForm
          onSubmit={(data) => createUser(data)}
          buttonlabels={t.buttonlabels}
          dialogs={t.dialogs}
          // Process each step in the form
          steps={t.steps.map(({ title, inputs }) => ({
            title,
            inputs: inputs.map(
              // Process each input field in the step
              ({
                // input properties
                name,
                type,
                required,
                placeholder,
                minlength,
                options,
                pattern,
                validate,
              }) => ({
                // Preserve basic input properties
                name,
                type,
                required,
                placeholder,
                minlength,
                options,

                // Conditionally add regex pattern validation if defined in locales
                ...(pattern && {
                  pattern: {
                    value: stringToRegex(pattern.value), // Convert string pattern to RegExp
                    message: pattern.message,
                  },
                }),

                // Special validation for password confirmation field
                ...(name === "confirmpassword" && {
                  validate: (value, methods) =>
                    // Check if value matches password field's value
                    value === methods.getValues("password") || `${validate}`,
                }),
              }),
            ),
          }))}
        />
      </div>
    </main>
  );
}
