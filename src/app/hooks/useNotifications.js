"use client";
import { useEffect, useState } from "react";
import { onMessage } from "firebase/messaging";
import { generateToken, messaging } from "@/app/Notifications/firebase";

const useNotifications = () => {
    const [notifications, setNotifications] = useState([]);

    // Load notifications from localStorage if available
    useEffect(() => {
        const storedNotifications = localStorage.getItem("notifications");
        if (storedNotifications) {
            setNotifications(JSON.parse(storedNotifications));
        }
    }, []);

    useEffect(() => {
        generateToken();
        onMessage(messaging, (payload) => {
            const newNotification = payload.notification;
            console.log("New Notification:", newNotification);

            setNotifications((prev) => {
                const updated = [...prev, newNotification];

                // Save updated notifications to localStorage
                localStorage.setItem("notifications", JSON.stringify(updated));

                return updated;
            });
        });
    }, []);

    return notifications;
};

export default useNotifications;
