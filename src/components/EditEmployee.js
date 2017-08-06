import React, { Component } from 'react';
import {Text, View, TextInput, Picker} from 'react-native';
import {Card, CardSection, Button, Spinner, Header, Input, Confirm} from './common';
import Deva from './common';
import {employeeActions, employeeEdit} from './../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Actions} from 'react-native-router-flux';
import _ from 'lodash';
import {MessageBar as MessageBarAlert, MessageBarManager} from 'react-native-message-bar';
import Communication from 'react-native-communications';

class EditEmployee extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showModel: false
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.EditEmployee.error) {
      MessageBarManager.showAlert({
        message: nextProps.CreateEmployee.error,
        alertType: 'error',
        animationType: 'SlideFromTop'
      });
    } else {
      MessageBarManager.hideAlert();
    }
  }

  componentDidMount() {
    MessageBarManager.registerMessageBar(this.refs.alert);
    console.log(Button);
  }

  componentWillUnmount() {
    MessageBarManager.unregisterMessageBar();
  }


  componentWillMount() {
    _.each(this.props.employeeFromList, (value, prop) => {
      this.props.employeeActions({prop, value});
    });

  }

  _renderEditButton() {
    if(this.props.EditEmployee.isLoading) {
      return <Spinner size='large'/>
    } else {
      return (
        <Button btnTitle="Edit Employee" style={{margin:5}} onPress={this._editBtnClick.bind(this)}></Button>
      );
    }
  }

  _renderMessageButton() {
    if(this.props.EditEmployee.isLoading) {
      return <Spinner size='large'/>
    } else {
      return (
        <Button btnTitle="Message Employee" style={{backgroundColor: '#eece0e', margin: 5}} onPress={this._messageBtnClick.bind(this)}></Button>
      );
    }
  }

  _renderFireButton() {
    if(this.props.EditEmployee.isLoading) {
      return <Spinner size='large'/>
    } else {
      return (
        <Button btnTitle="Fire Employee" style={{ backgroundColor: '#d82b2b', margin: 5 }} onPress={this._fireBtnClick.bind(this)}></Button>
      );
    }
  }

  _editBtnClick() {
    const {name, contact, shift} = this.props.EditEmployee;
    const {uid} = this.props.employeeFromList;
    this.props.employeeEdit({name, contact, shift, uid});
  }

  _messageBtnClick() {
    const {name, contact, shift} = this.props.EditEmployee;
    const body = `Hey ${name}, You have shift on ${shift} in this week. -Devashish`;
    Communication.text(contact, body);
  }

  _fireBtnClick() {
    this.setState({showModel: true});
    const {name, contact, shift} = this.props.EditEmployee;
  }

  render() {
    const {
            background,
            pickerTextStyle
          } = style;
      return(
        <View style={background}>
         <View>
           <View>
             <MessageBarAlert ref="alert" />
           </View>
           <View>
            <Card style={{marginTop: 30, marginLeft: 10, marginRight: 10, borderColor: '#9DBAB7', borderWidth: 1, borderBottomWidth: 1}}>
              <CardSection style={{borderBottomWidth: 1}}>
                <Input
                  label='Name:'
                  placeholder='Devashish'
                  value={this.props.EditEmployee.name}
                  onChangeText={name => this.props.employeeActions({prop:'name', value: name})}
                />
              </CardSection>
              <CardSection style={{borderBottomWidth: 1}}>
                <Input
                  label='Contact:'
                  placeholder='555-555-5555'
                  value={this.props.EditEmployee.contact}
                  onChangeText={contact => this.props.employeeActions({prop:'contact', value: contact})}
                />
              </CardSection>
              <CardSection style={{borderBottomWidth: 1}}>
                <Picker style={{flex: 1}}
                  selectedValue={this.props.EditEmployee.shift}
                  onValueChange={day => this.props.employeeActions({prop:'shift', value: day})}
                  >
                  <Picker.Item label="Monday" value="Monday" />
                  <Picker.Item label="Tuesday" value="Tuesday" />
                  <Picker.Item label="Wednesday" value="Wednesday" />
                  <Picker.Item label="Thursday" value="Thudrsday" />
                  <Picker.Item label="Friday" value="Friday" />
                  <Picker.Item label="Saturday" value="Saturday" />
                  <Picker.Item label="Sunday" value="Sunday" />
                </Picker>
              </CardSection>
              <CardSection>
                {this._renderEditButton()}
              </CardSection>
              <CardSection>
                {this._renderMessageButton()}
              </CardSection>
              <CardSection>
                {this._renderFireButton()}
              </CardSection>
              <Confirm visible={this.state.showModel}>
                Are you sure to fire this employee?
              </Confirm>
            </Card>
          </View>
         </View>
      </View>
    );

  }
}

const mapStateToProps = state => {
  return {
    EditEmployee: state.EmployeeState
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({employeeActions, employeeEdit}, dispatch);
}

const style = {
  background: {
    backgroundColor: '#5A908A',
    flex: 1
  },
  NameTextInputStyle: {
    fontSize: 20,
    height: 40,
    width: 350,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    color: '#c5e3ed'
  },
  ContactTextInputStyle: {
    fontSize: 20,
    height: 40,
    width: 350,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    color: '#c5e3ed'
  },
  shiftPickerStyle: {
    marginTop: -45
  },
  pickerTextStyle: {
    fontSize: 20,
    paddingTop: 5,
    color: '#c2b098',
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditEmployee);
