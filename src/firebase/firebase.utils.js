import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'




var config = {
    apiKey: "AIzaSyDsEWuYf5mwGIIGny9VmMyxs4uUyS8dcas",
    authDomain: "food-search-275f5.firebaseapp.com",
    projectId: "food-search-275f5",
    storageBucket: "food-search-275f5.appspot.com",
    messagingSenderId: "478740794619",
    appId: "1:478740794619:web:68a66f1a687beadd48b45e",
    measurementId: "G-H09C6ZJZ37"
  };

  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
  
    const userRef = firestore.doc(`users/${userAuth.uid}`);
  
    const snapShot = await userRef.get();
  
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }
  
    return userRef;
  };
  
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();
  
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  
  export default firebase;
  