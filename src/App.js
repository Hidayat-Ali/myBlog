import 'bootswatch/dist/cerulean/bootstrap.min.css';
import './css/nav.css';
import {BrowserRouter as Router , Routes,Route,Link} from 'react-router-dom';
import CreatePost from './Components/CreatePost';
import Home from './Components/Home';
import Login from './Components/Login';
import Nav from './Components/Navbar/Nav';
import { useState } from 'react';
import { AuthContext } from './contexts/AuthContext';


function App() {
   const [IsAuth,setIsAuth] = useState(false);

  return (
  <Router>
    <AuthContext.Provider value = {[IsAuth,setIsAuth]}>
    <Nav/>
    <Routes>
      <Route exact  path='/' element={<Home/>}/>
      <Route exact  path='/create' element={<CreatePost/>}/>
      <Route exact  path='/login' element={<Login />}/>
    </Routes>
    </AuthContext.Provider>
  
  </Router>
  );
}

export default App;
