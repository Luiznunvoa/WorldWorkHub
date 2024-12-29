import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";

export function Register() {
  const[step, setStep] = useState(0);
  const steps = ["Account Information", "Personal Details", "Preferences" ];
  const methods = useForm();

  const nextStep = () => setStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
  const previousStep = () => setStep((prev) => (prev > 0 ? prev - 1 : prev));
  
  const onSubmit = (data) => {
    console.log(data); 
    alert("Form submitted!");
  };

  return (
    <main className="flex flex-col items-center w-full p-6">
      <ul className="flex flex-row justify-between mb-6">
        {steps.map((label, index) => (
          <li
            key={index}
            className="flex flex-row items-center text-sm font-semibold text-center relative text-green-600"
          >
          
            <div className={`w-12 h-12 mx-auto rounded-full ${index <= step ? "bg-green text-text" : "bg-background_secondary text-text_secondary"} text-xl flex items-center justify-center`} >
              {index + 1}
            </div>
            {(index + 1) < steps.length &&
              <div className={`w-32 h-6 rounded-lg ${index < step ? "bg-green" : "bg-background_secondary"} m-5`} />                 
            }
          </li>
        ))}                
      </ul>
      <h1 className="text-2xl font-bold font-kanit-thin italic m-5">
        { steps[step] } 
      </h1>

      <FormProvider {...methods}> 
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex flex-col items-center w-[32rem]  bg-white p-6 rounded-lg shadow"
        >
          { step == 0 &&
            <> 
              <h2 className="text-lg font-bold font-Roboto m-5">
                Create your account
              </h2>
              <input
                {...methods.register("username", { required: "username is required" })}
                type="name"
                placeholder="Name"
                className="w-full p-2 mb-4 border border-gray-300 rounded"
              />
              <input
                {...methods.register("email", { required: "Email is required" })}
                type="email"
                placeholder="Email"
                className="w-full p-2 mb-4 border border-gray-300 rounded"
              />
              <input
                {...methods.register("password", { required: "Password is required" })}
                type="password"
                placeholder="Password"
                className="w-full p-2 mb-4 border border-gray-300 rounded"
              />
              <input
                {...methods.register("confirmPassword", { required: "Confirm your password" })}
                type="password"
                placeholder="Confirm Password"
                className="w-full p-2 mb-4 border border-gray-300 rounded"
              />
            </>
          }

          {step == 1 &&
            <> 
              <h2 className="text-lg font-bold font-Roboto m-5">
                Create your account
              </h2>
              <input
                {...methods.register("occupation", { required: "Occupation is required" })}
                type="text"
                placeholder="Your preferred occupation"
                className="w-full p-2 mb-4 border border-gray-300 rounded"
              />
            </>
          }

          <div className="flex flex-row items-center justify-center gap-5">
            { step > 0 &&
              <button
                type="button"
                onClick={previousStep} 
                className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
              > 
                Previous
              </button>
            }
            {step < (steps.length - 1)  &&
              <button
                type="button"
                onClick={nextStep} 
                className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
              > 
                Next
              </button>
            }
            {step == (steps.length - 1) &&
              <button
                type="submit"
                className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
              > 
                Submit
              </button>
            }  
            
          </div>
        </form>
      </FormProvider>
    </main>
  );
}