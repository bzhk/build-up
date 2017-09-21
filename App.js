import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Constants } from 'expo';
import { StackNavigator } from 'react-navigation';
import  MainScreen  from './comps/MainScreen';

const Navigation = StackNavigator({
  Home: { screen: MainScreen },
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Navigation style={{ width: Dimensions.get('window').width }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#ecf0f1',
  },
});
