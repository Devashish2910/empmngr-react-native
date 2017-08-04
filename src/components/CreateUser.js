import React, { Component } from 'react';
import {Text, View, Image, TextInput} from 'react-native';
import {Card, CardSection, Button, Spinner, Header} from './common';
import {onChangeUsername, onChangePassword, createUser} from './../actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {MessageBar as MessageBarAlert, MessageBarManager} from 'react-native-message-bar';
import {Actions} from 'react-native-router-flux';

class CreateUser extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if(nextProps.Auth.error) {
      MessageBarManager.showAlert({
        message: nextProps.Auth.error,
        alertType: 'error',
        animationType: 'SlideFromTop'
      });
    } else {
      MessageBarManager.hideAlert();
    }

    if(nextProps.Auth.user !== null) {
      MessageBarManager.showAlert({
        message: "User Created Successfully",
        alertType: 'success',
        animationType: 'SlideFromTop'
      });
      
    } else {
      MessageBarManager.hideAlert();
    }
  }

  _onUsernameChange(username) {
    const {onChangeUsername} = this.props;
    onChangeUsername(username);
  }

  _onPasswordChange(password) {
    const {onChangePassword} = this.props;
    onChangePassword(password);
  }

  _submitBtnClick() {
    const {username, password} = this.props.Auth;
    this.props.createUser(username, password);
  }

  _renderButton() {
    if(this.props.Auth.isLoading) {
      return <Spinner size='large'/>
    } else {
      return (
        <Button btnTitle="Submit" onPress={this._submitBtnClick.bind(this)}></Button>
      );
    }
  }

  _onBackToLoginPress() {
    Actions.login();
  }
  componentDidMount() {
    MessageBarManager.registerMessageBar(this.refs.alert);
  }

  componentWillMount() {
    this.props.Auth.user = null;
  }

  componentWillUnmount() {
    MessageBarManager.unregisterMessageBar();
  }

  render() {
    const { backgroundImage,
             UsernameTextInputStyle,
             PasswordTextInputStyle,
             usernameTextStyle,
             errorTextStyle,
             orTextStyle,
             background
          } = style;
      return(
        <View style={background}>
         <View>
           <MessageBarAlert ref="alert" />
         </View>
         <View>
          <Card style={{marginTop: 200}}>
            <CardSection>
              <View>
                <TextInput
                  autoCorrect={false}
                  placeholder='email'
                  value={this.props.Auth.username}
                  onChangeText={username => this._onUsernameChange(username)}
                  style={UsernameTextInputStyle}>
                </TextInput>
              </View>
            </CardSection>
            <CardSection>
              <TextInput
                secureTextEntry = {true}
                placeholder='password'
                value={this.props.Auth.password}
                onChangeText={password => this._onPasswordChange(password)}
                style={PasswordTextInputStyle}></TextInput>
            </CardSection>
            <CardSection>
              {this._renderButton()}
            </CardSection>
          </Card>
        </View>
      </View>
    );

  }
}

const mapStateToProps = state => {
  return {
    Auth: state.AuthState
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({onChangeUsername, onChangePassword, createUser}, dispatch);
}

const style = {
  UsernameTextInputStyle: {
    fontSize: 20,
    height: 40,
    width: 350,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    color: '#c5e3ed'
  },
  PasswordTextInputStyle: {
    fontSize: 20,
    height: 40,
    width: 350,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    color: '#c5e3ed'
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    resizeMode: 'stretch'
  },
  usernameTextStyle: {
    fontSize: 18,
    paddingTop:10,
    paddingBottom: 10
  },
  orTextStyle: {
    fontSize: 15,
    paddingLeft: 110,
    paddingTop: 10
  },
  background: {
    backgroundColor: '#5A908A',
    flex: 1
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);
