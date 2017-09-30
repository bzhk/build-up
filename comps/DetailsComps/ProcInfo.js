import React from 'react';
import { Text, View, StyleSheet, ListView, TouchableOpacity, AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import ProcRow from './Rows/ProcRow';


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

export default class ProcInfo extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(props.screenProps.state.params.rowData.procedures),
    };
  }

  forceRender() {
    const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(this.props.screenProps.state.params.rowData.procedures);
    this.setState({dataSource});
  }



  static navigationOptions = {
    title: 'Procedures Info',
  };

  render() {
    const {navigate} = this.props.screenProps;
    const ProceduresList  = this.props.screenProps.state.params.procedures;
    const removeTask = this.props.screenProps.state.params.removeTask;
    const doneTask = this.props.screenProps.state.params.doneTask;
    const editTask = this.props.screenProps.state.params.editTask;
    const addNewTask = this.props.screenProps.state.params.addNewTask;
    if(ProceduresList) {
      return (
        <View style={styles.container}>
            <ListView
              enableEmptySections={true}
              dataSource={this.state.dataSource}
              renderRow={(rowData) =>
                <ProcRow
                  procRow={rowData}
                  showTasks={() => navigate('Procedures',
                    {
                      rowData,
                      removeTask,
                      doneTask,
                      editTask,
                      addNewTask,
                      forceRenderMainList: this.forceRender.bind(this),
                    })}
                  forceRender={this.forceRender.bind(this)}
                  targetProject={this.props.screenProps.state.params.rowData}
                  removeProcedure={this.props.screenProps.state.params.removeProcedure}
                />
                }
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigate('ProceduresList' ,{

                 ProceduresList,
                 addProcedure: this.props.screenProps.state.params.addProcedure,
                 targetProject: this.props.screenProps.state.params.rowData,
                 forceRender: this.forceRender.bind(this),
               })}
              >
              <Text style={styles.buttonText}>
                Add new procedure
              </Text>
            </TouchableOpacity>
        </View>
      );
    }
    return (
      <View>
        <Text>
          Loading...
        </Text>
      </View>
    )
  }
}

ProcInfo.propTypes = {
  screenProps: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        rowData: PropTypes.shape({
          procedures: PropTypes.arrayOf(
            PropTypes.shape({
              name: PropTypes.string.isRequired,
              done: PropTypes.bool.isRequired,
              tasks: PropTypes.arrayOf(
                PropTypes.shape({
                  name: PropTypes.string.isRequired,
                  done: PropTypes.bool.isRequired,
                })
              ),
            }),
          ).isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}
