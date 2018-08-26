import auth from './firebase';

export const doCreateUserWithEmailAndPassword = (email, password) => auth.createUserWithEmailAndPassword(email, password)
  .then(user => user)
  .catch((error) => { throw error; });

export const doSignInWithEmailAndPassword = (email, password) => auth.signInWithEmailAndPassword(email, password)
  .then(user => user)
  .catch((error) => { throw error; });

export const doSignOut = () => auth.signOut()
  .catch((error) => { throw error; });

export const loginCheck = () => {
  console.log(auth, auth.currentUser);
  return !!auth.currentUser;
};
