import React, { Component } from 'react';
import {Text, View, Image, TextInput} from 'react-native';
import {Card, CardSection, Button, Spinner, Header} from './common';
import {} from './../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {MessageBar as MessageBarAlert, MessageBarManager} from 'react-native-message-bar';
import {Actions} from 'react-native-router-flux';

class EmployeeList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {

  }

  componentDidMount() {
    MessageBarManager.registerMessageBar(this.refs.alert);
  }

  componentWillMount() {
  }

  componentWillUnmount() {
    MessageBarManager.unregisterMessageBar();
  }

  _renderEmployeeList() {

  }

  render() {
    const {
            background
          } = style;
      return(
        <View style={background}>
          <View>
            <MessageBarAlert ref="alert" />
          </View>
          <View>
            
          </View>
      </View>
    );

  }
}

// const mapStateToProps = state => {
//   return {
//   }
// }
//
// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({}, dispatch);
// }

const style = {
  background: {
    backgroundColor: '#5A908A',
    flex: 1
  }
}
export default EmployeeList;
//export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);
