// FIFA07 · service worker de los avisos (tiene que estar en la raíz del repositorio, junto a index.html)
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');
firebase.initializeApp({
  apiKey: "AIzaSyCxHXh_kmp_o5hA-DcwVahgV2ZUbPq30K4",
  authDomain: "fifa07jerez.firebaseapp.com",
  projectId: "fifa07jerez",
  storageBucket: "fifa07jerez.firebasestorage.app",
  messagingSenderId: "495674924122",
  appId: "1:495674924122:web:17deb31c95f341903a0c63"
});
firebase.messaging(); // los avisos con título y texto los muestra el propio SDK
// Al tocar el aviso, el SDK abre la app en el enlace que manda el servidor (fcmOptions.link).
