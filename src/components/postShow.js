import React from 'react'
import {connect} from 'react-redux'

import image from './images/img/attachment_92549492.jpg'
import fb from './images/img/facebook.svg'
import instagram from './images/img/instagram.svg'
import behance from './images/img/behance-logo.svg'
import articleImage from './images/img/Raka-Blog-social-media-sizes-1480x550.png'
import axios from 'axios'



class PostShow extends React.Component {
   constructor(props){
       super(props)
       this.state = {
           posts: {},
           comments:[],
           user:{}
       }
   }
   componentDidMount(){
       const id= this.props.posts.userId
       axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response=>{
            const user = response.data
            this.setState({user})
        })
        .catch((err)=>{
            alert(err)
        })

   }

    render(){
        return (
            <div className="container">
            <div className="col-md-10 offset-md-1">
            <h1 className="display-4 font-weight-lighter margin-post">{this.props.posts.title}</h1>
            <div className="container-fluid">
            <div className="row">
            <div className="col-md-3">
            <img src={image} alt="logo" className="logo-c image-fluid rounded-circle"  width="120" height="120"/>
            </div>
            <div className="col-md-5">
           
            <h5 className="headingForPostPage">{this.state.user.name}</h5>
            <button className="btn btn-success btn-border btn-sm">Follow</button>
          
            </div>
            <div className="col-md-4">
            <ul className="ul-social" >
                <li className="li-social"><img src={fb} width="30" height="30" alt="logo1" /></li>
                <li className="li-social"><img src={instagram} width="30" height="30" alt="logo1" /></li>
                <li className="li-social"></li><img src={behance} width="30" height="30" alt="logo1" />
            </ul>
            </div>
                
            </div>
            <hr/>
            <div className="col-md-6 offset-md-3 positioningImage shadow-sm p-3 mb-5 bg-white rounded">
                <img src={articleImage} alt="article"  width="740" height="275"/>
            </div>
            <hr/>
            <div className="row">
            <div className ="col-md-12">
            <h4 className="display-4 font-weight-lighter"> Introduction</h4>
            <p>
                {this.props.posts.body}
            </p>
            <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
             </div>
            </div>

            

            </div>
            </div>
            </div>
        )
    }
 }
 const mapStateToProps = (state, props)=> {
    return {
        posts: state.posts.find((post)=> post.id ==  props.match.params.id),
        
        
    }
 }
 export default connect(mapStateToProps) (PostShow);





