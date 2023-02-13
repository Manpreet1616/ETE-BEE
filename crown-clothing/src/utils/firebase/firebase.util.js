import { initializeApp } from 'firebase/app';
import { 
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
 } from 'firebase/auth'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs
} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyAhTp0D-NYLOlD7K8n0Ru44icukZMlqYZ0",
    authDomain: "crwn-clothing-db-40ba5.firebaseapp.com",
    projectId: "crwn-clothing-db-40ba5",
    storageBucket: "crwn-clothing-db-40ba5.appspot.com",
    messagingSenderId: "216166556723",
    appId: "1:216166556723:web:b74a77e191b56e1ca9af46"
};
  
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt:'select_account'
  })

  export const auth = getAuth()
  export const signInWithGooglePopup = ()=> signInWithPopup(auth,provider); 
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth,provider);
  export const db = getFirestore();

  export const addCollectionAndDocument = async (collectionKeys,objectsToAdd) => {
    const collectionRef = collection(db, collectionKeys);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object)=>{
      const docRef = doc(collectionRef, object.title.toLowerCase());
      batch.set(docRef, object);
    })

    await batch.commit();
    console.log('done')
  }
export const getCategoriesAndDocuments = async ()=>{
  const collectionRef = collection(db,'categoris');
  const q = query(collectionRef)

  const querySnapShot = await getDocs(q);
  const categoryMap = querySnapShot.docs.reduce((acc,docSnapshot)=>{
    const {title,items} = docSnapshot.data();
    acc[title.toLowerCase()] = items;
    return acc
  },{})

  return categoryMap;
}

  export const createUserDocumentFromAuth = async (userAuth,additionalInformation) => {
    if(!userAuth) return
    const useDocRef = doc(db,'User',userAuth.uid);
    const userSnapshot = await getDoc(useDocRef);
    if(!userSnapshot.exists()){
      const {displayName , email} = userAuth;
      const createdAt = new Date();
      try {
        await setDoc(useDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalInformation
        });
      } catch (error) {
        console.log(error);
      }
    }
    return useDocRef
  }

  export const CreateUserWithEmailAndPassword = async(email,password)=>{
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth,email,password)
  }

  export const SignIneUserWithEmailAndPassword = async(email,password)=>{
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth,email,password)
  }

  export const signOutUser = async() => await signOut(auth);

  export const onAuthStateChangedListener = (callback) =>  onAuthStateChanged(auth,callback);