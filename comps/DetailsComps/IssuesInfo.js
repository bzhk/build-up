import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    flexDirection: 'column',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
});

export default class IssuesInfo extends React.Component {

  static navigationOptions = {
    title: 'Issues Info',
  };
  render() {
    const issues = this.props.screenProps.state.params.rowData.issues;
    return (
      <View style={styles.container}>
        <Text>
          {}
        </Text>
      </View>
    );
  }
}

IssuesInfo.propTypes = {
  screenProps: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        rowData: PropTypes.shape({
          issues: PropTypes.arrayOf(
            PropTypes.shape({
              name: PropTypes.string.isRequired,
              solved: PropTypes.bool.isRequired,
            }),
          ).isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}
