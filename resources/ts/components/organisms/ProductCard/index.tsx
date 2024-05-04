import React from "react";
import { useState } from "react";
import { addCart } from "../../../services/appClient";
import Image from "../../atoms/Image";
import AddCartModal from "../../modal/AddCartModal";
import Button from "../../atoms/Button";
import Text from "../../atoms/Text";
import styled from "styled-components";
import { useAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const StyledProductCard = styled.div`
    display: flex;
    background-color: white;
    padding: 10px;
    flex-direction: column;
    margin-bottom: 10px;
`

const StyledBox = styled.div`
    display: flex;
    align-items: center;
    height: 12rem;
    overflow: hidden;
`

interface ProductTypeProps {
    id: number;
    image_path: string;
    title: string;
    price: number;
}

const ProductCard = ({ id, image_path, title, price }: ProductTypeProps) => {
    const [modalFlag, setModalFlag] = useState(false);
    const { user } = useAuth();
    const navigate = useNavigate();

    const handleCartAdd = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const targetId = form.product_id.value;

        if(!user){
            navigate('/login');
        }

        try {
            await addCart(targetId);
            setModalFlag(true);
            // 追加が成功した場合の処理（必要に応じて）
        } catch (error) {
            // エラー処理
            console.error(error);
        }
    };

    return (
        <StyledProductCard key={id}>
            <StyledBox>
                <Image
                    src={`/storage/stock/${image_path}`}
                    width="100%"
                    height="100%"
                    alt=""
                />
            </StyledBox>
            <p><Text>{title}</Text></p>
            <p><Text>{price}円</Text></p>
            <form onSubmit={handleCartAdd} className="flex justify-center">
                <input type="hidden" name="product_id" value={id} />
                <Button backgroundColor="#c53030">カートに入れる</Button>
            </form>
            <AddCartModal modalFlag={modalFlag} setModalFlag={setModalFlag} />
        </StyledProductCard>
    )
}

export default ProductCard