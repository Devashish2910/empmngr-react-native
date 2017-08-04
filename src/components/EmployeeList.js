import React, { Component } from 'react';
import {Text, View, Image, TextInput, ListView} from 'react-native';
import {Card, CardSection, Button, Spinner, Header} from './common';
import {employeeFetch} from './../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {MessageBar as MessageBarAlert, MessageBarManager} from 'react-native-message-bar';
import {Actions} from 'react-native-router-flux';
import _ from 'lodash';
import ListItem from './ListItem';

class EmployeeList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    const {EmployeeList} = nextProps;
    this.createDataSource(EmployeeList);
  }

  componentDidMount() {
    MessageBarManager.registerMessageBar(this.refs.alert);
  }

  createDataSource(EmployeeList) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(EmployeeList);
  }

  componentWillMount() {
    this.props.employeeFetch();
    console.log(this.props);
    const {EmployeeList} = this.props;
    this.createDataSource(EmployeeList);
  }

  componentWillUnmount() {
    MessageBarManager.unregisterMessageBar();
  }

  renderRow(employee) {
    return <ListItem employee={employee} />
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
            <ListView
              enableEmptySections
              dataSource={this.dataSource}
              renderRow={this.renderRow}
            />
      </View>
    );

  }
}

const mapStateToProps = state => {
  const EmployeeList = _.map(state.EmployeesList, (val, uid) => {
    return {...val, uid};
  });

  return {
    EmployeeList
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({employeeFetch}, dispatch);
}

const style = {
  background: {
    backgroundColor: '#5A908A',
    flex: 1
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList);