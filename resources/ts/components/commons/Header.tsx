import React, { useEffect } from "react";
import { useAuth } from "../../context/AuthContext";
import { getUser } from "../../services/appClient";
import { Link } from "react-router-dom";

const Header = () => {
    const { user, setUser } = useAuth();

    const handleLogout = () => {
        // setUser(null);
        // 追加: ログアウト処理
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await getUser();
                setUser(userData);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <header className="sticky top-0 w-full py-6 px-12 border-b border-blue-gray-50 bg-white">
            <div className="flex justify-between">
                <Link
                    to="/"
                    className="block mx-4 mt-2 text-sm text-gray-700 capitalize lg:mt-0"
                >
                    Logo
                </Link>
                <div>
                    <div className="lg:flex lg:items-center">
                        {user ? (
                            <>
                                <Link
                                    to="/cart"
                                    className="block mx-4 mt-2 text-sm text-gray-700 capitalize lg:mt-0"
                                >
                                    カート
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="block mx-4 mt-2 text-sm text-gray-700 capitalize lg:mt-0"
                                >
                                    ログアウト
                                </button>
                            </>
                        ) : (
                            <a
                                href="/login"
                                className="block mx-4 mt-2 text-sm text-gray-700 capitalize lg:mt-0 "
                            >
                                ログイン
                            </a>
                        )}
                        <Link
                            to="/contact"
                            className="block mx-4 mt-2 text-sm text-gray-700 capitalize lg:mt-0"
                        >
                            お問い合わせ
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
