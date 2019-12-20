import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Provider } from 'react-redux'

import {startUserList} from './actions/users'
import {startPostShow} from './actions/posts'


import configureStore from './store/configireStore'

const store = configureStore()
console.log(store.getState())

store.subscribe(()=>{
 console.log(store.getState())
})
store.dispatch(startUserList())
store.dispatch(startPostShow())



 const ele = (
     <Provider store={store}>
     <App />
     </Provider>
 )

ReactDOM.render( ele, document.getElementById('root'));
