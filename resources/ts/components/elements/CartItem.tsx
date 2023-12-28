import React, { useEffect, useState } from "react";

interface CartItem {
    item: {
        id: number;
        amount: number;
        product: {
            price: number;
            image_path: string;
        };
    };
    updateItemAmount: (itemId: number, newAmount: number) => void;
}

const CartItem: React.FC<CartItem> = ({ item, updateItemAmount }) => {
    const [amount, setAmount] = useState<number>(item.amount);
    const [total, setTotal] = useState<number>(0);

    const handleIncrement = () => {
        setAmount((prevAmount) => {
            const newAmount = prevAmount + 1;
            updateItemAmount(item.id, newAmount);
            return newAmount;
        });
    };

    const handleDecrement = () => {
        setAmount((prevAmount) => {
            const newAmount = Math.max(prevAmount - 1, 0);
            updateItemAmount(item.id, newAmount);
            return newAmount;
        });
    };

    useEffect(() => {
        const result = item.product.price * amount;
        setTotal(result);
    }, [amount]);

    return (
        <div key={item.id}>
            <img
                src={`/storage/stock/${item.product.image_path}`}
                className="object-cover w-full h-full"
            />
            <p>価格:{total}円</p>
            <p>個数:{amount}</p>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
        </div>
    );
};

export default CartItem;
