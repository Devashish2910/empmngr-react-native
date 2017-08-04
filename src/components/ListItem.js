import React, {Component} from 'react';
import {Text} from 'react-native';
import {CardSection} from './common';

class ListItem extends Component {
  render() {
    const {textStyle} = styles;
    return (
      <CardSection style={{borderBottomWidth: 1}} >
        <Text style={textStyle}>
          {this.props.employee.name}
        </Text>
      </CardSection>
    );
  }
}

const styles = {
  textStyle: {
    fontSize: 23,
    paddingLeft: 15,
    padding: 5
  }
}

export default ListItem;
