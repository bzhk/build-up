import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ListView } from 'react-native';
import PropTypes from 'prop-types';
import ProceduresRowLib from './ProceduresRowLib';

const styles = StyleSheet.create({
  listView:{
    marginTop: 20,
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  button:{
    backgroundColor: '#34495e',
    margin: 10,
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


export default class ProceduresDetails extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(props.navigation.state.params.rowData.tasks),
    };
  }

  forceRender() {
    const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(this.props.navigation.state.params.rowData.tasks);
    this.setState({dataSource});
  }

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.rowData.name}`,
  });

  render(){
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <ListView
          style={styles.listView}
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            <ProceduresRowLib
              task={rowData}
              forceRender={this.forceRender.bind(this)}
              procedure={this.props.navigation.state.params.rowData}
              editTaskLib={this.props.navigation.state.params.editTaskLib}
              removeTaskLib={this.props.navigation.state.params.removeTaskLib}
              navigation={this.props.navigation}
              forceRenderMainList={this.props.navigation.state.params.forceRender}
            />
          }
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('AddNewTaskLib',
          {
            addTaskLib: this.props.navigation.state.params.addTaskLib,
            forceRender: this.forceRender.bind(this),
            procedure: this.props.navigation.state.params.rowData,
          })}
          >
          <Text style={styles.buttonText}>
            Add new task
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}
