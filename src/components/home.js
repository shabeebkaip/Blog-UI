import React from 'react'
import {Carousel, Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import axios from 'axios'
import img2 from './images/img/bi-blog-success-1440x600.png'
import img3 from './images/img/bi-blogmanager-1440x600.png'
import img4 from './images/img/bi-get-more-out-of-your-blog-1440x600.png'
import img5 from './images/img/Raka-Blog-social-media-sizes-1480x550 copy.png'



class Home extends React.Component{
    constructor(){
        super()
        this.state={
                posts:[],
                limit: 3,
                users:[]

        }

    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response)=>{
                const posts = response.data
                this.setState({posts})
            })

        axios.get('https://jsonplaceholder.typicode.com/users')
                .then((response)=>{
                const users = response.data
                this.setState({users})
            })
            .catch((err)=>{
               alert(err)
            })    
    }
    render(){
        return (
            <div className="bg-color">
            <div>
                    <Carousel>
                    <Carousel.Item>
                    <img className="d-block " src={img2} alt="First slide" width="1440" height="600"/>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img className="d-block " src={img3} width="1440" height="600" alt="second slide" />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img className="d-block" src={img4} width="1440" height="600" alt="Third slide" />
                    </Carousel.Item>
                    </Carousel>
           
            </div>
            <div className="container">
            <div className="row">
            <div className="col-md-8">
            <div className="marginRecent">
                <h2 className="userDetails font-weight-lighter"> Recent Posts</h2>
            </div>
            <div>
            {
                this.state.posts.slice(0, this.state.limit).map((post)=>{
                    return (
                        <div className="marginRecent" key={post.id}>
                                        <Card style={{ width: '35rem' }}>
                            
                            <Card.Img variant="top" src={img5} />
                            <Card.Body>
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Text>
                                {post.body}
                                </Card.Text>
                                <Button variant="primary"><Link to={`/posts/${post.id}`}  className="link4 text-decoration-none" >show post</Link></Button>
                            </Card.Body>
                            </Card>
                        </div>
                    )
                })
            }
            
            
            </div>
            <div></div>
            



            </div>
            <div className="col-md-4">
            <div className="marginRecent">
                <h2 className="userDetails font-weight-lighter">Authors </h2>
            </div>
            <div>
            <ul>
                {this.state.users.map((user)=>{
                    return (
                        <div className="liMargin" key={user.id}><li  className="list-group-item link"><Link to={`/users/${user.id}`} className="text-decoration-none link">{user.name}</Link> </li></div>
                    )
                })}
            </ul>
            </div>
            </div>

            </div>

            </div>
            </div>
            
        )
    }
}

export default Home