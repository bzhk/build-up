import React from 'react';
import { Text, View, StyleSheet, ListView, TouchableOpacity, AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import ProcRow from './Rows/ProcRow';
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

export default class ProcInfo extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.screenProps.state.params)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(props.screenProps.state.params.rowData.procedures),
    };
  }

  componentWillReceiveProps(nextProps) {
      console.log('działa')
      const dataSource = this.state.dataSource.cloneWithRows(nextProps.screenProps.state.params.rowData);
      this.setState({dataSource});
  }

  static navigationOptions = {
    title: 'Procedures Info',
  };

  componentDidMount(){
    AsyncStorage.getItem("Procedures").then((value) => {
      if(!value){
        AsyncStorage.setItem("Procedures", JSON.stringify(Procedures));
      }
      this.setState({"Procedures": JSON.parse(value)});
    }).done();
  }

  addProcedure() {
    this.props.screenProps.state.params.addProcedure
  }

  render() {
    const {navigate} = this.props.screenProps;
    const ProceduresList  = this.state.Procedures;
    if(this.state.Procedures) {
      return (
        <View style={styles.container}>
            <ListView
              dataSource={this.state.dataSource}
              renderRow={(rowData) =>
                <ProcRow
                  procRow={rowData}
                  showTasks={() => navigate('Procedures', {rowData})}
                />
                }
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigate('ProceduresList' ,{
                 ProceduresList,
                 addProcedure: this.props.screenProps.state.params.addProcedure,
                 targetProject: this.props.screenProps.state.params.rowData,
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
