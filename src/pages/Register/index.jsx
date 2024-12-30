import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";

export function Register() {
  const [step, setStep] = useState(0);
  const steps = ["Account Information", "Personal Details", "Preferences"];
  const methods = useForm();

  const nextStep = () =>
    setStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
  const previousStep = () => setStep((prev) => (prev > 0 ? prev - 1 : prev));

  const onSubmit = (data) => {
    console.log(data);
    alert("Form submitted!");
  };

  return (
    <main className="flex w-full flex-col items-center p-6">
      <ul className="mb-6 flex flex-row justify-between">
        {steps.map((label, index) => (
          <li
            key={index}
            className="text-green-600 relative flex flex-row items-center text-center text-sm font-semibold"
          >
            <div
              className={`mx-auto h-12 w-12 rounded-xl ${index <= step ? "bg-green text-text" : "bg-background_secondary text-text_secondary"} flex items-center justify-center text-xl`}
            >
              {index + 1}
            </div>
            {index + 1 < steps.length && (
              <div
                className={`h-6 w-32 rounded-lg ${index < step ? "bg-green" : "bg-background_secondary"} m-5`}
              />
            )}
          </li>
        ))}
      </ul>
      <h1 className="m-5 font-kanit-thin text-2xl font-bold italic">
        {steps[step]}
      </h1>

      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex w-[32rem] flex-col items-center rounded-lg bg-white p-6 shadow"
        >
          {step == 0 && (
            <>
              <h2 className="m-5 font-Roboto text-lg font-bold">
                Create your account
              </h2>
              <input
                {...methods.register("username", {
                  required: "username is required",
                })}
                type="name"
                placeholder="Name"
                className="mb-4 w-full rounded border border-gray-300 p-2"
              />
              <input
                {...methods.register("email", {
                  required: "Email is required",
                })}
                type="email"
                placeholder="Email"
                className="mb-4 w-full rounded border border-gray-300 p-2"
              />
              <input
                {...methods.register("password", {
                  required: "Password is required",
                })}
                type="password"
                placeholder="Password"
                className="mb-4 w-full rounded border border-gray-300 p-2"
              />
              <input
                {...methods.register("confirmPassword", {
                  required: "Confirm your password",
                })}
                type="password"
                placeholder="Confirm Password"
                className="mb-4 w-full rounded border border-gray-300 p-2"
              />
            </>
          )}

          {step == 1 && (
            <>
              <h2 className="m-5 font-Roboto text-lg font-bold">
                Personal Details
              </h2>
              <input
                {...methods.register("occupation", {
                  required: "Occupation is required",
                })}
                type="text"
                placeholder="Occupation"
                className="mb-4 w-full rounded border border-gray-300 p-2"
              />
              <input
                {...methods.register("address", {
                  required: "Address is required",
                })}
                type="text"
                placeholder="Address"
                className="mb-4 w-full rounded border border-gray-300 p-2"
              />
              <input
                {...methods.register("cpf", { required: "CPF is required" })}
                type="text"
                placeholder="CPF"
                className="mb-4 w-full rounded border border-gray-300 p-2"
              />
              <select
                {...methods.register("education", {
                  required: "Education level is required",
                })}
                className="mb-4 w-full rounded border border-gray-300 p-2"
              >
                <option value="">Select Education Level</option>
                <option value="highschool">High School</option>
                <option value="bachelor">Bachelors Degree</option>
                <option value="master">Masters Degree</option>
                <option value="phd">PhD</option>
              </select>
              <input
                {...methods.register("languages", {
                  required: "Languages are required",
                })}
                type="text"
                placeholder="Languages spoken"
                className="mb-4 w-full rounded border border-gray-300 p-2"
              />
              <input
                {...methods.register("phone", {
                  required: "Phone number is required",
                })}
                type="tel"
                placeholder="Phone Number"
                className="mb-4 w-full rounded border border-gray-300 p-2"
              />
            </>
          )}

          {step == 2 && (
            <>
              <h2 className="m-5 font-Roboto text-lg font-bold">Preferences</h2>
              <textarea
                {...methods.register("hobbies")}
                placeholder="Describe your hobbies"
                className="mb-4 w-full rounded border border-gray-300 p-2"
              />
              <label className="mb-4 flex items-center">
                <input
                  {...methods.register("notifications")}
                  type="checkbox"
                  className="mr-2"
                />
                Receive notifications
              </label>
              <select
                {...methods.register("communicationPreference", {
                  required: "Please select a communication preference",
                })}
                className="mb-4 w-full rounded border border-gray-300 p-2"
              >
                <option value="">Preferred Communication Format</option>
                <option value="email">Email</option>
                <option value="phone">Phone</option>
                <option value="text">Text Message</option>
              </select>
            </>
          )}

          <div className="flex flex-row items-center justify-center gap-5">
            {step > 0 && (
              <button
                type="button"
                onClick={previousStep}
                className="rounded bg-gray-400 px-4 py-2 text-white hover:bg-gray-500"
              >
                Previous
              </button>
            )}
            {step < steps.length - 1 && (
              <button
                type="button"
                onClick={nextStep}
                className="rounded bg-gray-400 px-4 py-2 text-white hover:bg-gray-500"
              >
                Next
              </button>
            )}
            {step == steps.length - 1 && (
              <button
                type="submit"
                className="rounded bg-gray-400 px-4 py-2 text-white hover:bg-gray-500"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </FormProvider>
    </main>
  );
}
