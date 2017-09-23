import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { TabNavigator } from "react-navigation";
import MainInfo from './DetailsComps/MainInfo';
import ProcInfo from './DetailsComps/ProcInfo';
import IssuesInfo from './DetailsComps/IssuesInfo';

const styles = StyleSheet.create({
  container: {

  },
});

const ProjectDetailsScreen = TabNavigator({
  MainInfo: {
    screen: MainInfo,
  },
  ProcInfo: {
    screen: ProcInfo,
  },
  IssuesInfo: {
    screen: IssuesInfo,
  },
  }, {
    tabBarPosition: 'top',
    animationEnabled: true,
    backBehavior: 'initialRoute',
    lazy: true,
    tabBarOptions: {
    labelStyle: {
      fontSize: 15,
    },
    style: {
      backgroundColor: '#1abc9c',
    },
    }
  },
);

export default class ProjectDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    title: 'Project Details',
  };

  render() {
    console.log(this.props)
    return (
        <ProjectDetailsScreen
          screenProps={this.props.navigation}
        />
    );
  }
}
