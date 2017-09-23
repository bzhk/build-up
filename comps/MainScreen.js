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
    AsyncStorage.getItem("BuildUP").then((value) => {
      if(!value){
        AsyncStorage.setItem("BuildUP", JSON.stringify(Projects));
      }
      this.setState({"BuildUP": JSON.parse(value)});
    }).done();
  }

  addNewProject(project) {
    this.state.BuildUP.push( {info:project,procedures:[],issues:[]} )
    this.setState(
      { BuildUP: this.state.BuildUP }
    );
    AsyncStorage.setItem("BuildUP", JSON.stringify(this.state.BuildUP));
  }

  removeProject(project){
    this.state.BuildUP.find((elem, index) => {
      if(elem.info.id == project.info.id){
        return this.state.BuildUP.splice(index,1)
      }
    })
    this.setState(
      { BuildUP: this.state.BuildUP }
    );
    AsyncStorage.setItem("BuildUP", JSON.stringify(this.state.BuildUP));
  }

  static navigationOptions = {
    title: 'buildUP',
  };

  render() {
    const {navigate} = this.props.navigation;
    if(this.state.BuildUP){
      return (
        <View style={styles.container}>
            <ProjectsList
              navigation={this.props.navigation}
              projects={this.state.BuildUP}
              removeProject={this.removeProject.bind(this)}
              addNewProject={() => navigate( 'AddNewProject' ,
              {
                addNewProject: this.addNewProject.bind(this),
                id: this.state.BuildUP[this.state.BuildUP.length-1].info.id+1,
              }
              )}
              />
          </View>
      );
    }
    return <Text>Loading...</Text>
  }
}
