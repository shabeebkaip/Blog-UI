import  { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import usersReducers from '../reducers/users'
import postsreducers from '../reducers/posts'


const configureStore = ()=>{
    const store  = createStore(combineReducers({
        users: usersReducers,
        posts: postsreducers

    }),applyMiddleware(thunk))
    return store
}

export default configureStore