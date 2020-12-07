import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDdCKxL6LKEG0cB8cNwISM6OsGw4VkMw3k",
    authDomain: "squaverwatch.firebaseapp.com",
    databaseURL: "https://squaverwatch.firebaseio.com",
    projectId: "squaverwatch",
    storageBucket: "squaverwatch.appspot.com",
    messagingSenderId: "911000319785",
    appId: "1:911000319785:web:7aca3679b3938408516938",
    measurementId: "G-296EZJ1RLK"
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;