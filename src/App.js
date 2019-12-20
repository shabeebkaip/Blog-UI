import React from 'react';

import Home from './components/home'
import UserList from './components/userlist'
import UserShow from './components/userShow'
import PostsList from './components/postlist'
import PostShow from './components/postShow'



import {BrowserRouter, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import '../src/App.css'




function App() {
  return (
    <BrowserRouter>
    <div >
    <nav className="navbar navbar-expand-lg navbar-light navbar-stick bg-light ">
    <h4  className="navbar-brand">Blog UI</h4>
    <div className="collapse navbar-collapse" id="navbar">
    <ul className="navbar-nav">
    <li className="nav-item padding"><Link to = "/" className="nav-link">Home</Link></li>
   
    <li className="nav-item padding"><Link to ="/users" className="nav-link">Users</Link></li>
    <li className="nav-item padding"><Link to="/posts" className="nav-link">Posts</Link></li>
    </ul>
    </div>
  
    </nav>
    </div>
   
    
    
    
    
    
    
    
     <Route path = "/" component ={Home} exact = {true} /> 
     <Route path = "/users" component = {UserList} exact = {true} />
     <Route path = "/users/:id" component = {UserShow} />
     <Route path="/posts" component={PostsList} exact ={true}/>
     <Route path ="/posts/:id" component={PostShow} />
     
     
    
     
    
    
    </BrowserRouter>
  );
}

export default  connect()(App);