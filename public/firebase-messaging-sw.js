importScripts("https://www.gstatic.com/firebasejs/10.13.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.13.2/firebase-messaging-compat.js");

firebase.initializeApp({
    apiKey: "AIzaSyA-byTjP72B22_6WY0YFkR_3Jf0UnK4WuU",
    authDomain: "medi-source-850ec.firebaseapp.com",
    projectId: "medi-source-850ec",
    storageBucket: "medi-source-850ec.firebasestorage.app",
    messagingSenderId: "689462131749",
    appId: "1:689462131749:web:92bcb8525e6fcbd518d3cc",
    measurementId: "G-N99HQK809M",
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
