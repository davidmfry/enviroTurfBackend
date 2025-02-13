import { auth } from 'firebase'

// Sign up
export const doCreateUserWithEmailAndPassowrd = (email, password) => {
    auth.createUserWithEmailAndPassword(email, password);
};

// Sign in
export const doSignInWithEmailandPassword = (email, password) =>
{
    auth.signInWithEmailAndPassword(email, password);
};

// Sign out
export const doSignOut = () => {
    auth.signOut();
};


// Password Reset
export const doPasswordReset = (email) =>
{
    auth.sendPasswordResetEmail(email);
};

// Password Change
export const doPasswordUpdate = (password) =>
{
    auth.currentUser.updatePassword(password);
};


