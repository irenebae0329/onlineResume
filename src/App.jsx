import Router from '@src/router'
import { Provider } from 'react-redux'
import store from '@src/store'
export default function App(){
    return(
    <Provider store={store}>
        <Router></Router>
    </Provider>
    )
}