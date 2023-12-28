import React from "react";
import { useEffect, useState } from "react";
import { getProduct } from "../../services/appClient";
import Card from "../elements/Card";

type Product = {
    id: number;
    title: string;
    price: number;
    image_path: string;
};

const Home = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const fetchedProducts = await getProduct();
                setProducts(fetchedProducts);
            } catch (error) {
                console.error("Error", error);
            }
        };

        fetchProducts();
    }, []); // 空の依存配列でコンポーネントマウント時に一度だけ実行

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((product) => (
                    <Card key={product.id} product={product} />
                ))}
            </div>
        </>
    );
};

export default Home;
