import { createRoot } from "react-dom/client";
import "./index.css";
import { lazy, Suspense } from "react";
const App = lazy(() => import("./App.jsx"));
import { BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store/store.js";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Suspense>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </BrowserRouter>
);
