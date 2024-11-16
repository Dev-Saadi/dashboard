import { useState } from "react";
import "./App.css";
import Router from "./routers/Router";
import publicRoute from "./routers/routes/publicRoute";

function App() {
  const [allRoutes, setAllRoutes] = useState([...publicRoute]);

  return <Router allRoutes={allRoutes} />;
}

export default App;
