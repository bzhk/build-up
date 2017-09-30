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



export default class EditProjectInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.navigation.state.params.info.name,
      place: this.props.navigation.state.params.info.place,
      startDate: this.props.navigation.state.params.info.startDate,
      endDate: this.props.navigation.state.params.info.endDate,
    };
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
        <Text>Start date: </Text>
        <TextInput
          onChangeText={(text) => this.setState({startDate:text})}
          value={this.state.startDate}
          style={styles.input}
        />
        <Text>End date: </Text>
        <TextInput
          onChangeText={(text) => this.setState({endDate:text})}
          value={this.state.endDate}
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
