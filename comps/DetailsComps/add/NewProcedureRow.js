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
  }


  addNewProcedure() {
    console.log(this.props.targetProject.procedures)
    const proceduresArr = this.props.targetProject.procedures;
    const newId = proceduresArr.length>0 ? proceduresArr[proceduresArr.length-1].newId +1 : 1;
    const procRow = JSON.parse(JSON.stringify(this.props.procRow));
    const newProc = {
      idProc: procRow.idProc,
      name: procRow.name,
      done: procRow.done,
      tasks: procRow.tasks,
      newId: newId,
      projectId: this.props.targetProject.info.id,
    }
    this.props.addProcedure(this.props.targetProject.info.id, newProc);
    this.props.navigation.state.params.forceRender();
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
