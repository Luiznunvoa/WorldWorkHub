import { DynamicForm } from "../../components/dynamicForm";
import { Spinner } from "../../components/spinner";
import { AlertMessage } from "../../components/alertMessage";
import { useUsers } from "../../hooks/useUsers";
import { useFetchLocale } from "../../hooks/useFetchLocale";
import { stringToRegex } from "../../utils";

export function Login() {
  const t = useFetchLocale("login");
  const { validateUser, state } = useUsers();

  if (!t || state == "loading") {
    return <Spinner />;
  }

  if (state == "error") {
    return (
      <main className="flex flex-col items-center p-6 w-full text-red-500 fill-red-500">
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
      {/* Form to validate user login */}
      <div className="flex w-96 h-96">
        <DynamicForm
          onSubmit={(data) => validateUser(data)}
          buttonlabels={t.buttonlabels}
          // Process each step in the form
          steps={t.steps.map(({ title, inputs }) => ({
            title,
            inputs: inputs.map(
              // input properties
              ({ name, type, required, placeholder, pattern }) => ({
                name,
                type,
                required,
                placeholder,

                // Conditionally add regex pattern validation if defined in locales
                ...(pattern && {
                  pattern: {
                    value: stringToRegex(pattern.value), // Convert string pattern to RegExp
                    message: pattern.message,
                  },
                }),
              }),
            ),
          }))}
        />
      </div>
    </main>
  );
}
