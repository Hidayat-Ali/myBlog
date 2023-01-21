import { async } from "@firebase/util";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { db ,auth} from "../firebase-config";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";





const Home = () => {
  // console.log(auth.currentUser.uid)
  const [postList, setPostList] = useState([]);
  const postControllerRef = collection(db, "posts");
  const [isAuth] = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    const getPost = async () => {
      const data = await getDocs(postControllerRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPost();
  });


 useEffect(() => {
  if(!isAuth){
   navigate('/');
  }

 
})

  const deletePost = async (id )=>{
    const postDoc = doc(db, 'posts',id)
    await deleteDoc(postDoc);
  }

  return (
    <div className="py-5">
      <p className="h5  text-center text-capitalize">
        All your Post are here...
      </p>
      {postList.map((post) => (
        <div className="container card  col-md-4 py-3 shadow-lg mb-5" key={post.id}>
          <div>
            {isAuth && post.id === auth.currentUser.uid  && (
              <button className="btn btn-danger" onClick={()=>deletePost(post.id)}>
              <i className="fas fa-trash  "> Delete</i>
             </button>
            )}
            
          </div>
          <div className="title p-5  text-primary">
            <b>Title:</b> {post.title}
          </div>
          <div className="card-body overflow-auto " style={{ maxHeight: 300 }}>
            <h3>Content</h3>
            {post.post}
          </div>
          <div className="card-footer">@{post.Author_name}</div>
          
        </div>
      ))}
    
    </div>
  );
};

export default Home;
