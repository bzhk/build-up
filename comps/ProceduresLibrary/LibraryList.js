import React from 'react';
import { Text, View, StyleSheet, ListView, TouchableOpacity, AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import ProcLibRow from './Rows/ProcLibRow';
import {Procedures} from '../../data/Procedures';

const styles = StyleSheet.create({
  container: {
    padding: 5,
    flex: 1,
    flexDirection: 'column',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  button:{
    backgroundColor: '#16a085',
    margin: 20,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  buttonText:{
    color: '#fafafa',
    fontSize: 20,
    fontWeight: '600',
  },
});

export default class LibraryList extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(props.navigation.state.params.procedures),
    };
  }

  forceRender() {
    const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(this.props.navigation.state.params.procedures);
    this.setState({dataSource});
  }

  static navigationOptions = {
    title: 'Procedures\' library',
  };

  render() {
    const {navigate} = this.props.navigation;
    const ProceduresList  = this.props.navigation.state.params.procedures;
    const removeProcedureLib = this.props.navigation.state.params.removeProcedureLib;
    const addProcedureLib = this.props.navigation.state.params.addProcedureLib;

      return (
        <View style={styles.container}>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={(rowData) =>
                <ProcLibRow
                  procRow={rowData}
                  removeProcedureLib={this.props.navigation.state.params.removeProcedureLib}
                  editProcedureLib={() => navigate('EditProcedureLib' ,
                  {
                    editProcedureLib: this.props.navigation.state.params.editProcedureLib,
                    forceRender: this.forceRender.bind(this),
                    rowData,
                  })}
                  showTasks={() => navigate('ProcLibRow',
                    {
                      
                      forceRender: this.forceRender.bind(this),
                    })}
                  forceRender={this.forceRender.bind(this)}
                />
                }
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigate('AddProcedureLib',
              {
                addProcedureLib: this.props.navigation.state.params.addProcedureLib,
                forceRender: this.forceRender.bind(this),
                proceduresList: this.props.navigation.state.params.procedures,
              })}
              >
              <Text style={styles.buttonText}>
                Add new procedure
              </Text>
            </TouchableOpacity>
        </View>
      );
  }
}
