import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AppContext } from "./AppContext";

// This component ensures the user is logged in and has the right role to access the route
const ProtectedRoute = ({ element, allowedRoles }) => {
	const { isLoggedIn } = useContext(AppContext);

	// Check if the user is logged in and their role is one of the allowed roles
	if (isLoggedIn) {
		return element;
	}

	// If not logged in or role is not allowed, redirect to Home
	return <Navigate to="*" replace />;
};

export default ProtectedRoute;
