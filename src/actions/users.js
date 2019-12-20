import axios from 'axios'

export const userList = (users)=>{
    return  {
        type: 'USER_LIST',
        payload: users
    }
}

export const startUserList = ()=>{
        return (dispatch)=>{
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then((response)=>{
                    const users = response.data
                    dispatch(userList(users))
                })
        }
}