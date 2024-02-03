import { ReactNode, createContext, useContext, useEffect, useMemo, useState } from "react";
import { getCart } from "../services/appClient";

interface Cart {
    id: number;
    amount: number;
    product: {
        title: string;
        price: number;
        image_path: string;
    };
};

interface CartContext {
    cartList:any
    grandTotal:any
    updateAmount:any
}

const CartContext = createContext<CartContext>({
    cartList: [], // カート内の商品リスト
    grandTotal: 0, // 合計金額
    updateAmount: (productId:1, newAmount:1) => {} // 商品の数量を更新する関数
});

type Props = {
    children: ReactNode;
};

const CartContextProvider: React.FC<Props> = (props) => {
    const { children } = props;
    const [cartList, setCartLists] = useState<Cart[]>([]);

    const updateAmount = ({productId, newAmount}: {productId:number, newAmount:number}) => {
        console.log(newAmount);
        setCartLists(currentCartList => {
            return currentCartList.map(item => {
                if(item.id === productId){
                    return {...item, amount: newAmount}
                }
                return item;
            })
        })
    }

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

    const grandTotal = useMemo(() => {
        return cartList.reduce((sum, item) => sum + item.product.price * item.amount, 0);
    }, [cartList]);

    return (
        <CartContext.Provider value={{ cartList, grandTotal, updateAmount }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider

export const useCartContext = () => {
    return useContext(CartContext);
};