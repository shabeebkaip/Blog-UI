const usersInitialState = []

const usersReducers = (state = usersInitialState, action)=>{
            switch(action.type) {
               case 'USER_LIST':{
                   return [...action.payload]
               }
                default : {
                    return state
                }
            }
}

export default usersReducers