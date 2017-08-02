import React, {Component} from 'react';
import {View, Image} from 'react-native';

class Card extends Component {
  render() {
    const {cardStyle} = stylesCard;
    return(
      <View style={{...cardStyle, ...this.props.style}}>
        {this.props.children}
      </View>
    );
  }
}
const stylesCard = {
  cardStyle: {
    borderWidth: 0,
    borderColor: '#95a5a6',
    borderBottomWidth: 0,
    borderRadius: 5,
    shadowColor: '#95a5a6',
    shadowOffset: {height: 2, width: 0},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginTop: 100,
    marginLeft: 5,
    marginRight: 5,
    elevation: 2,
    position: 'relative',
    backgroundColor:'transparent'
  }
}

export {Card, stylesCard};
