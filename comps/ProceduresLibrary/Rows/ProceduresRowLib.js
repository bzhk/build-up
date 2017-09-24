import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ListView } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  listView:{
    marginTop: 20,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  doneContainer:{
    backgroundColor: '#2ecc71',
  },
  headerContainer: {
    padding: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#F7F7F7',
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
  },
  button:{
    backgroundColor: '#34495e',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  buttonText:{
    color: '#fafafa',
    fontSize: 20,
    fontWeight: '600',
  },
  flexRow: {
    flex: 2,
    flexDirection: 'row',
  },
  listButton: {
    backgroundColor: '#e74c3c',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    flex: 3,
  },
  btnEdit:{
    backgroundColor: '#3498db',
  },
  btnDone:{
    backgroundColor: '#2ecc71',
  },
  listButtonText:{
    color: '#fafafa',
    fontSize: 10,
  },
});


export default class ProceduresRowLib extends React.Component {
  constructor(props) {
    super(props);
  }



  removeTaskPressed() {
    const procedureId = this.props.procedure.newId;
    const projectId = this.props.procedure.projectId;
    const taskId = this.props.task.idTask;

    this.props.removeTask(procedureId, projectId, taskId);
    this.props.forceRender();
    this.props.forceRenderMainList();
    alert('Task was removed!!');
  }


  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <View  style={styles.headerContainer}>
          <Text style={styles.text}>
            {this.props.task.name}
          </Text>
        </View>
        <View style={styles.flexRow}>
          <TouchableOpacity
            style={[styles.listButton, styles.btnEdit]}
            onPress={() => navigate('EditTaskLib',
            {
              editInfoTask:this.props.task.name,
              procedureId: this.props.procedure.idProc,
              taskId: this.props.task.idTask,
              editTaskLib: this.props.editTaskLib,
              forceRender: this.props.forceRender,
            })}
            >
            <Text style={styles.listButtonText}>
              Edit
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.listButton}
            onPress={this.removeTaskPressed.bind(this)}
            >
            <Text style={styles.listButtonText}>
              Remove
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
