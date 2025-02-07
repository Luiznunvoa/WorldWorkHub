import { useNavigate } from "react-router-dom";
import { DynamicForm } from "../../components/dynamicForm";
import { stringToRegex } from "../../utils";
import { useUsers } from "../../hooks/useUsers";
import { useLocale } from "../../hooks/useLocale";
import { Spinner } from "../../components/spinner";

export function Login() {
  const navigate = useNavigate();
  const { t } = useLocale("login");
  const { validateUser, state } = useUsers();

  if (!t || state == "loading") {
    return <Spinner />;
  }

  if (state == "success") {
    navigate("/");
  }

  return (
    <main className="flex flex-col gap-10 items-center">
      <div className="m-10 w-96">
        <p className="h-10 text-center text-red-500 w-100">
          {state == "error" && "Invalid email or password"}
        </p>
        <DynamicForm
          onSubmit={(data) => validateUser(data)}
          buttonlabels={t.buttonlabels}
          dialogs={t.dialogs}
          // Process each step in the form
          steps={t.steps.map(({ title, inputs }) => ({
            title,
            inputs: inputs.map(
              // Process each input field in the step
              ({
                // input properties
                name, type, required, placeholder, pattern,
              }) => ({
                // Preserve basic input properties
                name, type, required, placeholder,

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
