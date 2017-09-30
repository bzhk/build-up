import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ListView } from 'react-native';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';
import NewProcRow from './NewProcedureRow';

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



export default class ProceduresList extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {};
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(props.navigation.state.params.ProceduresList),
    };
  }



  static navigationOptions = {
    title: 'Add New Procedure',
  };


  render() {
      return (
            <ListView
              dataSource={this.state.dataSource}
              renderRow={(rowData) =>
                <NewProcRow
                  navigation={this.props.navigation}
                  procRow={rowData}
                  addProcedure={this.props.navigation.state.params.addProcedure}
                  targetProject={this.props.navigation.state.params.targetProject}

                />
                }
            />
      )
    }

}
