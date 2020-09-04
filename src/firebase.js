import firebase from 'firebase'



const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyA-Aeg9buY2UgaEezrKGKF4nGi4_8wTJvo",
        authDomain: "instagram-clone-7e850.firebaseapp.com",
        databaseURL: "https://instagram-clone-7e850.firebaseio.com",
        projectId: "instagram-clone-7e850",
        storageBucket: "instagram-clone-7e850.appspot.com",
        messagingSenderId: "273473912554",
        appId: "1:273473912554:web:ee6f9a87bb44e9a4ca2193",
        measurementId: "G-T4F1QHX92V" 
}) 

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export {db , auth , storage}