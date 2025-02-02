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
      <DynamicForm
        onSubmit={(data) => console.log(data)} // TODO: Validate login
        buttonlabels={t.buttonlabels}
        steps={t.steps.map(({title, inputs}) => ({
          title,
          inputs: inputs.map(({name, type, required, placeholder, pattern}) => ({
            name,
            type,
            required,
            placeholder,

            ...(pattern && {
              pattern: {
                value: stringToRegex(pattern.value), // Convert string pattern to RegExp
                message: pattern.message, 
              },
            }),
          })),
        }))}
      />
    </main>
  );
}
