import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';

const styles = StyleSheet.create({
  addButton:{
    height: 60,
    borderColor: '#00e57a',
    borderWidth: 2,
    backgroundColor: '#00e57a',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText:{
    color: '#fafafa',
    fontSize: 20,
    fontWeight: '600',
  },
  input: {
    height: 50,
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 20,
  },
})



export default class AddNewTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  onAddPressed() {
    const taskArr = this.props.navigation.state.params.procedure.tasks.sort((a,b) => {
      return a.idTask - b.idTask;
    });
    const idTask = taskArr.length>0?taskArr[taskArr.length-1].idTask+1 : 1;
    const projectId = this.props.navigation.state.params.procedure.projectId;
    const procedId = this.props.navigation.state.params.procedure.newId;
    const name = this.state.text;
    this.props.navigation.state.params.addNewTask(name, projectId, procedId, idTask);
    this.props.navigation.state.params.forceRender();
    this.props.navigation.state.params.forceRenderMainList();
    const backAction = NavigationActions.back({
      key: null
    });
    this.props.navigation.dispatch(backAction);
    alert('Task was added!');
  }

  static navigationOptions = {
    title: 'Add New Task',
  };



  render() {

    return (
      <View>
        <TextInput
          onChangeText={(text) => this.setState({text})}
          style={styles.input}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={this.onAddPressed.bind(this)}
          >
          <Text
            style={styles.buttonText}
            >
              Add
            </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
