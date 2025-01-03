import { DynamicForm } from "../../components/dynamicForm";
import { useAppContext } from "../../utils";
import { translations } from "./translations";
import { states } from "../../assets";

export function Register() {
  const { language } = useAppContext();
  const t = translations[language];

  return (
    <main className="flex w-full flex-col items-center p-6">
      <DynamicForm
        onSubmit={(data) => console.log(data)}
        buttonLabels={{
          next: t.buttonLabels.next,
          previous: t.buttonLabels.previous,
          submit: t.buttonLabels.submit,
        }}
        login={{
          label: t.login.label,
          buttonPress: () => ("") 
        }}
        steps={[
          {
            title: t.steps[0].title,
            inputs: [
              {
                name: "firstname",
                type: "text",
                required: t.steps[0].inputs[0].required,
                minLength: {
                  value: 2,
                  message: t.steps[0].inputs[0].minLength.message,
                },
                pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: t.steps[0].inputs[0].pattern.message,
                },
                placeHolder: t.steps[0].inputs[0].placeHolder,
              },
              {
                name: "lastname",
                type: "text",
                required: t.steps[0].inputs[1].required,
                minLength: {
                  value: 2,
                  message: t.steps[0].inputs[1].minLength.message,
                },
                pattern: {
                  value: /^[a-zA-Z]+$/,
                  message: t.steps[0].inputs[1].pattern.message,
                },
                placeHolder: t.steps[0].inputs[1].placeHolder,
              },
              {
                name: "email",
                type: "email",
                required: t.steps[0].inputs[2].required,
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: t.steps[0].inputs[2].pattern.message,
                },
                placeHolder: t.steps[0].inputs[2].placeHolder,
              },
              {
                name: "password",
                type: "password",
                required: t.steps[0].inputs[3].required,
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                  message: t.steps[0].inputs[3].pattern.message,
                },
                placeHolder: t.steps[0].inputs[3].placeHolder,
              },
              {
                name: "confirmPassword",
                type: "password",
                required: t.steps[0].inputs[4].required,
                validate: (value, methods) =>
                  value === methods.getValues("password") || `${t.steps[0].inputs[4].validate}`,
                placeHolder: t.steps[0].inputs[4].placeHolder,
              },
            ],
          },
          {
            title: t.steps[1].title,
            inputs: [
              {
                name: "region",
                type: "select",
                required: t.steps[1].inputs[0].required,
                placeHolder: t.steps[1].inputs[0].placeHolder,
                options: states
              },
              {
                name: "Phone",
                type: "text",
                required: t.steps[1].inputs[1].required,
                minLength: {
                  value: 11,
                  message: t.steps[1].inputs[1].minLength.message,
                },
                pattern: {
                  value: /^[0-9]*$/,
                  message: t.steps[1].inputs[1].pattern.message,
                },
                placeHolder: t.steps[1].inputs[1].placeHolder,
              },
              {
                name: "zipcode",
                type: "text",
                required: t.steps[1].inputs[2].required,
                pattern: {
                  value: /^\d{5}(-\d{4})?$/,
                  message: t.steps[1].inputs[2].pattern.message,
                },
                placeHolder: t.steps[1].inputs[2].placeHolder,
              },
            ],
          },
          {
            title: t.steps[2].title,
            inputs: [
              {
                name: "Education",
                type: "select",
                required: t.steps[2].inputs[0].required,
                placeHolder: t.steps[2].inputs[0].placeHolder,
                options: t.steps[2].inputs[0].options
              },
              {
                name: "OccupationName",
                type: "select",
                required: t.steps[2].inputs[1].required,
                placeHolder: t.steps[2].inputs[1].placeHolder,
                options: t.steps[2].inputs[1].options
              },
              {
                name: "id",
                type: "text",
                required: t.steps[2].inputs[2].required,
                minLength: {
                  value: 5,
                  message: t.steps[2].inputs[2].minLength.message,
                },
                pattern: {
                  value: /^[0-9]*$/,
                  message: t.steps[2].inputs[2].pattern.message,
                },
                placeHolder: t.steps[2].inputs[2].placeHolder,
                value: t.steps[2].inputs[2].value
              },
            ],
          },
        ]} 
      />
    </main>
  );
}
