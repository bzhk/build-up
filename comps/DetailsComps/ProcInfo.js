import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    flexDirection: 'column',
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
  },
});

export default class ProcInfo extends React.Component {
  constructor(props){
    super(props);
    console.log(props);
  }
  static navigationOptions = {
    title: 'Procedures Info',
  };
  render() {
    const procedures = this.props.screenProps.procedures;
    return (
      <View style={styles.container}>
        <Text>
          {procedures[0].name}
        </Text>
      </View>
    );
  }
}
