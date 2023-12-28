import React from "react";
import Header from "./components/commons/Header";
import Footer from "./components/commons/Footer";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/pages/Home";
import Layout from "./components/commons/Layout";
import Cart from "./components/pages/Cart";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";
import { useAuth } from "./context/AuthContext";

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
            <Header />
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route
                        path="/cart"
                        element={
                            <ProtectedRoute>
                                <Cart />
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
            <Footer />
        </>
    );
};

export default App;
