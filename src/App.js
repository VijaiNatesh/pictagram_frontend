import React from 'react'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import User from './User';
import Login from './Login';
import Post from './Post';
import Feed from './Feed';
import Navigation from './Navigation';
import Home from './Home';
import Editpost from './Editpost';

function App() {
  return (
       
    <BrowserRouter>
    <Navigation/>
    <Routes> 
      Image Poster  
        <Route path = '/' element = {<Home/>} />    
        <Route path ='/signup' element = {<User /> }/>         
        <Route path ='/login' element = { <Login />}/>      
        <Route path ='/post' element = {<Post /> }/>        
       <Route path= '/feed' element = {<Feed />} />  
       <Route path= '/editPost/:postId' element = {<Editpost/>} />        
      </Routes>
    </BrowserRouter>
    
  )
}

export default App


