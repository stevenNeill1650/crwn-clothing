import { initializeApp} from 'firebase/app';
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword} from 'firebase/auth';

import {getFirestore,doc,getDoc,setDoc} from 'firebase/firestore';



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCAzN3H1x_tNdkxjCLWZu3MqAGgHILNi-Q",
    authDomain: "crwn-clothing-db-36662.firebaseapp.com",
    projectId: "crwn-clothing-db-36662",
    storageBucket: "crwn-clothing-db-36662.appspot.com",
    messagingSenderId: "31201486449",
    appId: "1:31201486449:web:1d7f91062585de7c6b5dd0"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
    prompt:'select_account',
  });


  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth,googleProvider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth,googleProvider);

  export const db = getFirestore();

 
  export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {
    const userDocRef = doc(db,'users',userAuth.uid);
    console.log(userDocRef);
    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){
        const {displayName,email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef,{
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        }catch (error){
            console.error('error creating the user', error.message);
        }
    }
    return userDocRef;

  };

  export const createAuthUserWithEmailAndPassword = async (email,password) => {
        if(!email || !password) return;

        return await createUserWithEmailAndPassword(auth,email,password);


  }