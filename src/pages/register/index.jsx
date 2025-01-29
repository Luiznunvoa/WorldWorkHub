import { useNavigate } from "react-router-dom";
import { DynamicForm } from "../../components/dynamicForm";
import { Spinner } from "../../components/spinner";
import { stringToRegex, useFetchLocale } from "../../utils";

export function Register() {
  const navigate = useNavigate();
  const t = useFetchLocale("register");

  if (!t) {
    return <Spinner />;
  }

  return (
    <main className="flex flex-col items-center p-6 w-full">
      {/* Form to create a new account */}
      <DynamicForm
        onSubmit={(data) => console.log(data)} // TODO: Send data to the API
        buttonLabels={{
          next: t.buttonlabels.next,
          previous: t.buttonlabels.previous,
          submit: t.buttonlabels.submit,
        }}
        option={{
          text: t.option.text,
          label: t.option.label,
          func: () => navigate("/"),
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

            ...(input.minlength && {
              minLength: {
                value: input.minlength.value,
                message: input.minlength.message,
              },
            }),

            ...(input.options && {
              options: input.options,
            }),

            ...(input.name == "confirmpassword" && {
              validate: (value, methods) =>
                value === methods.getValues("password") || `${input.validate}`,
            }),
          })),
        }))}
      />
    </main>
  );
}
