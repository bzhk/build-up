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

export default class MainInfo extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
  }
  static navigationOptions = {
    title: 'Main Info',
  };
  render() {
    const info = this.props.screenProps.info;
    return (
      <View style={styles.container}>
        <Text>
          {info.name + "\n"}
          {info.place + "\n"}
          {info.startDate + " - " + info.endDate }
        </Text>
      </View>
    );
  }
}
