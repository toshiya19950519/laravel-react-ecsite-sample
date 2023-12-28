import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost/api",
    headers: {
        "Content-Type": "application/json",
    },
});

export const login = async (email: string, password: string) => {
    try {
        const response = await apiClient.post("/login", { email, password });
        return response.data;
    } catch (error) {
        console.error("Error during login:", error);
        throw error;
    }
};

export const getUser = async () => {
    try {
        const response = await apiClient.get("/user");
        console.log("成功");
        return response.data;
    } catch (error) {
        console.error("Error during login:", error);
        throw error;
    }
};

export const getProduct = async () => {
    try {
        const response = await apiClient.get("/products");
        console.log("成功");
        return response.data;
    } catch (error) {
        console.error("Error", error);
        throw error;
    }
};

export const getCart = async () => {
    try {
        const response = await apiClient.get("/cart");
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error("Error", error);
        throw error;
    }
};

export const addCart = async (product_id: number) => {
    try {
        const response = await apiClient.post("/addCart", {
            product_id: product_id,
        });

        return response;
    } catch (error) {
        console.error("Error", error);
        throw error;
    }
};

type formData = {
    name?: string;
    email?: string;
    gender?: string;
    age?: string;
    title?: string;
    content?: string;
    file?: string;
};

export const sendContact = async (formData:formData) => {
    try {
        const response = await apiClient.post("/contact", formData);
        console.log(response);
        return response.data;
    } catch (error) {
        console.error("Error during login:", error);
        throw error;
    }
};
