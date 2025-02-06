import { useNavigate } from "react-router-dom";
import { DynamicForm } from "../../components/dynamicForm";
import { Spinner } from "../../components/spinner";
import { useUsers } from "../../hooks/useUsers";
import { useLocale } from "../../hooks/useLocale";
import { stringToRegex } from "../../utils";

export function Login() {
  const navigate = useNavigate();
  const { t, clearCache } = useLocale("login");
  const { validateUser, state } = useUsers();

  if (!t || state == "loading") {
    return <Spinner />;
  }

  if (state == "success") {
    clearCache();
    console.log("login validated!");
    navigate("/");
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
