import React, {Component} from 'react';
import {Text , View, Model } from 'react-native';
import {CardSection} from './CardSection';
import {Card} from './Card';

class Confirm extends Component {
  render() {
    return (
      <Model
        visible={this.props.visible}
        animationType="slide"
        onRequestClose={() => {}}
        transperent
        style={{...this.props.style}}
        >
        <View>
          <CardSection>
            <Text>
              {this.props.notice}
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

}

export default {Confirm};
