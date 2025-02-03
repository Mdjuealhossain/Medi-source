"use client";
import { useEffect, useState } from "react";
import { onMessage } from "firebase/messaging";
import { generateToken, messaging } from "@/app/Notifications/firebase";

const useNotifications = () => {
    const [notifications, setNotifications] = useState(() => {
        // Initialize from localStorage if available
        const saved = localStorage.getItem("notifications");
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        generateToken();

        if (messaging) {
            onMessage(messaging, (payload) => {
                const newNotification = payload.notification;
                console.log("newNotification:----", newNotification);
                setNotifications((prev) => {
                    const updated = [...prev, newNotification];
                    localStorage.setItem("notifications", JSON.stringify(updated));
                    return updated;
                });
            });
        } else {
            console.error("Messaging object is undefined");
        }
    }, []);

    return notifications;
};

export default useNotifications;
