import React, { createContext, useMemo } from "react";
import { useEffect, useState } from "react";
import { getCart } from "../../services/appClient";
import CartProductCard from "../organisms/CartProductLists";
import CartContextProvider, { useCartContext } from "../../context/CartContext";

type Cart = {
    id: number;
    amount: number;
    product: {
        title: string;
        price: number;
        image_path: string;
    };
};


const Cart = () => {
    const {cartList, grandTotal} = useCartContext()

    return (
        <div className="grid grid-cols-1 md:grid-cols-10">
            <div className="md:col-span-3 md:order-2 bg-white p-5">
                <p>合計</p>
                <p>{grandTotal}</p>
            </div>
            <div className="md:col-span-7 md:order-1 bg-white p-5 mr-5">
                {cartList.map((item:any) => (
                    <>
                    <CartProductCard 
                        key={item.id}
                        id={item.id}
                        title={item.product.title}
                        price={item.product.price}
                        image_path={item.product.image_path}
                        amount={item.amount}
                    />
                    </>
                ))}
            </div>
        </div>
    );
};

export default Cart;
