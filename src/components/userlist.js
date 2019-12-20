import React from 'react'

import {Link} from 'react-router-dom'
import '../App.css'
import { connect } from 'react-redux'

class UserList extends React.Component {
   
    render() {
        console.log(this.props.posts)
        return (
            <div className="container">
            <h2 className="fontHeading font-weight-lighter " >Listing of users -{this.props.users.length}</h2>
            <ul className="list-group">
            {this.props.users.map((user)=>{
                return <div className="liMargin" key={user.id} ><li className="list-group-item d-flex justify-content-between align-items-center"><Link to={`/users/${user.id}`} className="link text-decoration-none">{user.name}</Link>  <span className="badge badge-success badge-pill spanFont">{this.props.posts.filter(post=>post.userId==user.id).length}</span></li></div>
            })}
            </ul>
            
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return  {
        users: state.users,
        posts: state.posts
       
    }
    
}

export default  connect(mapStateToProps)(UserList)