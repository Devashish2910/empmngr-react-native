import React, {Component} from 'react';
import {View, Text, TouchableHighlight} from 'react-native';

class Button extends Component {
  render() {
    const {buttonStyle, buttonTextStyle} = stylesButton;
    return(
      <TouchableHighlight style={{...buttonStyle, ...this.props.style}} onPress={this.props.onPress}>
          <Text style={buttonTextStyle}>{this.props.btnTitle}</Text>
      </TouchableHighlight>
    );
  }
}

const stylesButton = {
  buttonStyle: {
    backgroundColor: '#95a5a6',
    borderWidth: 0,
    borderColor: '#95a5a6',
    marginTop: 10,
    marginLeft: 3,
    marginRight: 3,
    alignSelf: 'stretch',
    flex: 1,
    borderRadius: 2
  },
  buttonTextStyle: {
    alignSelf: 'center',
    padding: 10,
    fontSize: 16,
    fontWeight: '600'
  }

}

export {Button, stylesButton};
