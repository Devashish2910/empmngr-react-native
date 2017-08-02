import React, {Component} from 'react';
import {View, Text} from 'react-native';

class Header extends Component {
  render() {
    const {headerStyle, headerTextStyle} = style;
    let headerText;
    if(!this.props.title) {
      headerText = "Employee Manager";
    } else {
      headerText =  this.props.title;
    }
    return(
      <View style={headerStyle}>
          <Text style={headerTextStyle}>
            {headerText}
          </Text>
      </View>
    );
  }
}

const style = {
  headerStyle: {
    backgroundColor: '#276F67',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOffset: {height: 1, width: 0},
    shadowOpacity: 0.3,
    elevation: 2,
    position: 'relative',
    height: 45,
    marginTop: '5%',
    borderRadius: 1
  },
  headerTextStyle: {
    fontSize: 18,
    fontWeight: '600'
  }
}

export {Header};
