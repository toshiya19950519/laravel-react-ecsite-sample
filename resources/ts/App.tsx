import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/pages/Home";
import Cart from "./components/pages/Cart";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";
import { useAuth } from "./context/AuthContext";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import Layout from "./components/templates/Layout";
import CartContextProvider from "./context/CartContext";

type routeProps = {
    children: React.ReactNode;
};

const ProtectedRoute = ({ children }: routeProps) => {
    const { user } = useAuth();
    return user ? children : <Navigate to="/login" />;
};

const RedirectIfLoggedIn = ({ children }: routeProps) => {
    const { user } = useAuth();
    return user ? <Navigate to="/" /> : children;
};

const App = () => {
    return (
        <>
            <ThemeProvider theme={theme}>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/cart"
                        element={
                            <ProtectedRoute>
                                <CartContextProvider>
                                    <Cart />
                                </CartContextProvider>
                            </ProtectedRoute>
                        }
                    />
                    <Route path="/contact" element={<Contact />} />
                    <Route
                        path="/login"
                        element={
                            <RedirectIfLoggedIn>
                                <Login />
                            </RedirectIfLoggedIn>
                        }
                    />
                </Routes>
            </Layout>
            </ThemeProvider>
        </>
    );
};

export default App;
