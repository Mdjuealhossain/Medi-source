import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

// Your Firebase config object
const firebaseConfig = {
    apiKey: "AIzaSyA-byTjP72B22_6WY0YFkR_3Jf0UnK4WuU",
    authDomain: "medi-source-850ec.firebaseapp.com",
    projectId: "medi-source-850ec",
    storageBucket: "medi-source-850ec.firebasestorage.app",
    messagingSenderId: "689462131749",
    appId: "1:689462131749:web:92bcb8525e6fcbd518d3cc",
    measurementId: "G-N99HQK809M",
};

const app = initializeApp(firebaseConfig);

export const messaging = getMessaging(app);

export const generateToken = async () => {
    try {
        const permission = await Notification.requestPermission();
        if (permission === "granted") {
            const token = await getToken(messaging, {
                vapidKey: "BPwQtF0JTfKIarYQ5kmmxZ5v-PMK2L3o-IcOcMmrdy0vkLfktAXOLKp89cBcn00QySZ6Ee-ZNrpfHlTinAu1XbU",
            });
            if (token) {
                localStorage.setItem("fcmToken", token);
            } else {
                console.error("Failed to generate token");
            }
        }
    } catch (error) {
        console.error("Error during token generation:", error);
    }
};
