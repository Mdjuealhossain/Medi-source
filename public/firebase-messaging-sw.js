importScripts("https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: "AIzaSyAMKiJr1p8JQHEjpV_3tBkjzn1ap_M7gNg",
    authDomain: "medisource-1ffc0.firebaseapp.com",
    projectId: "medisource-1ffc0",
    storageBucket: "medisource-1ffc0.firebasestorage.app",
    messagingSenderId: "602669597870",
    appId: "1:602669597870:web:1283755db1554983f8193f",
    measurementId: "G-L6WY31MZ4T",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    console.log("[firebase-messaging-sw.js] Received background message ", payload);
    // Customize notification here
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: payload.notification.image,
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
