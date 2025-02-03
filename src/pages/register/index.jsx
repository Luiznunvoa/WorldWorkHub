import { DynamicForm } from "../../components/dynamicForm";
import { Spinner } from "../../components/spinner";
import { stringToRegex, useFetchLocale } from "../../utils";
import { useRegister } from "./useRegister";

export function Register() {
  const t = useFetchLocale("register");
  const { mapData, handleSubmit, state } = useRegister();

  if (!t || state == "loading") {
    return <Spinner />;
  }

  if (state == "error") {
    return (
      <>
        error
      </>
    );
  }
  
  if (state == "success") {
    return (
      <>
        success
      </>
    );
  }
  
  return (
    <main className="flex flex-col items-center p-6 w-full">
      <div className="w-96">
        {/* Form to create a new account */} 
        <DynamicForm
          onSubmit={(data) => handleSubmit(mapData(data))}
          buttonlabels={t.buttonlabels}
          option={t.option}
          // Process each step in the form
          steps={t.steps.map(({ title, inputs }) => ({
            title,
            inputs: inputs.map(
              // Process each input field in the step
              ({
                // input properties
                name, type, required, placeholder, minlength, options, pattern, validate,
              }) => ({
                // Preserve basic input properties
                name, type, required, placeholder, minlength, options,

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
