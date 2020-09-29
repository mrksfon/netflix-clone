import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// import {seedDatabase} from '../seed';

const config = {
    apiKey: "AIzaSyDk1ko0wxI5j4pE6bI9JgCftRh8KeN2Y-M",
    authDomain: "netflix-clone-27899.firebaseapp.com",
    databaseURL: "https://netflix-clone-27899.firebaseio.com",
    projectId: "netflix-clone-27899",
    storageBucket: "netflix-clone-27899.appspot.com",
    messagingSenderId: "424771885640",
    appId: "1:424771885640:web:19c98a296ee5780858967d"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };