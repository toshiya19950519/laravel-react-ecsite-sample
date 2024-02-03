import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import LoadingSpinner from "./context/LoadingSpinnerContext";

const container = document.getElementById("app");
const root = createRoot(container!);

root.render(
    <AuthProvider>
        <LoadingSpinner>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </LoadingSpinner>
    </AuthProvider>,
);
