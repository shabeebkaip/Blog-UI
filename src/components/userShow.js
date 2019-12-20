import React from 'react'

import '../App.css'
import image from './images/img/personal-user-illustration-@2x.png'
import {Link} from 'react-router-dom' 
import {connect} from 'react-redux'


class UserShow extends React.Component {
    
   

    render(){
        return (
            <div className="container-fluid bg-user" >
             <div className="row user-details bg-user">
            <div className="col-md-6  offset-md-3">
            <div className="row">
            <div className="col-md-6">
            <img src={image}  alt="user" width="130" height="150" className="userImage"/>
            <h2 className="fontHeading padding"> {this.props.users.name}</h2>
            </div>
            <div className="col-md-6 marginUser">
            <h4 className="userDetails"> Username </h4>
            <p>{this.props.users.username} </p>
            <h4 className="userDetails">Email </h4>
            <p>{this.props.users.email}</p>
            <h4 className="userDetails">Contact </h4>  
            <p>{this.props.users.phone}</p>
            </div>
            </div>
            </div>
            </div> 
            
            <div className="raw " >
            <div className="col-md-6 offset-md-3 userPosts">
            <h2 className="userDetails font-weight-lighter"> Posts</h2>
            <ul className="list-group">
            {this.props.posts.map((post)=> {
                return <div className="liMargin" key={post.id}><li key={post.id} className="list-group-item"><Link  to={`/posts/${post.id}`}  className="link3 text-decoration-none">{post.title}</Link></li></div>
            })}
            </ul>
           </div>
            </div>
             </div>
        ) 
    }
}
 const mapStateToProps = ( state, props)=>{
    return {
        users: state.users.find((user)=> user.id == props.match.params.id),
        posts: state.posts.filter((post)=>post.userId == props.match.params.id )
    }
}
export default  connect(mapStateToProps)(UserShow)