import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Button from './src/component/Button';


export default class App extends Component {

  fetchData = (enableCallback) => {
    fetch('http://api.mcloud.test.lsboot.cn/mcSolution/getMcSolution', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain,   */*',
        'Accept-Language': 'zh',
        'Content-Type': 'application/json;charset=UTF-8',
      },
      body: JSON.stringify({
        solutionId: "1425d589c0c445b7aef9e7af02405bf3"
      })
    }).then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        enableCallback();
        return responseJson.movies;
      })
      .catch((error) => {
        enableCallback();
        console.error(error);
      });
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> we2112t N1at11i22ve！ </Text>
        <Text style={styles.inst} > welc12TTTT </Text>
        <Button text=" 发送" onPress={this.fetchData} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
    justifyContent: "center",
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  inst: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  }
})

