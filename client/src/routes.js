import React from "react";
import Login from "./Login";
import Join from "./Join";
import App from "./App";

const routes = [
  { name: "Join", path: "/", exact: true, main: () => <Join /> },
  { name: "Login", path: "/login", exact: true, main: () => <Login /> },
  { name: "App", path: "/app", exact: true, main: () => App}
];

export default routes;