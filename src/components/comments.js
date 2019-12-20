import React from 'react'
import axios from 'axios'

class Comments extends React.Component {
    constructor() {
        super()
        this.state = {
            comments:[]
        }
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .catch((response)=>{
                const comments = response.data
                this.setState({comments})
            })
            .catch((err)=>{
                this.setState({err})
            })
    }

    render(){
        return (
            <div>
                <h1>{this.state.comments.length}</h1>
            </div>
        )
            
    
    }
}
export default Comments