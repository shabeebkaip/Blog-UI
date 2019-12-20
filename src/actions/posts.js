import axios from 'axios'

 export const postShow = (posts)=>{
    return {
        type: "POST_SHOW",
        payload: posts
    }
}

export const startPostShow = ()=> {
    return (dispatch) =>{
            axios.get('https://jsonplaceholder.typicode.com/posts')
                .then((response)=>{
                    const posts = response.data
                    dispatch(postShow(posts))
                })
    }
}