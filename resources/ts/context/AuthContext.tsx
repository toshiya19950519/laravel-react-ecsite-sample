// AuthContext.js
import React, { ReactNode, createContext, useContext, useState } from "react";

type UserType = {
    name: string;
    email: string;
    // その他のユーザー情報
};

type AuthContextType = {
    user: UserType | null;
    setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
};

const AuthContext = createContext<AuthContextType>({
    user: null,
    setUser: () => {},
});

type Props = {
    children: ReactNode;
};

export const AuthProvider: React.FC<Props> = (props) => {
    const { children } = props;
    const [user, setUser] = useState<UserType | null>(null);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
