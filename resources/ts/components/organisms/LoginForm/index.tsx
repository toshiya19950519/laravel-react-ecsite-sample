import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import { useState } from "react";
import { useAuth } from "../../../context/AuthContext";
import { login } from "../../../services/appClient";
import { LoadingSpinner } from "../../atoms/Spinner";
import { useLoadingSpinner } from "../../../context/LoadingSpinnerContext";
import Text from "../../atoms/Text";

const LoginForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const { isLoading, setLoading } = useLoadingSpinner();
    const { setUser } = useAuth();

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            const userData = await login(email, password);
            console.log(userData);
            setUser(userData);
            navigate("/");
        } catch (error) {
            navigate("/fail_login");
            console.error("Login error:", error);
        } finally {
            setLoading(false);
        }
    };

    if (isLoading) {
        return <LoadingSpinner />;
    }

    return (
        <>
            <div className="flex justify-center items-center py-8">
                <form
                    onSubmit={handleSubmit}
                >
                    <Input
                        id="name"
                        type="text"
                        onChange={handleEmailChange}
                        placeholder="ユーザー名"
                        value={email}
                    />
                    <Input
                        id="password"
                        type="password"
                        onChange={handlePasswordChange}
                        placeholder="パスワード"
                        value={password}
                    />
                    <Button 
                        size="medium" 
                        backgroundColor="#4169e1"
                        width="100%"
                    >ログイン</Button>
                    <Link to="/signUp">
                        <Text fontSize="small">新規登録はこちら</Text>
                    </Link>
                </form>
            </div>
        </>
    );
};

export default LoginForm;
