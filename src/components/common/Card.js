import React, {Component} from 'react';
import {View, Image} from 'react-native';

class Card extends Component {
  render() {
    const {cardStyle} = stylesCard;
    return(
      <View style={cardStyle}>
        {this.props.children}
      </View>
    );
  }
}
const stylesCard = {
  cardStyle: {
    borderWidth: 0.1,
    borderColor: '#566c73',
    borderBottomWidth: 0,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {height: 2, width: 0},
    shadowOpacity: 0.2,
    shadowRadius: 2,
    marginTop: 200,
    marginLeft: 5,
    marginRight: 5,
    elevation: 2,
    position: 'relative',
    backgroundColor:'transparent'
  }
}

export {Card, stylesCard};
