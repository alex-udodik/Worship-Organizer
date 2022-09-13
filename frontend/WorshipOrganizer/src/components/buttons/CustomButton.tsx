import React, { Component } from 'react';
import { Button, Alert } from 'react-native';

class CustomButton extends Component {

  render() {
    return (
        <Button
        onPress={() => Alert.alert('Simple Button pressed')}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    );
  }
}

export default CustomButton;