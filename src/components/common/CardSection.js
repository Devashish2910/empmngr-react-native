import React, {Component} from 'react';
import {View} from 'react-native';

class CardSection extends Component {
  render() {
    const {CardSectionStyle} = stylesCardSection;
    return(
      <View style={CardSectionStyle}>
        {this.props.children}
      </View>
    );
  }
}
const stylesCardSection = {
  CardSectionStyle: {
    borderBottomWidth: 0.5,
    justifyContent: 'flex-start',
    flexDirection: 'column',
    borderColor: '#566c73',
    elevation: 2,
    position: 'relative',
    padding: 5,
    marginBottom: 1
  }
}

export {CardSection, stylesCardSection};
