import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
      Projects
    };
  }

  static navigationOptions = {
    title: 'buildUP',
  };
  
  render() {
    return (
      <View style={styles.container}>
        <ProjectsList
          projects={this.state.Projects}
          />
      </View>
    );
  }
}
