import React, { Component } from 'react';
import {Text, View, Image, TextInput, Picker} from 'react-native';
import {Card, CardSection, Button, Spinner, Header} from './common';
import {employeeActions, createEmployee} from './../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {MessageBar as MessageBarAlert, MessageBarManager} from 'react-native-message-bar';
import {Actions} from 'react-native-router-flux';

class CreateEmployee extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.CreateEmployee.error) {
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
  }

  componentWillMount() {
    this.props.CreateEmployee.user = null;
    this.props.CreateEmployee.shift = 'Monday';
  }

  componentWillUnmount() {
    MessageBarManager.unregisterMessageBar();
  }

  _renderButton() {
    if(this.props.CreateEmployee.isLoading) {
      return <Spinner size='large'/>
    } else {
      return (
        <Button btnTitle="Create Employee" onPress={this._submitBtnClick.bind(this)}></Button>
      );
    }
  }

  _submitBtnClick() {
    const {name, contact, shift} = this.props.CreateEmployee;
    this.props.createEmployee({name, contact, shift})
  }

  render() {
    const {
            background,
            NameTextInputStyle,
            ContactTextInputStyle,
            shiftPickerStyle,
            pickerTextStyle
          } = style;
      return(
        <View style={background}>
         <View>
           <MessageBarAlert ref="alert" />
         </View>
         <View>
           <View>
            <Card style={{marginTop: 30, marginLeft: 10, marginRight: 10}}>
              <CardSection>
                <View>
                  <TextInput
                    autoCorrect={false}
                    placeholder='Name'
                    value={this.props.CreateEmployee.name}
                    onChangeText={name => this.props.employeeActions({prop:'name', value: name})}
                    style= {NameTextInputStyle}
                    >
                  </TextInput>
                </View>
              </CardSection>
              <CardSection>
                <TextInput
                  autoCorrect={false}
                  placeholder='Contact'
                  value={this.props.CreateEmployee.contact}
                  onChangeText={contact => this.props.employeeActions({prop:'contact', value: contact})}
                  style={ContactTextInputStyle}
                  ></TextInput>
              </CardSection>
              <CardSection >
                <Picker style={{flex: 1}}
                  selectedValue={this.props.CreateEmployee.shift}
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
                {this._renderButton()}
              </CardSection>
            </Card>
          </View>
         </View>
      </View>
    );

  }
}

const mapStateToProps = state => {

  return {
    CreateEmployee: state.EmployeeState
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({employeeActions, createEmployee}, dispatch);
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateEmployee);
