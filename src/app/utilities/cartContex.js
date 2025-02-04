"use client";
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);
    const [companies, setCompanies] = useState([]);
    const [isSearch, setIsSearch] = useState("");

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
        setCartItems(storedCart);
    }, []);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        setCartItems((prevCartItems) => {
            // Check if the product is already in the cart
            if (prevCartItems.some((item) => item.id === product.id)) {
                return prevCartItems; // Return the same cart if the product is already present
            } else {
                return [...prevCartItems, product]; // Add the product if it's not already in the cart
            }
        });
    };

    // Remove product from the cart
    const removeFromCart = (productId) => {
        setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== productId));
    };

    // Increase quantity from root and cart
    const incrementQuantity = (id) => {
        setCartItems((prevCartItems) => prevCartItems.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item)));
    };

    // Decrease quantity (with condition to remove if 0)
    const decrementQuantity = (id) => {
        setCartItems((prevCartItems) => prevCartItems.map((item) => (item.id === id ? { ...item, quantity: Math.max(item.quantity - 1, 0) } : item)).filter((item) => item.quantity > 0));
    };
    const productQuantity = (id, count) => {
        const numericValue = count === "" ? 0 : parseInt(count, 10);

        // Check if the numeric value is a valid number and greater than or equal to 0
        if (!isNaN(numericValue) && numericValue >= 0) {
            setCartItems((prevProducts) => prevProducts.map((product) => (product.id === id ? { ...product, quantity: numericValue } : product)));
        } else {
            // Optionally handle the invalid input case (like showing an error message)
            console.log("Invalid quantity input");
        }
    };
    const handleCompany = (id) => {
        id.length > 0 && setCompanies(`[${id.join(",")}]`);
    };
    const handleSearchProducts = (e) => {
        e.preventDefault();
        setIsSearch(e.target.value);
    };

    return (
        <CartContext.Provider
            value={{
                cartItems,
                setCartItems,
                addToCart,
                removeFromCart,
                incrementQuantity,
                decrementQuantity,
                productQuantity,
                companies,
                setCompanies,
                isSearch,
                setIsSearch,
                handleCompany,
                handleSearchProducts,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}
