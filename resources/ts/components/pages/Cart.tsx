import React from "react";
import { useEffect, useState } from "react";
import { getCart } from "../../services/appClient";
import CartItem from "../elements/CartItem";

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
    const [cartList, setCartLists] = useState<Cart[]>([]);
    const [grandTotal, setGrandTotal] = useState(0);

    const updateItemAmount = (itemId: number, newAmount: number) => {
        const updatedCartList = cartList.map((item) => {
            if (item.id === itemId) {
                return { ...item, amount: newAmount };
            }
            return item;
        });
        setCartLists(updatedCartList);
    };

    useEffect(() => {
        const fetchCartList = async () => {
            try {
                const fetchedCartList = await getCart();
                console.log(fetchCartList);
                setCartLists(fetchedCartList);
            } catch (error) {
                console.error("Error", error);
            }
        };

        fetchCartList();
    }, []);

    useEffect(() => {
        const newGrandTotal = cartList.reduce((sum, item) => {
            return sum + item.product.price * item.amount;
        }, 0);
        setGrandTotal(newGrandTotal);
    }, [cartList]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-10">
            <div className="md:col-span-3 md:order-2 bg-white p-5">
                <p>合計</p>
                <p>{grandTotal}</p>
            </div>
            <div className="md:col-span-7 md:order-1 bg-white p-5 mr-5">
                {cartList.map((item) => (
                    <CartItem
                        key={item.id}
                        item={item}
                        updateItemAmount={updateItemAmount}
                    />
                ))}
            </div>
        </div>
    );
};

export default Cart;
