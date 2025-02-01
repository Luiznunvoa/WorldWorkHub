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
        buttonLabels={{
          next: t.buttonlabels.next,
          previous: t.buttonlabels.previous,
          submit: t.buttonlabels.submit,
        }}
        steps={t.steps.map((step) => ({
          title: step.title,
          inputs: step.inputs.map((input) => ({
            name: input.name,
            type: input.type,
            required: input.required,
            placeHolder: input.placeholder,

            ...(input.pattern && {
              pattern: {
                value: stringToRegex(input.pattern.value),
                message: input.pattern.message,
              },
            }),
          })),
        }))}
      />
    </main>
  );
}
