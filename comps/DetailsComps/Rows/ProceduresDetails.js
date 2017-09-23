import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ListView } from 'react-native';
import PropTypes from 'prop-types';

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
  headerContainer: {
    padding: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#F7F7F7',
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
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
  flexRow: {
    flex: 2,
    flexDirection: 'row',
  },
  listButton: {
    backgroundColor: '#e74c3c',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    flex: 3,
  },
  btnEdit:{
    backgroundColor: '#3498db',
  },
  btnDone:{
    backgroundColor: '#2ecc71',
  },
  listButtonText:{
    color: '#fafafa',
    fontSize: 10,
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

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.rowData.name}`,
  });
  render(){
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <ListView
          style={styles.listView}
          key={this.state.projects}
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            <View style={styles.container}>
              <View  style={styles.headerContainer}>
                <Text style={styles.text}>{rowData.name}</Text>
              </View>
              <View style={styles.flexRow}>
                <TouchableOpacity style={[styles.listButton, styles.btnDone]}>
                  <Text style={styles.listButtonText}>
                    Done
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.listButton, styles.btnEdit]}>
                  <Text style={styles.listButtonText}>
                    Edit
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.listButton}>
                  <Text style={styles.listButtonText}>
                    Remove
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          }
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigate('AddNewTask')}
          >
          <Text style={styles.buttonText}>
            Add new task
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
