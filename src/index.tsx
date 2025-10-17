import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Hp } from "./screens/Hp";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Hp />
  </StrictMode>,
);
