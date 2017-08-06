import React, {Component} from 'react';
import {Text , View, Model } from 'react-native';
import {CardSection} from './CardSection';
import {Card} from './Card';

class Confirm extends Component {
  render() {
    const {cardSection, textStyle, containerStyle} = styles;
    return (
      <Model
        visible={this.props.visible}
        animationType="slide"
        onRequestClose={() => {}}
        transperent
        style={{...this.props.style}}
        >
        <View style={containerStyle}>
          <CardSection style={cardSectionStyle}>
            <Text style={textStyle}>
              {this.props.warning}
            </Text>
          </CardSection>
          <CardSection>
            <Button btnTitle="Yes" onPress={this.props.onAccept}/>
            <Button btnTitle="No" onPress={this.props.onDecline}/>
          </CardSection>
        </View>
      </Model>
    );
  }
}

const styles = {
  cardSectionStyle = {
    justifyContent: 'center'

  },
  textStyle= {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'

  }

}

export default {Confirm};
