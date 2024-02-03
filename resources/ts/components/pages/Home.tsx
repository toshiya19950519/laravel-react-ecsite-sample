import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { getProduct } from "../../services/appClient";
import ProductCard from "../organisms/ProductCard";
import styled from "styled-components";
import { LoadingSpinner } from "../atoms/Spinner";
import { useLoadingSpinner } from "../../context/LoadingSpinnerContext";

const StyledProducts = styled.div`
    @media (max-width: ${props => props.theme.breakpoints.tablet}) {
        padding: 1.0rem 0.5rem;
    }

    @media (min-width: ${props => props.theme.breakpoints.desktop}) {
        padding: 0.75rem;
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 1rem;
    }
`

type Product = {
    id: number;
    title: string;
    price: number;
    image_path: string;
};

type PaginatedProducts = {
    data: Product[];
    next_page_url: string;
    first_page_url: string;
    last_page_url: string;
}


const Home = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [nextScroll, setNextScroll] = useState('');
    const {isLoading, setLoading } = useLoadingSpinner();
    const loadingRef = useRef(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const fetchedProducts:PaginatedProducts = await getProduct();
                setNextScroll(fetchedProducts.next_page_url);
                setProducts(fetchedProducts.data);
            } catch (error) {
                console.error("Error", error);
            }
        };

        fetchProducts();
    }, []);


    useEffect(() => {
        const observer = new IntersectionObserver(async ([entry]) => {
          if (entry.isIntersecting && nextScroll) {
            setLoading(true);
            try{
                const newProducts = await fetch(nextScroll).then(response => response.json());
                setProducts(prevProducts => [...prevProducts, ...newProducts.data]);
                setNextScroll(newProducts.next_page_url);
            }finally{
                setLoading(false);
            }
          }
        });
    
        if (loadingRef.current) {
          observer.observe(loadingRef.current);
        }
    
        return () => observer.disconnect();
    }, [nextScroll]);

    return (
        <>
            <StyledProducts>
                {products.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
                <div ref={loadingRef}></div>
                {
                isLoading && <LoadingSpinner />
                }
            </StyledProducts>
        </>
    );
};

export default Home;
