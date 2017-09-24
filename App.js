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
import ProceduresDetailsLib from './comps/ProceduresLibrary/Rows/ProceduresDetailsLib';
import AddProcedureLib from './comps/ProceduresLibrary/AddProcedureLib';
import EditProcedureLib from './comps/ProceduresLibrary/add/EditProcedureLib';
import EditTaskLib from './comps/ProceduresLibrary/add/EditTaskLib';
import AddNewTaskLib from './comps/ProceduresLibrary/add/AddNewTaskLib';
import AddNewIssue from './comps/DetailsComps/add/AddNewIssue';


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
  EditProcedureLib: { screen: EditProcedureLib},
  ProceduresDetailsLib: { screen: ProceduresDetailsLib},
  EditTaskLib: { screen: EditTaskLib},
  AddNewTaskLib: { screen: AddNewTaskLib},
  AddNewIssue: { screen: AddNewIssue},
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
