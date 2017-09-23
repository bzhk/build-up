import React from 'react';
import { Text, View, StyleSheet, ListView, TouchableOpacity } from 'react-native';
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
  static navigationOptions = {
    title: 'Procedures Info',
  };
  render() {
    const {navigate} = this.props.screenProps;
    return (
      <View style={styles.container}>
          <ListView
            key={this.state.projects}
            dataSource={this.state.dataSource}
            renderRow={(rowData) =>
              <ProcRow
                procRow={rowData}
                showTasks={() => navigate('Procedures', {rowData})}
              />
              }
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              Add new procedure
            </Text>
          </TouchableOpacity>
      </View>
    );
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
