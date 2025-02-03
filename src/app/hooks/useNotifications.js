"use client";
import { useEffect, useState } from "react";

import { onMessage } from "firebase/messaging";
import { generateToken, messaging } from "@/app/Notifications/firebase";

const useNotifications = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedNotifications = localStorage.getItem("notifications");
            setNotifications(savedNotifications ? JSON.parse(savedNotifications) : []);
        }
    }, []);

    useEffect(() => {
        if (typeof window !== "undefined") {
            generateToken();

            if (messaging) {
                onMessage(messaging, (payload) => {
                    const newNotification = payload.notification;
                    console.log("New Notification:", newNotification);

                    setNotifications((prev) => {
                        const updated = [...prev, newNotification];
                        localStorage.setItem("notifications", JSON.stringify(updated));
                        return updated;
                    });
                });
            } else {
                console.error("Firebase messaging object is not initialized correctly.");
            }
        }
    }, []);

    return notifications;
};

export default useNotifications;
