import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#F7F7F7',
    padding: 20,
  },
});

export default class NewProcRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  addNewProcedure() {
    this.props.addProcedure(this.props.targetProject.info.id, this.props.procRow);
    alert('Procedure was added!');
    const backAction = NavigationActions.back({
      key: null
    });
    this.props.navigation.dispatch(backAction);

  }

  render(){
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={this.addNewProcedure.bind(this)}
        >
        <Text>
          {this.props.procRow.name}
        </Text>
      </TouchableOpacity>
    );
  }
}
