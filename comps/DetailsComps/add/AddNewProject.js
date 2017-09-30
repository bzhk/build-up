import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity,DatePickerAndroid } from 'react-native';
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
  btnDate:{
    backgroundColor: '#34495e',
    borderColor: '#34495e',
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




export default class AddNewProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        id: this.props.navigation.state.params.id,
        name: '',
        place: '',
        startDate: '',
        endDate: '',
    };
  }

  onAddPressed() {
    this.props.navigation.state.params.addNewProject(this.state);
    const backAction = NavigationActions.back({
      key: null
    });
    this.props.navigation.dispatch(backAction);
    alert('Project was added!');
  }

  startDate() {
    const {action, year, month, day} = DatePickerAndroid.open({
      date: new Date()
    }).then((val)=> {
      console.log(`${val.day}.${val.month}.${val.year}`)
      this.setState({startDate: `${val.day}.${val.month}.${val.year}`})
    });
  }

  endDate() {
    const {action, year, month, day} = DatePickerAndroid.open({
      date: new Date()
    }).then((val)=> {
      console.log(`${val.day}.${val.month}.${val.year}`)
      this.setState({endDate: `${val.day}.${val.month}.${val.year}`})
    });
  }

  static navigationOptions = {
    title: 'Add New Project',
  };

  render() {

    return (
      <View>
        <TextInput
          onChangeText={(text) => this.setState({name: text})}
          style={styles.input}
          placeholder={'Name of Project'}
        />
        <TextInput
          onChangeText={(text) => this.setState({place: text})}
          style={styles.input}
          placeholder={'Place of Project'}
        />
        <TouchableOpacity
          style={[styles.addButton, styles.btnDate]}
          onPress={this.startDate.bind(this)}
          >
          <Text style={styles.buttonText}>
              {this.state.startDate?'Start: ' + this.state.startDate:'Pick start date'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.addButton, styles.btnDate]}
          onPress={this.endDate.bind(this)}
          >
          <Text style={styles.buttonText}>
              {this.state.endDate?'End: ' + this.state.endDate:'Pick end date'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.addButton}
          onPress={this.onAddPressed.bind(this)}
          >
          <Text style={styles.buttonText}>
              Add
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
