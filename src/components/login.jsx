import { useNavigate } from "react-router-dom";
import { DynamicForm } from "./ui/dynamicForm";
import { useUsers } from "../hooks/useUsers";
import { useRequestStore } from "../stores/requestStore";

export function Login() {
  const navigate = useNavigate();
  const requestState = useRequestStore.getState().state;
  const { validateUser } = useUsers();

  if (requestState == "success") {
    navigate("/");
  }

  return (
    <main className="flex flex-col gap-10 items-center">
      <div className="m-10 w-96">
        <p className="h-10 text-center text-red-500 w-100">
          {requestState == "error" && "Invalid email or password"}
        </p>
        <DynamicForm
          onSubmit={(data) => validateUser(data)}
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
    </main>
  );
}
