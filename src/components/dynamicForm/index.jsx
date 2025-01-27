import { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import PropTypes from "prop-types";

export function DynamicForm({ onSubmit, buttonLabels, option, steps }) {
  const [step, setStep] = useState(0);
  const methods = useForm();

  const nextStep = async () => {
    const isValid = await methods.trigger();
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
      { (steps.length > 1) &&
        <ul className="mb-6 flex flex-row justify-between">
          {steps.map((_, index) => (
            <li
              key={index}
              className="text-green-600 relative flex flex-row items-center text-center text-sm font-semibold"
            >
              <div
                className={`mx-auto h-8 w-8 rounded-sm ${
                  index <= step
                    ? "bg-green text-text_secondary"
                    : "bg-white text-outline"
                } flex items-center justify-center text-base transition-all duration-1000`}
              >
                {index + 1}
              </div>
              {index + 1 < steps.length && (
                <div
                  className={`h-1 w-36 transition-all duration-1000 ${
                    index < step ? "bg-green" : "bg-white"
                  }`}
                />
              )}
            </li>
          ))}
        </ul>
      }
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex w-96 flex-col items-center rounded-lg bg-white p-6 shadow-2xl"
        >
          <h2 className="m-5 font-archivo-black-regular text-2xl text-center font-bold italic">
            {steps[step].title}
          </h2>
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
                    {input.placeHolder}
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
                    validate: input.validate && ((value) => input.validate(value, methods)),
                  })}
                  type={input.type}
                  placeholder={input.placeHolder}
                  className="w-full rounded border border-gray-300 p-2 placeholder:font-Roboto"
                />
              )}
              <ErrorMessage error={methods.formState.errors[input.name]?.message} />
            </div>
          ))}
          <div className="my-2 flex flex-row items-center justify-center gap-5">
            {step > 0 && (
              <button
                type="button"
                onClick={previousStep}
                className="rounded font-Roboto bg-green px-4 py-2 text-white hover:bg-gray-500"
              >
                {buttonLabels.previous}
              </button>
            )}
            {step < steps.length - 1 && (
              <button
                type="button"
                onClick={nextStep}
                className="rounded font-Roboto bg-green px-4 py-2 text-white hover:bg-gray-500"
              >
                {buttonLabels.next}
              </button>
            )}
            {step === steps.length - 1 && (
              <button
                type="submit"
                className="rounded font-Roboto bg-green px-4 py-2 text-white hover:bg-gray-500"
              >
                {buttonLabels.submit}
              </button>
            )}
          </div>

          { option && 
            <p className="flex font-Roboto text-outline gap-1"> 
              {option.label}
              <a onClick={option.func} className="text-blue-600 underline cursor-pointer"> 
                login!
              </a>
            </p>
          }          
        </form>
      </FormProvider>
    </div>
  );
}

DynamicForm.propTypes = {
  
  // Function to run after the last step
  onSubmit: PropTypes.func.isRequired,

  // Labels to the form buttons(next, previous, submit)
  buttonLabels: PropTypes.shape({
    next: PropTypes.string.isRequired,
    previous: PropTypes.string.isRequired,
    submit: PropTypes.string.isRequired,
  }).isRequired,

  // Text with a link/function in the bottom of the form
  option: PropTypes.shape({
    label: PropTypes.string.isRequired,
    func: PropTypes.func.isRequired
  }),

  // Steps of the form
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,

      // Array of inputs in each step
      inputs: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          type: PropTypes.string.isRequired, 
          required: PropTypes.string,         // Message in the case input is not given
          validate: PropTypes.func,           // Function to validate input 
          placeHolder: PropTypes.string,      // Input text to represent the input

          // Value to the minimum lenght of the input and massege in case it's not achived
          minLength: PropTypes.shape({
            value: PropTypes.number.isRequired, 
            message: PropTypes.string.isRequired,
          }),

          // Regex of the input and message in case it's not in the pattern
          pattern: PropTypes.shape({
            value: PropTypes.instanceOf(RegExp).isRequired,
            message: PropTypes.string.isRequired,
          }),

          // In case the input have the type select, put here an array of options with the values
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
