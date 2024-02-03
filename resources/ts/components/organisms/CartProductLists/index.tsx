import styled from "styled-components";
import Image from "../../atoms/Image"
import Text from "../../atoms/Text"
import SelectBox from "../../atoms/SelectBox";
import { useContext, useEffect, useState } from "react";
import { useCartContext } from "../../../context/CartContext";

interface CartProductCardProps {
    id: number;
    title: string;
    price: number;
    image_path: string;
    amount: number;
}

const StyledObject = styled.div`
    display: flex;
    padding: 10px;
`

const StyledTotal = styled.div`
    margin-left:auto;
`

const CartProductCard = ({id, title, price, image_path ,amount}:CartProductCardProps) => {
    const [select, setSelect] = useState(amount);
    const [total, setTotal] = useState(0);
    const {cartList, grandTotal, updateAmount} = useCartContext()

    useEffect(() => {
        const num = price * select;
        setTotal(num)
        updateAmount({ productId: id, newAmount: select });
    },[select])

    return (
        <StyledObject>
            <div>
                <Image 
                    src={`/storage/stock/${image_path}`}
                    width="150px"
                    height="150px"
                    alt=""
                />
            </div>
            <div>
                <Text 
                    fontSize="large" 
                    color="0F1111"
                >
                    {title}
                </Text>
                <div>
                    <SelectBox select={select} setSelect={setSelect} />
                </div>
            </div>
            <StyledTotal>
                <Text>¥ {total.toLocaleString()}</Text>
            </StyledTotal>
        </StyledObject>
    )
}

export default CartProductCard