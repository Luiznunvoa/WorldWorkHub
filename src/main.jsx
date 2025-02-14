import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "./router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter />,
  </StrictMode>
);
