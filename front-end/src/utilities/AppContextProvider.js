import React, { createContext, useState } from "react";

// Creating context "global variables"
export const AppContext = createContext();

// Provider component that provides the context
export const AppContextProvider = ({ children }) => {
	// Variables for user interaction
  // TODO: Think of random default values
	const [name, setStateName] = useState("");
	const [email, setStateEmail] = useState("");
	const [isLoggedIn, setIsLoggedIn] = useState(false);


  // Setter function for name
	const setName = (newName) => {
		if ((newName.length >= 2 && newName.length <= 50) || newName == "") {
			setStateName(newName);
		} else {
			console.error("Invalid name format.");
		}
	};

	// Setter function for email
	const setEmail = (newEmail) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (emailRegex.test(newEmail) || newEmail === "") {
			setStateEmail(newEmail);
		} else {
			console.error("Invalid email format.");
		}
	};

	return <AppContext.Provider value={{ name, email, isLoggedIn, setName, setEmail, setRole, setIsLoggedIn }}>{children}</AppContext.Provider>;
};
