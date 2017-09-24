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




export default class AddNewIssue extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.navigation.state.params)
    const issuesArr = props.navigation.state.params.projectInfo.issues.sort((a,b) => {
      return a.idIssue - b.idIssue;
    });
    const idIssue = issuesArr.length>0?issuesArr[issuesArr.length-1].idIssue +1 : 1;

    this.state = {
        idIssue: idIssue,
        name: '',
        solved: false,
    };
  }

  onAddPressed() {
    const projectId = this.props.navigation.state.params.projectInfo.info.id;
    this.props.navigation.state.params.addNewIssue(projectId, this.state);
    this.props.navigation.state.params.forceRender();
    const backAction = NavigationActions.back({
      key: null
    });
    this.props.navigation.dispatch(backAction);
    alert('Issue was added!');
  }

  static navigationOptions = {
    title: 'Add New Issue',
  };

  render() {

    return (
      <View>
        <TextInput
          onChangeText={(text) => this.setState({name: text})}
          style={styles.input}
          placeholder={'Name'}
        />
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
