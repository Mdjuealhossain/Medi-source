// src/app/Notifications/firebase.js
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

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
    try {
        const permission = await Notification.requestPermission();
        if (permission === "granted") {
            const token = await getToken(messaging, {
                vapidKey: "BPwQtF0JTfKIarYQ5kmmxZ5v-PMK2L3o-IcOcMmrdy0vkLfktAXOLKp89cBcn00QySZ6Ee-ZNrpfHlTinAu1XbU",
            });
            if (token) {
                console.log("FCM Token:", token);
                localStorage.setItem("fcmToken", token);
            } else {
                console.error("Failed to get token");
            }
        } else {
            console.log("Notification permission denied");
        }
    } catch (error) {
        console.error("Error during token generation:", error);
    }
};
