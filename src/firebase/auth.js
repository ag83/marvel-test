import { auth, facebook, google } from './firebase';

export const doCreateUserWithEmailAndPassword = (email, password) => auth.createUserWithEmailAndPassword(email, password)
  .then(user => user)
  .catch((error) => { throw error; });

export const doSignInWithEmailAndPassword = (email, password) => auth.signInWithEmailAndPassword(email, password)
  .then(user => user)
  .catch((error) => { throw error; });

export const doSignOut = () => auth.signOut()
  .catch((error) => { throw error; });

export const facebookLogin = () => auth.signInWithPopup(facebook)
  .then(user => user)
  .catch((error) => { throw error; });

export const googleLogin = () => auth.signInWithPopup(google)
  .then(user => user)
  .catch((error) => { throw error; });

export const loginCheck = () => !!auth.currentUser;

