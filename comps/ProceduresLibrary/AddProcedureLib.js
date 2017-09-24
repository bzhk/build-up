import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
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
});

export default class AddProcedureLib extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    const proceduresArr = props.navigation.state.params.proceduresList.sort((a,b)=>{
      return a.idProc - b.idProc
    });
    this.state = {
      name: '',
      idTask: proceduresArr.length>0?proceduresArr[proceduresArr.length-1].idProc +1 : 1,
      done: false,
      tasks: [],
    }
  }

  addNewProcedure() {
    this.props.navigation.state.params.addProcedureLib(this.state);
    this.props.navigation.state.params.forceRender();
    alert('Procedure was added!\n Open procedure and add tasks.');
    const backAction = NavigationActions.back({
      key: null
    });
    this.props.navigation.dispatch(backAction);
  }

  static navigationOptions = {
    title: 'New Procedure',
  };

  render(){
    return (
    <View>
      <TextInput
        onChangeText={(text) => this.setState({name: text})}
        style={styles.input}
        placeholder={'Name'}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={this.addNewProcedure.bind(this)}
        >
        <Text style={styles.buttonText}>
            Add
        </Text>
      </TouchableOpacity>
    </View>
    );
  }
}
