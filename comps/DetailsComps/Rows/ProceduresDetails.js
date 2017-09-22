import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ListView } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  listView:{
    marginTop: 20,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#F7F7F7',
  },
  text: {
    fontSize: 20,
    fontWeight: '600',
  },
});
export default class ProceduresDetails extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(props.navigation.state.params.rowData.tasks),
    };
    console.log(props.navigation.state.params.rowData.tasks)
    console.log(this.state.dataSource)
  }

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.rowData.name}`,
  });
  render(){

    return (
      <ListView
        style={styles.listView}
        dataSource={this.state.dataSource}
        renderRow={(rowData) =>
          <View style={styles.container}>
            <Text style={styles.text}>{rowData.name}</Text>
          </View>

        }
        />
    );
  }
}
