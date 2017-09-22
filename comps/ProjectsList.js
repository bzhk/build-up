import React from 'react';
import { StyleSheet, Text, View, ListView, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import ProjectRow from './ProjectRow';

const styles = StyleSheet.create({
  container: {
    paddingTop:20,
    flex: 1,
  },
  button:{
    backgroundColor: '#4A619D',
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

export default class ProjectsList extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(props.projects),
    };
  }
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <ListView
          key={this.state.projects}
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
              <ProjectRow
                project={rowData}
                projectDetails={() => navigate('Details', {rowData})}
              />
            }
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            Add new project
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

ProjectsList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired,
}
