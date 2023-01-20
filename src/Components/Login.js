import { signInWithPopup } from "firebase/auth";
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import { auth, provider } from "../firebase-config";
const Login = () => {
    const [IsAuth, setIsAuth] = useContext(AuthContext)
  const navigate = useNavigate();
  const SignInwithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };
  return (
    <div className="py-5 mt-5 ">
      <div className="card-title text-center">
        <p className="h3">Sign in with google to continue</p>

        <button className="btn btn-primary  mt-4" onClick={SignInwithGoogle}>
          Sign In with Google
        </button>
      </div>
    </div>
  );
};

export default Login;
