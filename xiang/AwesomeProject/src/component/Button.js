import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';


export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      disabled: false
    }
  };
  onPress = () => {
    const { onPress } = this.props;
    this.disabled();
    onPress(this.enable);
  };
  enable = () => {
    this.setState({
      disabled: false
    })
  };
  disabled = () => {
    this.setState({
      disabled: true
    })
  }
  render() {
    const { text } = this.props
    return (
      <TouchableOpacity
        disabled={this.state.disabled}
        style={[styles.button, this.state.disabled && styles.disabled]}
        onPress={this.onPress} >
        <Text style={styles.buttonText} >{text}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 100,
    height: 40,
    width: 200,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: 'center',
    backgroundColor: "green"
  },
  buttonText: {
    fontSize: 16,
    color: "#fff"
  },
  disabled: {
    backgroundColor: "red"
  }
})
