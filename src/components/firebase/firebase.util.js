import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBKTcRGWakJmsuIko-DK1o2AjflR65r7ls",
    authDomain: "shopify-2f877-b4e87.firebaseapp.com",
    databaseURL: "https://shopify-2f877-b4e87.firebaseio.com",
    projectId: "shopify-2f877",
    storageBucket: "shopify-2f877.appspot.com",
    messagingSenderId: "560253724700",
    appId: "1:560253724700:web:691952ea613e8dee"
};

export const createUserProfile = async (user) => {
    if (!user) return;

    const userRef = firestore.doc(`users/${user.uid}`);
    const data = await userRef.get();
    console.log(user)
    if (!data.exists) {
        const { displayName, email, photoURL } = user;
        const createdAt = new Date();

        userRef.set({
            displayName,
            email,
            photoURL,
            createdAt
        })
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;