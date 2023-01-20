import { async } from '@firebase/util';
import { getDocs,collection } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../firebase-config'
const Home = () => {
  const [postList ,setPostList] = useState([]);
  const postControllerRef = collection(db, "posts");
 useEffect(() => {
  const getPost= async ()=>{
    const data = await getDocs(postControllerRef);
    setPostList(data.docs.map((doc)=>({...doc.data(),id:doc.id})));
  }
 
  getPost();
 },[]);

 
  return (
    <div className='container'>
{postList.map(post=>(
  <h1>{post.title}</h1>
))}
    </div>
  )
}

export default Home
