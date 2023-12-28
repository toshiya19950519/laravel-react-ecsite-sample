import React, { ReactNode } from "react";

interface layout {
    children: ReactNode;
}

const Layout: React.FC<layout> = ({ children }) => {
    return (
        <main className="py-20 bg-gray-100">
            <div className="container mx-auto">{children}</div>
        </main>
    );
};

export default Layout;
