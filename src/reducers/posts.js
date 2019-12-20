const postsInitialState = []

const postsReducer = (state=postsInitialState, action) => {
        switch(action.type) {
            case 'POST_SHOW' : {
                return [...action.payload]
            }
            default : {
                return state 
            }
        }
}

export default postsReducer