import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promises';
import reducers from './reducers';
import {View} from 'react-native';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBCiiqtGiBOtT_u5lFzFWmjZV9jc1foQvk',
      authDomain: 'employeemanager-ddd8e.firebaseapp.com',
      databaseURL: 'https://employeemanager-ddd8e.firebaseio.com',
      projectId: 'employeemanager-ddd8e',
      storageBucket: 'employeemanager-ddd8e.appspot.com',
      messagingSenderId: '20613814906'
    }
    firebase.initializeApp(config);
  }

  render() {
    return(
    <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
    </Provider>
    );
  }
}


export default App;
