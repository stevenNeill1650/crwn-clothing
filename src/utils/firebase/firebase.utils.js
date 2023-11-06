import { initializeApp} from 'firebase/app';
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider} from 'firebase/auth';

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

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt:"select_account"
  });


  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth,provider);


  export const db = getFirestore();

 
  export const createUserDocumentFromAuth = async (userAuth) => {
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
                createdAt
            });
        }catch (error){
            console.log('error creating the user', error.message);
        }
    }


  };