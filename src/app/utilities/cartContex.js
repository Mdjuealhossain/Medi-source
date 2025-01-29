"use client";

import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [cartMessages, setCartMessages] = useState({}); // Store messages per product
    const [companies, setCompanies] = useState([]);
    const [isSearch, setIsSearch] = useState("");

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
        setCartItems(storedCart);
    }, []);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    // Add product to the cart
    const addToCart = (product) => {
        const productExists = cartItems.some((item) => item.id === product.id);
        if (productExists) {
            setCartMessages((prevMessages) => ({
                ...prevMessages,
                [product.id]: `"${product.name}" is already in the cart.`,
            }));
            return;
        }
        setCartItems([...cartItems, { ...product, quantity: 1 }]);
    };

    // Remove product from the cart and clear its message
    const removeFromCart = (productId) => {
        setCartItems(cartItems.filter((item) => item.id !== productId));
        setCartMessages((prevMessages) => {
            const updatedMessages = { ...prevMessages };
            delete updatedMessages[productId];
            return updatedMessages;
        });
    };

    // Quantity বাড়ানো
    const incrementQuantity = (id) => {
        setCartItems((prevProducts) => prevProducts.map((product) => (product.id === id ? { ...product, quantity: product.quantity + 1 } : product)));
    };

    // Quantity কমানো
    const decrementQuantity = (id) => {
        setCartItems((prevProducts) => prevProducts.map((product) => (product.id === id ? { ...product, quantity: product.quantity - 1 } : product)));
        // const updatedProducts = products.filter((product) => product.id !== id);
        // setProducts(updatedProducts);
        // localStorage.setItem("stor_cart_data", JSON.stringify(updatedProducts));
    };
    const productQuantity = (id, count) => {
        const numericValue = count === "" ? 0 : parseInt(count, 10);
        if (!isNaN(numericValue) && numericValue >= 0) {
            setCartItems((prevProducts) => prevProducts.map((product) => (product.id === id ? { ...product, quantity: numericValue } : product)));
        }
    };

    const handleCompany = (id) => {
        id.length > 0 && setCompanies(`[${id.join(",")}]`);
    };
    const handleSearchProducts = (e) => {
        event.preventDefault();
        setIsSearch(e.target.value);
    };

    return <CartContext.Provider value={{ handleSearchProducts, isSearch, setIsSearch, companies, setCompanies, handleCompany, cartItems, addToCart, removeFromCart, cartMessages, incrementQuantity, decrementQuantity, productQuantity }}>{children}</CartContext.Provider>;
}

export function useCart() {
    return useContext(CartContext);
}
