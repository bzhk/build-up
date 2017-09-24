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



export default class EditTask extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      name: this.props.navigation.state.params.editInfoTask,
    };
  }


  odEdit(){
    const procedureId = this.props.navigation.state.params.procedureId;
    const projectId = this.props.navigation.state.params.projectId;
    const taskId = this.props.navigation.state.params.taskId;
    const newName = this.state.name;
    this.props.navigation.state.params.editTask(procedureId, projectId, taskId, newName);
    this.props.navigation.state.params.forceRender();
    const backAction = NavigationActions.back({
      key: null,
    });
    this.props.navigation.dispatch(backAction);
    alert('Task was edited!');
  }

  static navigationOptions = {
    title: 'Edit Task\'s Info',
  };



  render() {

    return (
      <View>
        <Text>Name: </Text>
        <TextInput
          onChangeText={(text) => this.setState({name:text})}
          value={this.state.name}
          style={styles.input}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={this.odEdit.bind(this)}
          >
          <Text
            style={styles.buttonText}
            >
              Save
            </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
