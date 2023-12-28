import React, { useState } from "react";
import { login } from "../../services/appClient";
import { useAuth } from "../../context/AuthContext";
import TextInput from "../elements/TextInput";
import Button from "../elements/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { setUser } = useAuth();

    const handleEmailChange = (newValue: string) => {
        setEmail(newValue);
    };

    const handlePasswordChange = (newValue: string) => {
        setPassword(newValue);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const userData = await login(email, password);
            setUser(userData); // Contextにユーザー情報をセット
            navigate("/");
        } catch (error) {
            navigate("/fail_login");
            console.error("Login error:", error);
        }
    };

    return (
        <>
            <div className="flex justify-center items-center py-8">
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-sm p-6 bg-white rounded-lg shadow-md"
                >
                    <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                        ログイン
                    </h2>
                    <div className="mb-4">
                        <TextInput
                            label="email"
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <div className="mb-6">
                        <TextInput
                            label="password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </div>
                    <div className="flex justify-center">
                        <Button text="ログイン" />
                    </div>
                </form>
            </div>
        </>
    );
};

export default Login;
