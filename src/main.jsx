import { createRoot } from "react-dom/client";
import "./index.css";
import { lazy, Suspense } from "react";
const App = lazy(() => import("./App.jsx"));
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Suspense>
      <App />
    </Suspense>
  </BrowserRouter>
);
