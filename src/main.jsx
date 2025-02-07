import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "./routes/router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter />
  </StrictMode>,
);
