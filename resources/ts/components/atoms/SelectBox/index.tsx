import React, { useState } from "react"
import { useCartContext } from "../../../context/CartContext"

interface SelectBoxProps {
    select: number
    setSelect: any
}

const SelectBox = ({select,setSelect}:SelectBoxProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = Number(e.target.value);
        setSelect(selectedValue)
    }

    return (
        <>
        <select onChange={handleChange} value={select}>
            {[...Array(50)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                    {i + 1}
                </option>
            ))}
        </select>
        </>
    )
}

export default SelectBox