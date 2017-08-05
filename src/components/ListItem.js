import React, {Component} from 'react';
import {Text, View, TouchableWithoutFeedback} from 'react-native';
import {CardSection} from './common';
import {Actions} from 'react-native-router-flux';

class ListItem extends Component {
  _onPress() {
    Actions.editEmployee({employeeFromList: this.props.employee});
  }

  render() {
    const {textStyle} = styles;
    return (
      <TouchableWithoutFeedback onPress={this._onPress.bind(this)} >
        <View>
          <CardSection style={{borderBottomWidth: 1}} >
            <Text style={textStyle}>
              {this.props.employee.name}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
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
