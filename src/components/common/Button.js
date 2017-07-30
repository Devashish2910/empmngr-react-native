import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

class Button extends Component {
  render() {
    const {buttonStyle, buttonTextStyle} = stylesButton;
    return(
      <TouchableHighlight style={buttonStyle} onPress={this.props.onPress}>
        <Text style={buttonTextStyle}>{this.props.btnTitle}</Text>
      </TouchableHighlight>
    );
  }
}

const stylesButton = {
  buttonStyle: {
    backgroundColor: '#c5e3ed',
    borderWidth: 0,
    borderColor: '#c5e3ed',
    marginTop: 10,
    marginLeft: 3,
    marginRight: 3,
    alignSelf: 'stretch',
    flex: 1,
    borderRadius: 5
  },
  buttonTextStyle: {
    alignSelf: 'center',
    padding: 10,
    fontSize: 16,
    fontWeight: '600'
  }

}

export {Button, stylesButton};
