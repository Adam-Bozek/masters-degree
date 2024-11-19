import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// Import Bootstrap CSS, JavaScript and Icons
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Importing components
import App from "./App";
import ContextProvider from "./utilities/AppContextProvider";
import reportWebVitals from "./utilities/reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<ContextProvider>
				<App />
			</ContextProvider>
		</BrowserRouter>
	</React.StrictMode>,
);

// Reporting web vitals
reportWebVitals(console.log);
