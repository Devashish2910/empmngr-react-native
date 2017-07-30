import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import ReduxPromise from 'redux-promises';
import reducers from './reducers';
import {View} from 'react-native';


//Call your Component Here
import {Header} from './components/common';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
    <Provider store={createStore(reducers)}>
      <View style={{flex: 1}}>
        <Header />
      </View>
    </Provider>
    );
  }
}

export default App;
