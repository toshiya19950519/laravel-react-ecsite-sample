import React, { ChangeEvent } from "react";
import styled,{css} from 'styled-components'

const StyledInput = styled.input<{hasError: boolean}>`
    width: 100%;
    padding: 5px 10px;
    margin-bottom: 5px;
    box-sizing: border-box;
    border: ${props => props.hasError ? '1px solid red' : '1px solid gray'};
`

const ErrorMessage = styled.div`
    color: red;
    margin-top: 5px;
    font-size: 0.875em;
`

interface InputProps {
    id: string;
    type: string;
    placeholder: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    value: string;
    errorMessage?: string
}

const Input = ({ id, type, onChange, placeholder, value, errorMessage }: InputProps) => {
    return (
        <>
        <StyledInput
            id={id}
            type={type}
            onChange={onChange}
            placeholder={placeholder}
            value={value}
            hasError={!!errorMessage}
        />
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </>
    )
}

export default Input