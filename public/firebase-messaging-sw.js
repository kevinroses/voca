importScripts(
    'https://www.gstatic.com/firebasejs/9.13.0/firebase-app-compat.js'
)
importScripts(
    'https://www.gstatic.com/firebasejs/9.13.0/firebase-messaging-compat.js'
)
firebase?.initializeApp({
    apiKey: "AIzaSyASnnV4YxKYKTXJkYysPsFpDkVPaWGtfMw",
    authDomain: "droproot-388511.firebaseapp.com",
    projectId: "droproot-388511",
    storageBucket: "droproot-388511.appspot.com",
    messagingSenderId: "464590656003",
    appId: "1:464590656003:web:f196857c82787200c37436",
    measurementId: "G-7MJHLQXNWT"
})

// Retrieve firebase messaging
const messaging = firebase?.messaging()

messaging.onBackgroundMessage(function (payload) {
    const notificationTitle = payload.notification.title
    const notificationOptions = {
        body: payload.notification.body,
    }

    self.registration.showNotification(notificationTitle, notificationOptions)
})
