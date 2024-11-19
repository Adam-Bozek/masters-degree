import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import ProtectedRoute from "./components/utilities/ProtectedRoute";

// Public routes
import Home from "./components/LandingPage";

// Private routes
import AfterRegistration from "./components/AfterRegistration";


const App = () => {
	return (
		<Routes>
			{/* Public routes */}
			<Route path="/Home" element={<Home />} />

			{/* Public Routes */}
			<Route path="/ParentDashboardTasks" element={<ProtectedRoute element={<ParentDashboardTasks />} allowedRoles={["parent"]} />} />

			{/* Private Routes */}
			<Route path="/KidRewardExchange" element={<ProtectedRoute element={<KidRewardExchange />} allowedRoles={["kid"]} />} />

			{/* Catch-all redirect */}
			<Route path="*" element={<Navigate replace to="/Home" />} />
		</Routes>
	);
};

export default App;
