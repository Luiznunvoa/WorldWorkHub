import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { DynamicForm } from "../../components/dynamicForm";
import { Spinner } from "../../components/spinner";
import { stringToRegex, useFetchLocale } from "../../utils";
import { AxiosHttpAdapter } from "../../adapter/httpUser";
import { UsersService } from "../../services/usersService";

export function Register() {
  const navigate = useNavigate();
  const t = useFetchLocale("register");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [err, setErr] = useState(false);

  const usersService = useMemo(
    () => new UsersService(new AxiosHttpAdapter()),
    [],
  );

  const handleSubmit = async (data) => {
    setIsSubmitting(true);

    const newUser = {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      password: data.password,
      occupation: "Cleaner",
      role: "Admin",
      region: data.region,
      phone: data.phone,
      zipcode: data.zipcode,
      education: data.education,
      city: "Niterói",
    };

    try {
      await usersService.create(newUser);
    } catch (error) {
      console.error("Registration error:", error);
      setErr(true);
    } finally {
      setIsSubmitting(false);
      if (err) {
        alert("Error creating user");
        navigate("/");
      } else {
        alert("User created successfully");
        navigate("/login");
      }
    }
  };

  if (!t || isSubmitting) {
    return <Spinner />;
  }

  return (
    <main className="flex flex-col items-center p-6 w-full">
      {/* Form to create a new account */}
      <DynamicForm
        onSubmit={(data) => handleSubmit(data)}
        buttonLabels={{
          next: t.buttonlabels.next,
          previous: t.buttonlabels.previous,
          submit: t.buttonlabels.submit,
        }}
        option={{
          text: t.option.text,
          label: t.option.label,
          func: () => navigate("/login"),
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
