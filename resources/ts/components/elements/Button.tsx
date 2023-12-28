import React from "react";

interface ButtonProps {
    text: string;
}

const Button: React.FC<ButtonProps> = (prop) => {
    return (
        <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
            {prop.text}
        </button>
    );
};

export default Button;
