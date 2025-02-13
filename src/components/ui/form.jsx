import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { useFormStore } from "../../stores/formStore";
import PropTypes from "prop-types";

/**
 * DynamicForm Component
 * A multi-step form component built with React and react-hook-form.
 *
 * Props:
 * - onSubmit (function): Handles form submission.
 * - buttonlabels (object): Labels for navigation buttons (previous, next, submit).
 * - dialogs (array of objects): Configurations de diálogos, ex.: prompt de login.
 * - steps (array of objects): Array de configurações de etapas contendo título e inputs.
 */
export function Form({ onSubmit, buttonlabels, dialogs, steps }) {
  const navigate = useNavigate();
  const [step, setStep] = useState(0); // Estado da etapa atual
  const methods = useForm(); // Métodos do react-hook-form

  const setState = useFormStore((state) => state.setState);
  const formValues = methods.watch();

  // Sempre que formValues mudar, atualiza a store do Zustand
  useEffect(() => {
    setState(formValues);
  }, [formValues, setState]);

  // Avança para a próxima etapa se os inputs atuais forem válidos
  const nextStep = async () => {
    const isValid = await methods.trigger();
    if (isValid) {
      setStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
      steps[step].inputs.forEach((input) => {
        methods.resetField(input.name);
      });
    }
  };

  // Retorna para a etapa anterior
  const previousStep = () => setStep((prev) => (prev > 0 ? prev - 1 : prev));

  // Componente para exibir mensagem de erro na validação
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
          {/* Inputs da etapa */}
          <div className="flex-col w-full">
            {/* Título da etapa */}
            <h2 className="m-5 text-2xl italic font-bold text-center font-kanit-thin">
              {steps[step].title}
            </h2>

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
                    className="p-2 w-full placeholder-black text-black bg-white rounded border-b border-black placeholder:font-Roboto"
                  />
                )}
                {/* Mensagem de erro */}
                <ErrorMessage
                  error={methods.formState.errors[input.name]?.message}
                />
              </div>
            ))}
          </div>

          {/* Botões de navegação */}
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

            {/* Links adicionais */}
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
          </div>
        </form>
      </FormProvider>
    </div>
  );
}

Form.propTypes = {
  // Função a ser executada após completar a última etapa
  onSubmit: PropTypes.func.isRequired,

  // Labels para os botões do formulário (next, previous, submit)
  buttonlabels: PropTypes.shape({
    next: PropTypes.string.isRequired,
    previous: PropTypes.string.isRequired,
    submit: PropTypes.string.isRequired,
  }).isRequired,

  // Prompt de login ou link adicional opcional
  dialogs: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    }),
  ),

  // Configuração para cada etapa do formulário
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      // Título da etapa
      title: PropTypes.string.isRequired,

      // Array de configurações de inputs para a etapa
      inputs: PropTypes.arrayOf(
        PropTypes.shape({
          // Nome único do input
          name: PropTypes.string.isRequired,

          // Tipo do input (ex.: text, email, select)
          type: PropTypes.string.isRequired,

          // Mensagem de erro para input obrigatório
          required: PropTypes.string,

          // Função para validar o valor do input
          validate: PropTypes.func,

          // Placeholder do input
          placeholder: PropTypes.string,

          // Validação de comprimento mínimo e sua mensagem de erro
          minlength: PropTypes.shape({
            value: PropTypes.number.isRequired,
            message: PropTypes.string.isRequired,
          }),

          // Validação por regex e sua mensagem de erro
          pattern: PropTypes.shape({
            value: PropTypes.instanceOf(RegExp).isRequired,
            message: PropTypes.string.isRequired,
          }),

          // Opções para input do tipo select
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
