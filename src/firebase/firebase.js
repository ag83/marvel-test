import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBDukQNRRjX7kPjAPjyxyl3qowwhX47tl0',
  authDomain: 'marvel-4059b.firebaseapp.com',
  databaseURL: 'https://marvel-4059b.firebaseio.com',
  projectId: 'marvel-4059b',
  storageBucket: 'marvel-4059b.appspot.com',
  messagingSenderId: '758427302290'
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const auth = firebase.auth();
export const facebook = new firebase.auth.FacebookAuthProvider();
export const google = new firebase.auth.GoogleAuthProvider();

auth.setPersistence(firebase.auth.Auth.Persistence.SESSION);

export default auth;
