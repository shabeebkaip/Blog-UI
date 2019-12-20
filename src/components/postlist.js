import React from 'react'
import axios from 'axios'
//import { Link } from 'react-router-dom'
import image from './images/img/attachment_92549492.jpg'
import {Link} from 'react-router-dom'

import {connect} from 'react-redux'



class PostsList extends React.Component {
    constructor () {
        super()
        this.state = {
            posts:[],
            limit:5,
            users:[]

        }

    }
     componentDidMount(){
  
        axios.get('https://jsonplaceholder.typicode.com/users') 
            .then((response)=>{
                const users = response.data
                this.setState({users})
            })
            .catch((err)=>{
                alert(err)
            })
    }

    handleName(id){
        const user = this.state.users.find((user)=> user.id === id)
        console.log(user)
        return user && user.name
        
    }
    render(){
        return (
            
            <div className="bg-color-posts">
            <div className="container">
            <div>
                <h2 className="display-4 font-weight-lighter fontHeading col-md-9 offset-md-1">Posts</h2>
            </div>
            {this.props.posts.slice(0,this.state.limit).map((post)=>{
                return(
                        <div className="containerForPosts col-md-9 offset-md-1 " key={post.id}>
                        <div className='row'>
                        <div className="container">
                        <div className="row">
                        <div className="col-md-3">
                        <img src={image} alt="logo" width="120" height="120" className="logo-B image-fluid rounded-circle" />
                        </div>
                        <div className="col-md-9">
                            <h4 className="font-weight-lighter positionUser userheadingPost"><Link to= {`/users/${post.id}`} className="link text-decoration-none">{this.handleName(post.id)}</Link></h4>
                        </div>
                        </div>
                        <hr/>
                        <div className="row">
                        <div className="col-md-9 offset-md-3">
                                <h4 className="userDetails font-weight-light"><Link to={`/posts/${post.id}`} className="link text-decoration-none">{post.title}</Link></h4>
                                <p className="postBody">{post.body}</p>
                        </div>
                        </div>
                        </div>

                        </div>
                        </div>
                )
            })}
           


            </div>
            </div>
        )
    }
}

 const mapStateToProps = (state) =>{
       return {
            posts : state.posts,
       }
 }
export default  connect(mapStateToProps)(PostsList)


















