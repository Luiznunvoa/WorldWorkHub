import { DynamicForm } from "../../components/dynamicForm";
import { Spinner } from "../../components/spinner";
import { AlertMessage } from "../../components/alertMessage";
import { useLocale } from "../../hooks/useLocale";
import { useUsers } from "../../hooks/useUsers";
import { stringToRegex } from "../../utils";

export function Register() {
  const { t } = useLocale("register");
  const { createUser, state } = useUsers();

  if (!t || state == "loading") {
    return <Spinner />;
  }

  if (state == "error") {
    return (
      <main className="flex flex-col items-center p-6 w-full fill-red-500 text-red-500">
        <AlertMessage
          message={{
            icon: "warn",
            text: "Unexpected Error",
            link: {
              text: "Back to Menu...",
              path: "/",
            },
          }}
        />
      </main>
    );
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
        <DynamicForm
          onSubmit={(data) => createUser(data)}
          buttonlabels={t.buttonlabels}
          option={t.option}
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
