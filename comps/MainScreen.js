import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class MainScreen extends React.Component {
  static navigationOptions = {
    title: 'buildUP',
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>Test</Text>
        <Text>nav działa!</Text>
        <Text>Bedzie dobra apka</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
