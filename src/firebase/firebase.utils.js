import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyD4QhSRuyIDAVmlFyeJrmlBFqFEICNAIuE",
    authDomain: "e-commerce-56cc3.firebaseapp.com",
    projectId: "e-commerce-56cc3",
    storageBucket: "e-commerce-56cc3.appspot.com",
    messagingSenderId: "940606503872",
    appId: "1:940606503872:web:b4e2a99b8fc7d09c0fe625",
    measurementId: "G-7S2SC41Q9T"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if(!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if(!snapShot.exist){
    const { displayName, email } = userAuth
    const createAt = new Date()
    
    try{
      await userRef.set({ 
        displayName,
        email,
        createAt,
        ...additionalData
      })
    } catch(error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase