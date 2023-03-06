import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL} from "firebase/storage";
import { setDoc } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDs_KOpPVWrJlfRl8VJCPw0V_QcbyOnE30",
    authDomain: "portfolio-7c77c.firebaseapp.com",
    projectId: "portfolio-7c77c",
    storageBucket: "portfolio-7c77c.appspot.com",
    messagingSenderId: "179731735541",
    appId: "1:179731735541:web:08cf12bcfcfe1c70fd76bc"
  };

firebase.initializeApp(firebaseConfig);

  //auth 
const auth = firebase.auth();

//firestore
const firestore = firebase.firestore();

//profile collection reference
const profile = firestore.collection('profile');

//project collection reference
const projects = firestore.collection('projects');

//skills collection reference
const skills = firestore.collection('skills');

//storage

const storage = getStorage();

export { profile, skills, projects, firestore, auth, setDoc, ref, storage, uploadBytes, getDownloadURL}

export default firebase;