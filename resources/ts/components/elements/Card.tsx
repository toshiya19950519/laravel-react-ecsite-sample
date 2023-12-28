import React from "react";
import { useState } from "react";
import { addCart } from "../../services/appClient";
import AddCartModal from "../modal/AddCartModal";

type Product = {
    id: number;
    image_path: string;
    title: string;
    price: number;
};

type CardProps = {
    product: Product;
};

const Card = ({ product }: CardProps) => {
    const [modalFlag, setModalFlag] = useState(false);
    const handleCartAdd = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const targetId = form.product_id.value;

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
        <div key={product.id} className="p-3 flex flex-col bg-white">
            <div className="w-full h-48 bg-gray-200 flex justify-center items-center overflow-hidden">
                <img
                    src={`/storage/stock/${product.image_path}`}
                    className="object-cover w-full h-full"
                />
            </div>
            <p className="text-sm font-bold mt-2">{product.title}</p>
            <p className="text-sm text-gray-800">{product.price}</p>
            <form onSubmit={handleCartAdd} className="flex justify-center">
                <input type="hidden" name="product_id" value={product.id} />
                <button className="bg-red-500 hover:bg-red-700 text-white py-1 px-4 rounded">
                    カートに入れる
                </button>
            </form>
            <AddCartModal modalFlag={modalFlag} setModalFlag={setModalFlag} />
        </div>
    );
};

export default Card;
