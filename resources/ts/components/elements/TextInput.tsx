import React from "react";

interface TextInputProps {
    label: string;
    value: string;
    onChange: (newValue: string) => void;
}

const TextInput: React.FC<TextInputProps> = (props) => {
    return (
        <>
            <div className="flex items-center gap-2">
                <label className="inline-block text-sm font-medium text-gray-700 w-1/4">
                    {props.label}
                </label>
                <input
                    type="text"
                    value={props.value}
                    onChange={(e) => props.onChange(e.target.value)}
                    className="border border-gray-300 rounded-md p-2 text-base focus:border-blue-500 focus:outline-none"
                />
            </div>
        </>
    );
};

export default TextInput;
