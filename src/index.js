import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { TodosPlaceholder } from "./todos-placeholder";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
		{/* <TodosPlaceholder></TodosPlaceholder> */}
	</React.StrictMode>,
);
