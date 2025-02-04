// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyAMKiJr1p8JQHEjpV_3tBkjzn1ap_M7gNg",
    authDomain: "medisource-1ffc0.firebaseapp.com",
    projectId: "medisource-1ffc0",
    storageBucket: "medisource-1ffc0.firebasestorage.app",
    messagingSenderId: "602669597870",
    appId: "1:602669597870:web:1283755db1554983f8193f",
    measurementId: "G-L6WY31MZ4T",
};

// Initialize Firebase
let messaging;

try {
    const app = initializeApp(firebaseConfig);
    messaging = getMessaging(app);
    console.log("Firebase Messaging initialized");
} catch (error) {
    console.error("Error initializing Firebase Messaging:", error);
}

export { messaging };

export const generateToken = async () => {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
        const token = await getToken(messaging, {
            vapidKey: "BCZ_GxVGFpNteU6fuyHaClbX00_Vev87iTNW_XhkxyMn8HpvoSdvb6xjsF3Bs_cXLgekugD4yhsgRX0Rp3TPDTM",
        });

        console.log("first,", token);
    }
};
