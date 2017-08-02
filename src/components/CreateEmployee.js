import React, { Component } from 'react';
import {Text, View, Image, TextInput} from 'react-native';
import {Card, CardSection, Button, Spinner, Header} from './common';
import {onEmployeeNameChange, onEmployeeContactChange} from './../actions';
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
  }

  componentWillUnmount() {
    MessageBarManager.unregisterMessageBar();
  }

  _onNameChange(name) {
    this.props.onEmployeeNameChange(name);
  }

  _onContactChange(contact) {
    this.props.onEmployeeContactChange(contact);
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
    const {name, contact} = this.props.CreateEmployee;
  }


  render() {
    const {
            background,
            NameTextInputStyle,
            ContactTextInputStyle
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
                    onChangeText={name => this._onNameChange(name)}
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
                  onChangeText={contact => this._onContactChange(contact)}
                  style={ContactTextInputStyle}
                  ></TextInput>
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
    CreateEmployee: state.CreateEmployeeState
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({onEmployeeNameChange, onEmployeeContactChange}, dispatch);
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateEmployee);
