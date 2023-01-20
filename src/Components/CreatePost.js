import React, { useContext, useEffect, useState } from "react";
import "../css/blogForm.css";
import { addDoc, collection } from "firebase/firestore";

import { auth, db } from "../firebase-config";
import { useFetcher, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const CreatePost = () => {
  const [title, setTitle] = useState();
  const [post, setPost] = useState();
  const navigate = useNavigate();
  const postControllerRef = collection(db, "posts");
  // console.log(auth);
 const [isAuth] = useContext(AuthContext)
  const addPost = async () => {
    await addDoc(postControllerRef, {
      title,
      post,
      Author: { name: auth.currentUser.displayName, id:auth.currentUser.uid }
    });
    navigate("/");
  };

 useEffect(() => {
   if(!isAuth){
    navigate('/');
   }
 
  
 }, [])
 
  return (
    <div className="container py-5 text-center">
      <div className="card-header">
        <p className="h3">Add your Blog here....</p>
      </div>
      <form>
        <div className="card-title">
          <div className="card-body ">
            <div className="input-group">
              <input
                className="form-control title p-2"
                placeholder="Enter the title of content"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="input-group mt-5">
              <textarea
                className="form-control content "
                rows="10"
                placeholder="Enter the content here.."
                onChange={(e) => setPost(e.target.value)}
              />
            </div>
          </div>
        </div>
      </form>
      <button className="btn btn-primary mt-4 " onClick={addPost}>
        Submit
      </button>
    </div>
  );
};

export default CreatePost;
