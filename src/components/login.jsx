import { Form } from "./ui/form";
import { useSession } from "../hooks/useSession";
import { useRequestStore } from "../stores/requestStore";

export function Login() {
  const requestState = useRequestStore((state) => state.state);
  const { startSession } = useSession();

  return (
    <div className="flex flex-col gap-10 items-center">
      <p className="h-10 text-center text-red-500 w-100">
        {requestState == "error" && "Invalid email or password"}
      </p>
      <div className="m-10 w-96 border-2 border-solid shadow-xl border-outline">
        <Form
          onSubmit={(data) => startSession(data)}
          buttonlabels={{
            next: "next",
            previous: "previous",
            submit: "submit",
          }}
          dialogs={[
            {
              text: "Don't have and accout yet?",
              label: "Signup!",
              path: "/register",
            },
            {
              text: "Did you forgot your password?",
              label: "Try this!",
              path: "/",
            },
          ]}
          // Process each step in the form
          steps={[
            {
              title: "Login Now!",
              inputs: [
                {
                  name: "email",
                  type: "email",
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "please enter a valid email address",
                  },
                  placeholder: "Your email",
                },

                {
                  name: "password",
                  type: "password",
                  required: "Password is required",
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                    message:
                      "password must be at least 8 characters long and contain both letters and numbers",
                  },
                  placeholder: "password",
                },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
}
