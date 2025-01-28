import { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import PropTypes from "prop-types";

/**
 * DynamicForm Component
 * A multi-step form component built with React and react-hook-form.
 *
 * Props:
 * - onSubmit (function): Handles form submission.
 * - buttonLabels (object): Labels for navigation buttons (previous, next, submit).
 * - option (object): Additional option to render a login prompt.
 * - steps (array of objects): Array of step configurations containing title and inputs.
 */
export function DynamicForm({ onSubmit, buttonLabels, option, steps }) {
  const [step, setStep] = useState(0); // Current step state
  const methods = useForm(); // Form methods from react-hook-form

  // Proceed to the next step if current inputs are valid
  const nextStep = async () => {
    const isValid = await methods.trigger();
    if (isValid) {
      setStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
    }
  };

  // Return to the previous step
  const previousStep = () => setStep((prev) => (prev > 0 ? prev - 1 : prev));

  // UsesEffect to reset form fields when the step changes
  useEffect(() => {
    steps[step].inputs.forEach((input) => {
      methods.resetField(input.name);
    });
  }, [step, methods, steps]);

  // Error message component for form validation errors
  function ErrorMessage({ error }) {
    return error ? <p className="text-red-500 text-sm">{error}</p> : null;
  }

  ErrorMessage.propTypes = {
    error: PropTypes.string,
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {/* Step indicators */}
      {steps.length > 1 && (
        <ul className="mb-6 flex flex-row justify-between">
          {steps.map((_, index) => (
            <li
              key={index}
              className="text-green-600 relative flex flex-row items-center text-center text-sm font-semibold"
            >
              <div
                className={`mx-auto h-8 w-8 rounded-sm flex items-center justify-center text-base transition-all duration-1000 ${
                  index <= step ? "bg-green text-text_secondary" : "bg-white text-outline"
                }`}
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
      )}

      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex w-96 flex-col items-center rounded-lg bg-white p-6 shadow-2xl"
        >
          {/* Step title */}
          <h2 className="m-5 text-2xl font-bold italic text-center">
            {steps[step].title}
          </h2>

          {/* Step inputs */}
          {steps[step].inputs.map((input, index) => (
            <div key={index} className="w-full mb-4">
              {input.type === "select" ? ( // In case the input is a dropdown type
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
                  {input.options.map((select, optIndex) => (
                    <option key={optIndex} value={select.value}>
                      {select.label}
                    </option>
                  ))}
                </select>
              ) : ( // Regular input
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

          {/* Navigation buttons */}
          <div className="my-2 flex flex-row items-center justify-center gap-5">
            {step > 0 && (
              <button
                type="button"
                onClick={previousStep}
                className="rounded bg-green px-4 py-2 text-white hover:bg-gray-500"
              >
                {buttonLabels.previous}
              </button>
            )}
            {step < steps.length - 1 && (
              <button
                type="button"
                onClick={nextStep}
                className="rounded bg-green px-4 py-2 text-white hover:bg-gray-500"
              >
                {buttonLabels.next}
              </button>
            )}
            {step === steps.length - 1 && (
              <button
                type="submit"
                className="rounded bg-green px-4 py-2 text-white hover:bg-gray-500"
              >
                {buttonLabels.submit}
              </button>
            )}
          </div>

          {/* Optional link */}
          {option && (
            <p className="flex text-outline gap-1">
              {option.text}
              <a
                onClick={option.func}
                className="text-blue-600 underline cursor-pointer"
              >
                {option.label}
              </a>
            </p>
          )}
        </form>
      </FormProvider>
    </div>
  );
}

DynamicForm.propTypes = {
  // Function to execute after completing the last step
  onSubmit: PropTypes.func.isRequired,

  // Labels for the form buttons (next, previous, submit)
  buttonLabels: PropTypes.shape({
    next: PropTypes.string.isRequired,
    previous: PropTypes.string.isRequired,
    submit: PropTypes.string.isRequired,
  }).isRequired,

  // Optional login prompt or additional link at the bottom of the form
  option: PropTypes.shape({
    text: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    func: PropTypes.func.isRequired,
  }),

  // Configuration for each step of the form
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      // Title of the step 
      title: PropTypes.string.isRequired,

      // Array of input configurations for the step
      inputs: PropTypes.arrayOf(
        PropTypes.shape({
          // Unique name for the input
          name: PropTypes.string.isRequired,

          // Input type (e.g., text, email, select)
          type: PropTypes.string.isRequired,

          // Validation error message if input is required but not provided
          required: PropTypes.string,

          // Function to validate input value
          validate: PropTypes.func,

          // Placeholder text for the input
          placeHolder: PropTypes.string,

          // Minimum length validation and its error message
          minLength: PropTypes.shape({
            value: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
          }),

          // Regex pattern validation and its error message
          pattern: PropTypes.shape({
            value: PropTypes.instanceOf(RegExp).isRequired,
            message: PropTypes.string.isRequired,
          }),

          // Options for a select input type
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

