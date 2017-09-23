import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import {Projects} from '../data/ExampleProjects';
import ProjectsList from './ProjectsList';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class MainScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }

  }

  componentDidMount(){
    AsyncStorage.setItem("BuildUP", JSON.stringify(Projects));
    AsyncStorage.getItem("BuildUP").then((value) => {
      this.setState({"BuildUP": JSON.parse(value)});
    }).done();
  }

  static navigationOptions = {
    title: 'buildUP',
  };

  render() {
    if(this.state.BuildUP){
      return (
        <View style={styles.container}>
            <ProjectsList
              navigation={this.props.navigation}
              projects={this.state.BuildUP}
              />
          </View>
      );
    }
    return <Text>Loading...</Text>
  }
}
