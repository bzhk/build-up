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

export default class IssuesInfo extends React.Component {

  static navigationOptions = {
    title: 'Issues Info',
  };
  render() {
    const issues = this.props.screenProps.issues;
    return (
      <View style={styles.container}>
        <Text>
          {issues[0].name}
        </Text>
      </View>
    );
  }
}
