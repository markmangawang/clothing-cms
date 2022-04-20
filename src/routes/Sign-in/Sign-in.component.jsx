import {
  SignInWithGooglePopup,
  firestore_userAuthDoc,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
  const userDataLog = async () => {
    const response = await SignInWithGooglePopup();
    firestore_userAuthDoc(response.user);
  };
  return (
    <div className="container">
      <h1>This is sign-in page.</h1>
      <button onClick={userDataLog}>Sign-in with Google</button>
    </div>
  );
};

export default SignIn;

