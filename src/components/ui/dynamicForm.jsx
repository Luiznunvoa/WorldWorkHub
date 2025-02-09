import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import PropTypes from "prop-types";


export function StepIndicator({ steps, currentStep }) {
  if (steps.length <= 1) return null;

  return (
    <ul className="flex flex-row justify-between mb-6">
      {steps.map((_, index) => (
        <li
          key={index}
          className="flex relative flex-row items-center text-sm font-semibold text-center text-green-600"
        >
          <div
            className={`mx-auto h-8 w-8 rounded-sm flex items-center justify-center text-base transition-all duration-1000 
              ${index <= currentStep ? "bg-green text-text_secondary" : "bg-white text-outline"}`}
          >
            {index + 1}
          </div>
          {index + 1 < steps.length && (
            <div
              className={`h-1 w-36 transition-all duration-1000 ${
                index < currentStep ? "bg-green" : "bg-white"
              }`}
            />
          )}
        </li>
      ))}
    </ul>
  );
}

StepIndicator.propTypes = {
  steps: PropTypes.array.isRequired,
  currentStep: PropTypes.number.isRequired,
};

// Para facilitar a identificação no DynamicForm (quando usado via children)
StepIndicator.displayName = "StepIndicator";

/**
 * DynamicForm Component
 * A multi-step form component built with React and react-hook-form.
 *
 * Props:
 * - onSubmit (function): Handles form submission.
 * - buttonlabels (object): Labels for navigation buttons (previous, next, submit).
 * - option (object): Additional option to render a login prompt.
 * - steps (array of objects): Array of step configurations containing title and inputs.
 */

export function DynamicForm({ onSubmit, buttonlabels, dialogs, steps, children }) {
  const navigate = useNavigate();
  const [step, setStep] = useState(0); // Estado da etapa atual
  const methods = useForm(); // Métodos do react-hook-form

  // Função para avançar para a próxima etapa (se os inputs forem válidos)
  const nextStep = async () => {
    const isValid = await methods.trigger();
    if (isValid) {
      setStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
    }
  };

  // Função para retornar para a etapa anterior
  const previousStep = () => setStep((prev) => (prev > 0 ? prev - 1 : prev));

  // useEffect para resetar os campos do formulário ao mudar de etapa
  useEffect(() => {
    steps[step].inputs.forEach((input) => {
      methods.resetField(input.name);
    });
  }, [step, methods, steps]);

  // Componente para exibir mensagens de erro de validação
  function ErrorMessage({ error }) {
    return error ? <p className="text-sm text-red-500">{error}</p> : null;
  }

  ErrorMessage.propTypes = {
    error: PropTypes.string,
  };

  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      {/* Renderiza os children passados, injetando as props necessárias em <StepIndicator /> */}
      {React.Children.map(children, (child) => {
        // Verifica se o componente filho é o StepIndicator (usando displayName ou comparação direta)
        if (
          child &&
          child.type &&
          (child.type.displayName === "StepIndicator" || child.type === StepIndicator)
        ) {
          return React.cloneElement(child, { steps, currentStep: step });
        }
        return child;
      })}

      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex flex-col items-center p-6 w-full bg-white rounded-lg shadow-2xl"
        >
          {/* Título da etapa */}
          <h2 className="m-5 text-2xl italic font-bold text-center">
            {steps[step].title}
          </h2>

          {/* Inputs da etapa */}
          {steps[step].inputs.map((input, index) => (
            <div key={index} className="mb-4 w-full">
              {input.type === "select" ? (
                <select
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
                  className="p-2 w-full rounded border border-gray-300 placeholder:font-Roboto"
                />
              )}
              {/* Mensagem de erro */}
              <ErrorMessage
                error={methods.formState.errors[input.name]?.message}
              />
            </div>
          ))}

          {/* Botões de navegação */}
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

          {/* Diálogos/opções adicionais */}
          {dialogs.map((dialog, index) => (
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
        </form>
      </FormProvider>
    </div>
  );
}
DynamicForm.propTypes = {
  // Function to execute after completing the last step
  onSubmit: PropTypes.func.isRequired,

  // Labels for the form buttons (next, previous, submit)
  buttonlabels: PropTypes.shape({
    next: PropTypes.string.isRequired,
    previous: PropTypes.string.isRequired,
    submit: PropTypes.string.isRequired,
  }).isRequired,

  // Optional login prompt or additional link at the bottom of the form
  dialogs: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }),
  ),

  children: PropTypes.node,

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
          placeholder: PropTypes.string,

          // Minimum length validation and its error message
          minlength: PropTypes.shape({
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
            }),
          ),
        }),
      ).isRequired,
    }).isRequired,
  ).isRequired,
};
