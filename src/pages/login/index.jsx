import { DynamicForm } from "../../components/dynamicForm";
import { Spinner } from "../../components/spinner";
import { stringToRegex, useFetchLocale } from "../../utils";

export function Login() {
  const t = useFetchLocale("login");

  if (!t) {
    return <Spinner />;
  }

  return (
    <main className="flex flex-col items-center p-6 w-full">
      {/* Form to validate user login */}
      <div className="flex w-96 h-96">
        <DynamicForm
          onSubmit={(data) => console.log(data)} // TODO: Validate login
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
