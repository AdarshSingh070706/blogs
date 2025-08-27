import { auth } from "./conf";

import { createUserWithEmailAndPassword, GoogleAuthProvider, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, updatePassword, signOut
  ,reauthenticateWithCredential
 } from "firebase/auth";


// for create login
export const doCreateUserWithEmailAndPassword = async (auth, email, password) => {
  try {
    const userCreate = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCreate.user;

    return user;
  }
  catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Login error:", errorCode, errorMessage);
  }
}
  // for sign in
  export const doSignInWithEmailAndPassword = async (auth, email, password) => {
    try {
      const signInUser = await signInWithEmailAndPassword(auth, email, password);
      const user = signInUser.user;

      return user;
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error("SignIn error:", errorCode, errorMessage);
    }
  }


  // for google sign in
  export const doSignInWithGoogle = async () => {
    try {

      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);

      const user = result.user;
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential?.accessToken;

      console.log(" Google Sign-in Success:", user);
      return {
        user,
        token,
        message: "Sign-in successful",
      };
    }
    catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;

      console.error(" Google Sign-in Error:", errorCode, errorMessage);
    }
  }

    // for signOut
    export const doSignOut = async (auth) => {
      try {
        const signOutUser = await signOut(auth);
        const user = signOutUser.user

        return user
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Sigout error:", errorCode, errorMessage);
      }
    }

    export const doPasswordReset = (email) => {
      return sendPasswordResetEmail(auth, email);
    }


    // for update password
    export const doPasswordChange = async (newPassword, currentPassword) => {
  try {
    const user = auth.currentUser;

    if (!user) {
      throw new Error("No user is currently logged in.");
    }

    // If currentPassword is given, reauthenticate before updating
    if (currentPassword) {
      const credential = EmailAuthProvider.credential(user.email, currentPassword);
      await reauthenticateWithCredential(user, credential);
    }

    await updatePassword(user, newPassword);
    return { success: true, message: "Password updated successfully" };
  } 
  catch (error) {
    console.error("Password update error:", error.code, error.message);

    
  }
};

    export const doSendEmailVerification = () => {
      return sendEmailVerification(auth.currentUser, {
        url: `${window.location.origin}/home`
      });
    }