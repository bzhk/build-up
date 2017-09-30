import React from 'react';
import { StyleSheet, Text, View, ListView, TouchableOpacity, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import ProjectRow from './ProjectRow';

const styles = StyleSheet.create({
  container: {
    paddingTop:20,
    flex: 1,
  },
  button:{
    backgroundColor: '#4A619D',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  libraryButton: {
    backgroundColor: '#9b59b6',
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
  input: {
    height: 50,
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 20,
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

  componentWillReceiveProps(nextProps) {
      const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(nextProps.projects);
      this.setState({dataSource});
  }

  onChangeFiltr(text){
    const reg = new RegExp(text,"ig");
    const filter = this.props.projects.filter((elem) => {
       if(reg.test(elem.info.name)){
         return elem
       }
    });
    const dataSource = this.state.dataSource.cloneWithRows(filter);
    this.setState({dataSource});
  }

  render() {
    const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <TextInput
          onChangeText={(text) => this.onChangeFiltr(text)}
          style={styles.input}
          placeholder={'Search for name'}
        />
        <ListView
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
              <ProjectRow
                projectsData={this.props.projects}
                project={rowData}
                projectDetails={() => navigate('Details', {
                  rowData,
                  procedures: this.props.procedures,
                  removeProject: this.props.removeProject,
                  removeProcedure: this.props.removeProcedure,
                  removeTask: this.props.removeTask,
                  removeIssue: this.props.removeIssue,
                  doneTask: this.props.doneTask,
                  doneIssue: this.props.doneIssue,
                  editTask: this.props.editTask,
                  editInfoProject: this.props.editInfoProject,
                  addNewTask: this.props.addNewTask,
                  addProcedure: this.props.addProcedure,
                  addNewIssue: this.props.addNewIssue,
                })
                }
              />
            }
        />
        <TouchableOpacity
          style={styles.button}
          onPress={this.props.addNewProject}
          >
          <Text style={styles.buttonText}>
            Add new project
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.libraryButton}
          onPress={this.props.showLib}
          >
          <Text style={styles.buttonText}>
            Procedures' library
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

ProjectsList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
    info: PropTypes.shape({
      name: PropTypes.string.isRequired,
      place: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
    }).isRequired,
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
    issues: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        solved: PropTypes.bool.isRequired,
      }),
    ).isRequired,
  }),
  ).isRequired,
}
