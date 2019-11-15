import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Button = props => {
  return (
      <View style={{...styles.containerButton, ...props.style}}>
          <Text style={styles.buttonText}>{props.title}</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  containerButton: {
    width: 80,
    borderRadius: 5,
    paddingVertical: 5,
  },
  buttonText: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Button;
