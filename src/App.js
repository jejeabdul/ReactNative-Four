import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers'
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import LoginForm from './components/LoginForm';

class App extends Component {

    componentWillMount() {
        var config = {
            apiKey: 'AIzaSyAYEWuVxCqZLFzFgshu1ZDkHU-xiDuFIQ4',
            authDomain: 'learn-cb308.firebaseapp.com',
            databaseURL: 'https://learn-cb308.firebaseio.com',
            projectId: 'learn-cb308',
            storageBucket: 'learn-cb308.appspot.com',
            messagingSenderId: '451059916646'
          };
          firebase.initializeApp(config);
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return(
            <Provider store={store}>
                <LoginForm />
            </Provider>
        );
    }
}


export default App;