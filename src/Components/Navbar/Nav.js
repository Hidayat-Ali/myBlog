import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
const Nav = () => {
  const [IsAuth, setIsAuth] = useContext(AuthContext);
  let navigate = useNavigate();
  const signOutGoogle = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
      // console.log('logged out');
    });
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary ">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto ">
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              
              <li className="nav-item">
                {!IsAuth ? (
                  <Link to="/login">Login</Link>
                ) : (
                  <>
                  <Link to="/create">CreatePost</Link>
                    <button
                      className="btn btn-primary ml-2"
                      onClick={signOutGoogle}
                    >
                  
                      Logout
                    </button>{" "}
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
