import React from 'react';
import { Text , View, Modal } from 'react-native';
import {CardSection} from './CardSection';
import {Button} from './Button';

const Confirm = (props) => {
  const { cardSectionStyle, textStyle, containerStyle } = styles;
  return (
    <Modal
      visible= {props.visible}
      animationType= "slide"
      onRequestClose= {() => {}}
      transparent
      >
      <View style={containerStyle}>
        <CardSection style={cardSectionStyle}>
          <Text style={textStyle}>
            {props.children}
          </Text>
        </CardSection>
        <CardSection>
          <Button btnTitle="Yes" onPress={props.onAccept}/>
          <Button btnTitle="No" onPress={props.onDecline}/>
        </CardSection>
      </View>
    </Modal>
  );
}

const styles = {
  cardSectionStyle: {
    justifyContent: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 25,
    textAlign: 'center',
    lineHeight: 40,
    color: '#FCFBE3'
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.87)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
}

export { Confirm };
