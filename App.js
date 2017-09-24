import React from 'react';
import { StyleSheet, Text, View, Dimensions, AsyncStorage } from 'react-native';
import { Constants } from 'expo';
import { StackNavigator } from 'react-navigation';
import  MainScreen  from './comps/MainScreen';
import ProjectDetails from './comps/ProjectDetails';
import ProceduresDetails from './comps/DetailsComps/Rows/ProceduresDetails';
import AddNewTask from './comps/DetailsComps/add/AddNewTask';
import AddNewProject from './comps/DetailsComps/add/AddNewProject';
import ProceduresList from './comps/DetailsComps/add/ProceduresList';
import EditProjectInfo from './comps/DetailsComps/add/EditProjectInfo';
import EditTask from './comps/DetailsComps/add/EditTask';
import LibraryList from './comps/ProceduresLibrary/LibraryList';
import ProcLibRow from './comps/ProceduresLibrary/Rows/ProcLibRow';
import AddProcedureLib from './comps/ProceduresLibrary/AddProcedureLib';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#ecf0f1',
  },
});

const Navigation = StackNavigator({
  Home: { screen: MainScreen },
  Details: { screen: ProjectDetails},
  Procedures: { screen: ProceduresDetails},
  AddNewTask: { screen: AddNewTask},
  AddNewProject: { screen: AddNewProject},
  ProceduresList: { screen: ProceduresList},
  EditProjectInfo: { screen: EditProjectInfo},
  EditTask: { screen: EditTask},
  LibraryList: { screen: LibraryList},
  ProcLibRow: { screen: ProcLibRow},
  AddProcedureLib: { screen: AddProcedureLib},
});

export default class App extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Navigation style={{ width: Dimensions.get('window').width }}/>
      </View>
    );
  }
}
