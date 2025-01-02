import { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import PropTypes from "prop-types";

export function DynamicForm({ onSubmit, steps }) {
  const [step, setStep] = useState(0);
  const methods = useForm();

  const nextStep = async () => {
    const isValid = await methods.trigger(); // Valida todos os campos da etapa atual
    if (isValid) {
      setStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
    }
  };

  const previousStep = () => setStep((prev) => (prev > 0 ? prev - 1 : prev));

  useEffect(() => {
    steps[step].inputs.forEach((input) => {
      methods.resetField(input.name);
    });
  }, [step, methods, steps]);

  function ErrorMessage({ error }) {
    return error ? <p className="text-red-500 text-sm">{error}</p> : null;
  }

  ErrorMessage.propTypes = {
    error: PropTypes.string,
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <ul className="mb-6 flex flex-row justify-between">
        {steps.map((_, index) => (
          <li
            key={index}
            className="text-green-600 relative flex flex-row items-center text-center text-sm font-semibold"
          >
            <div
              className={`mx-auto h-12 w-12 rounded-xl ${
                index <= step
                  ? "bg-green text-text"
                  : "bg-background_secondary text-text_secondary"
              } flex items-center justify-center text-xl transition-all`}
            >
              {index + 1}
            </div>
            {index + 1 < steps.length && (
              <div
                className={`h-6 w-32 rounded-lg transition-all ${
                  index < step ? "bg-green" : "bg-background_secondary"
                } m-5`}
              />
            )}
          </li>
        ))}
      </ul>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex w-[32rem] flex-col items-center rounded-lg bg-white p-6 shadow"
        >
          <h2 className="m-5 font-Roboto text-lg font-bold">{steps[step].title}</h2>
          {steps[step].inputs.map((input, index) => (
            <div key={index} className="w-full mb-4">
              {input.type === "select" ? (
                <select
                  {...methods.register(input.name, {
                    required: input.required,
                  })}
                  className="w-full rounded border border-gray-300 p-2"
                  defaultValue=""
                >
                  <option value="" disabled>
                    {input.placeHolder || "Select an option"}
                  </option>
                  {input.options?.map((option, optIndex) => (
                    <option key={optIndex} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  {...methods.register(input.name, {
                    required: input.required,
                    minLength: input.minLength,
                    pattern: input.pattern,
                    ...(input.validate && {
                      validate: (value) =>
                        value === methods.getValues(input.validate) ||
                        `${input.validate} do not match`,
                    }),
                  })}
                  type={input.type}
                  placeholder={input.placeHolder}
                  className="w-full rounded border border-gray-300 p-2"
                />
              )}
              <ErrorMessage error={methods.formState.errors[input.name]?.message} />
            </div>
          ))}
          <div className="flex flex-row items-center justify-center gap-5">
            {step > 0 && (
              <button
                type="button"
                onClick={previousStep}
                className="mt-4 rounded bg-gray-400 px-4 py-2 text-white hover:bg-gray-500"
              >
                Previous
              </button>
            )}
            {step < steps.length - 1 && (
              <button
                type="button"
                onClick={nextStep}
                className="mt-4 rounded bg-gray-400 px-4 py-2 text-white hover:bg-gray-500"
              >
                Next
              </button>
            )}
            {step === steps.length - 1 && (
              <button
                type="submit"
                className="mt-4 rounded bg-gray-400 px-4 py-2 text-white hover:bg-gray-500"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

DynamicForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      inputs: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          required: PropTypes.string,
          validate: PropTypes.string,
          minLength: PropTypes.shape({
            value: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
          }),
          pattern: PropTypes.shape({
            value: PropTypes.instanceOf(RegExp).isRequired,
            message: PropTypes.string.isRequired,
          }),
          type: PropTypes.string.isRequired,
          placeHolder: PropTypes.string,
          options: PropTypes.arrayOf(
            PropTypes.shape({
              label: PropTypes.string.isRequired,
              value: PropTypes.string.isRequired,
            })
          ),
        })
      ).isRequired,
    }).isRequired
  ).isRequired,
};
