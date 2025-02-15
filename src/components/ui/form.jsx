import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { useFormStore } from "../../stores/formStore";
import PropTypes from "prop-types";

/**
 * Form Component
 * A multi-step form component built with React and react-hook-form.
 *
 * Props:
 * - onSubmit (function): Handles form submission.
 * - buttonlabels (object): Labels for navigation buttons (previous, next, submit).
 * - dialogs (array of objects): Dialogs and links in the bottom of the form,
 * - steps (array of objects): Array of all the steps in the form.
 */
export function Form({ onSubmit, buttonlabels, dialogs, steps }) {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const methods = useForm();

  const setState = useFormStore((state) => state.setState);
  const formValues = methods.watch();

  useEffect(() => {
    setState(formValues);
  }, [formValues, setState]);

  const nextStep = async () => {
    const isValid = await methods.trigger();
    if (isValid) {
      setStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
    }
  };

  const previousStep = () => setStep((prev) => (prev > 0 ? prev - 1 : prev));

  function ErrorMessage({ error }) {
    return <p className="h-1 text-sm text-red-500">{error}</p>;
  }

  ErrorMessage.propTypes = {
    error: PropTypes.string,
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex flex-col justify-between items-center p-6 w-full h-full bg-white shadow-2xl"
        >
          <div className="flex-col w-full">
            {steps[step].title && (
              <h2 className="m-5 text-2xl italic font-bold text-center font-kanit-thin">
                {steps[step].title}
              </h2>
            )}

            {steps[step].inputs.map((input, index) => (
              <div
                key={`${input.name}-${index}-${step}`}
                className="mb-4 w-full"
              >
                {input.type === "select" ? (
                  <select
                    key={`${input.name}-${step}`}
                    {...methods.register(input.name, {
                      required: input.required,
                    })}
                    className="p-2 w-full rounded border border-gray-300"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      {input.placeholder}
                    </option>
                    {input.options.map((select, optIndex) => (
                      <option key={optIndex} value={select.value}>
                        {select.label}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    key={`${input.name}-${step}`}
                    defaultValue=""
                    {...methods.register(input.name, {
                      required: input.required,
                      minlength: input.minLength,
                      pattern: input.pattern,
                      validate:
                        input.validate &&
                        ((value) => input.validate(value, methods)),
                    })}
                    type={input.type}
                    placeholder={input.placeholder}
                    className="p-2 w-full placeholder-black text-black bg-white rounded border-b border-black placeholder:font-Roboto"
                  />
                )}
                {/* Error Message */}
                <ErrorMessage
                  error={methods.formState.errors[input.name]?.message}
                />
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col justify-between items-center w-full">
            <div className="flex flex-row gap-5 justify-center items-center my-2">
              {step > 0 && (
                <button
                  type="button"
                  onClick={previousStep}
                  className="py-2 px-4 text-white rounded hover:bg-gray-500 bg-green"
                >
                  {buttonlabels.previous}
                </button>
              )}
              {step < steps.length - 1 && (
                <button
                  type="button"
                  onClick={nextStep}
                  className="py-2 px-4 text-white rounded hover:bg-gray-500 bg-green"
                >
                  {buttonlabels.next}
                </button>
              )}
              {step === steps.length - 1 && (
                <button
                  type="submit"
                  className="py-2 px-4 text-white rounded hover:bg-gray-500 bg-green"
                >
                  {buttonlabels.submit}
                </button>
              )}
            </div>

            {/* Additional Links */}
            {dialogs && dialogs.map((dialog, index) => (
              <p key={index} className="flex gap-1 text-outline">
                {dialog.text}
                <a
                  onClick={() => navigate(dialog.path)}
                  className="text-blue-600 underline cursor-pointer"
                >
                  {dialog.label}
                </a>
              </p>
            ))}
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,

  buttonlabels: PropTypes.shape({
    next: PropTypes.string.isRequired,
    previous: PropTypes.string.isRequired,
    submit: PropTypes.string.isRequired,
  }).isRequired,

  dialogs: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }).isRequired,
  ),

  steps: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,

      inputs: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,

          type: PropTypes.string.isRequired,

          required: PropTypes.string,

          validate: PropTypes.func,

          placeholder: PropTypes.string,

          minlength: PropTypes.shape({
            value: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
          }),

          pattern: PropTypes.shape({
            value: PropTypes.instanceOf(RegExp).isRequired,
            message: PropTypes.string.isRequired,
          }),

          options: PropTypes.arrayOf(
            PropTypes.shape({
              label: PropTypes.string.isRequired,
              value: PropTypes.string.isRequired,
            }),
          ),
        }),
      ).isRequired,
    }).isRequired,
  ).isRequired,
};
