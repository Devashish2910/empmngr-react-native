import React, {Component} from 'react';
import {View} from 'react-native';

class CardSection extends Component {
  render() {
    const {CardSectionStyle} = stylesCardSection;
    return(
      <View style={{...CardSectionStyle, ...this.props.style}}>
        {this.props.children}
      </View>
    );
  }
}
const stylesCardSection = {
  CardSectionStyle: {
    borderBottomWidth: 0,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#9DBAB7',
    elevation: 2,
    position: 'relative'
  }
}

export {CardSection, stylesCardSection};
