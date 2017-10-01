import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, DatePickerAndroid } from 'react-native';
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



export default class EditProjectInfo extends React.Component {
  constructor(props) {
    super(props);

    let startDateHandler ='';
    let endDateHandler ='';

    this.state = {
      name: this.props.navigation.state.params.info.name,
      place: this.props.navigation.state.params.info.place,
      startDate: this.props.navigation.state.params.info.startDate,
      endDate: this.props.navigation.state.params.info.endDate,
    };
  }

  startDate() {
    let startDateBef = this.props.navigation.state.params.info.startDate.split('.');
    let startDateHandler = [
      startDateBef[1],
      startDateBef[0],
      startDateBef[2]
    ];

    const {action, day, month, year } = DatePickerAndroid.open({
      date: new Date(this.startDateHandler?this.startDateHandler.split('.'):startDateHandler)
    }).then((val)=> {
      this.startDateHandler = `${val.month+1}.${val.day}.${val.year}`;
      if(this.endDateHandler && new Date(this.startDateHandler) > new Date(this.endDateHandler)){
        alert('Start date can\'t be after end date.\nPick again.');
      } else {
        val.day ? this.setState({startDate: `${val.day}.${val.month+1}.${val.year}`}) : this.setState({startDate: ``});
      }
    });
  }

  endDate() {
    let endDateBef = this.props.navigation.state.params.info.endDate.split('.');
    let endDateHandler = [
      endDateBef[1],
      endDateBef[0],
      endDateBef[2]
     ];

    const {action, year, month, day} = DatePickerAndroid.open({
      date: new Date(this.endDateHandler?this.endDateHandler.split('.'):endDateHandler)
    }).then((val)=> {
      this.endDateHandler = `${val.month+1}.${val.day}.${val.year}`;
      if(this.startDateHandler && new Date(this.startDateHandler) > new Date(this.endDateHandler)){
        alert('End date can\'t be before start date.\nPick again.');
      } else {
        val.day ? this.setState({endDate: `${val.day}.${val.month+1}.${val.year}`}) : this.setState({endDate: ``});
      }
    });
  }

  odEdit(){
    const id = this.props.navigation.state.params.info.id;
    console.log(this.state)
    console.log(id)
    this.props.navigation.state.params.editInfoProject(this.state, id);
    this.props.navigation.state.params.forceRender();
    const backAction = NavigationActions.back({
      key: null,
    });
    this.props.navigation.dispatch(backAction);
    alert('Project was edited!');
  }

  static navigationOptions = {
    title: 'Edit Project\'s Info',
  };



  render() {

    return (
      <View>
        <Text>Title: </Text>
        <TextInput
          onChangeText={(text) => this.setState({name:text})}
          value={this.state.name}
          style={styles.input}
        />
        <Text>Place: </Text>
        <TextInput
          onChangeText={(text) => this.setState({place:text})}
          value={this.state.place}
          style={styles.input}
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
