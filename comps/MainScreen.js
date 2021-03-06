import React from 'react';
import { StyleSheet, Text, View, AsyncStorage, Alert } from 'react-native';
import {Projects} from '../data/ExampleProjects';
import {Procedures} from '../data/Procedures';
import ProjectsList from './ProjectsList';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }

  }



  componentDidMount(){

    AsyncStorage.getItem("BuildUP").then((value) => {
      if(!value){
        console.log(value)
        AsyncStorage.setItem("BuildUP", JSON.stringify(Projects));
                      this.setState({"BuildUP": Projects});
      } else {
        this.setState({"BuildUP": JSON.parse(value)});
      }

    }).done();


    AsyncStorage.getItem("Procedures").then((value) => {
      if(!value){
        console.log(value)
        AsyncStorage.setItem("Procedures", JSON.stringify(Procedures));
        this.setState({"Procedures": Procedures});
      } else {
        this.setState({"Procedures": JSON.parse(value)});
      }
    }).done();

  }

  saveAsyncData( name ) {
    const obj = {}
    this.setState(
      obj[name] = this.state[name]
    );
    AsyncStorage.setItem(name, JSON.stringify(this.state[name]));
  }

  addNewProject(project) {
    this.state.BuildUP.push( {info:project,procedures:[],issues:[]} );
    this.saveAsyncData('BuildUP');
  }

  removeProject(project) {
    this.state.BuildUP.find((elem, index) => {
      if(elem.info.id == project.info.id){
        return this.state.BuildUP.splice(index,1)
      }
    });
    this.saveAsyncData('BuildUP');
  }

  removeProcedureLib( procedureId ) {
    this.state.Procedures.find((elem, index) => {
      if(elem.idProc == procedureId){
        return this.state.Procedures.splice(index, 1);
      }
    });
    this.saveAsyncData('Procedures');
  }

  addProcedureLib( newProcedure ) {
    this.state.Procedures.push(newProcedure);
    this.saveAsyncData('Procedures');
  }

  editProcedureLib( newName, id ) {
    this.state.Procedures.find((elem) => {
      if(elem.idProc == id){
        return elem.name = newName;
      }
    });
    this.saveAsyncData('Procedures');
  }

  editTaskLib(procedureId, taskId, newName) {
    this.state.Procedures.find((elem) => {
      if(elem.idProc == procedureId){
        elem.tasks.find((taskElem) => {
          if(taskElem.idTask == taskId){
            return taskElem.name = newName;
          }
        });
      }
    });
    this.saveAsyncData('Procedures');
  }

  removeTaskLib(procedureId, taskId) {
    this.state.Procedures.find((elem) => {
      if(elem.idProc == procedureId){
        elem.tasks.find((taskElem, taskIndex) => {
          if(taskElem.idTask == taskId){
            return elem.tasks.splice(taskIndex, 1);
          }
        });
      }
    });
    this.saveAsyncData('Procedures');
  }

  addTaskLib(name, procedId, idTask) {
    const newTask = {
      idTask: idTask,
      name: name,
      done: false,
    };
    this.state.Procedures.find((elem) => {
      if(elem.idProc == procedId){
        elem.tasks.push(newTask);
      }
    });
    this.saveAsyncData('Procedures');
  }

  removeProcedure(procId, project) {
    this.state.BuildUP.find((elem, index) => {
      if(elem.info.id == project.info.id){
        elem.procedures.find((proces, procIndex) => {
          if(proces.newId == procId){
            return this.state.BuildUP[index].procedures.splice(procIndex,1);
          }
        });
      }
    });
    this.saveAsyncData('BuildUP');
  }

  removeTask(procedureId, projectId, taskId) {
    this.state.BuildUP.find((elem) => {
      if(elem.info.id == projectId){
        elem.procedures.find((proceElem) => {
          if(proceElem.newId && proceElem.newId == procedureId){
            proceElem.tasks.find((taskElem, taskIndex) => {
              if(taskElem.idTask == taskId){
                 proceElem.tasks.splice(taskIndex, 1);
                 return true;
              }
            });
          }
        });
      }
    });
    this.saveAsyncData('BuildUP');
  }

  doneTask(procedureId, projectId, taskId) {
    this.state.BuildUP.find((elem, index) => {
      if(elem.info.id == projectId){
        elem.procedures.find((proceElem, proceIndex) => {
          if(proceElem.newId == procedureId){
            proceElem.tasks.find((taskElem, taskIndex) => {
              if(taskElem.idTask == taskId){
                taskElem.done=!taskElem.done;
              }
            })
          }
        })
      }
    })
    this.saveAsyncData('BuildUP');
  }

  editTask(procedureId, projectId, taskId, newName) {
    this.state.BuildUP.find((elem, index) => {
      if(elem.info.id == projectId){
        elem.procedures.find((proceElem, proceIndex) => {
          if(proceElem.newId == procedureId){
            proceElem.tasks.find((taskElem, taskIndex) => {
              if(taskElem.idTask == taskId){
                return taskElem.name = newName;
              }
            })
          }
        })
      }
    })
    this.saveAsyncData('BuildUP');
  }

  addProcedure(index, proc) {

    this.state.BuildUP.find((elem) => {
      if(elem.info.id == index){
        elem.procedures.push(proc);
      }
    });
  }

  addNewTask(name, projectId, procedureId, idTask) {
    this.state.BuildUP.find((elem) => {
      if(elem.info.id == projectId){
        elem.procedures.find((procedureElem) => {
          if(procedureElem.newId == procedureId){
            const newTask = {
              name: name,
              done: false,
              idTask: idTask,
            }
            procedureElem.tasks.push(newTask)
          }
        })
      }
    })
    this.saveAsyncData('BuildUP');
  }

  editInfoProject(info, index) {
    this.state.BuildUP.find((elem) => {
      if(elem.info.id == index){
        elem.info.name = info.name;
        elem.info.place = info.place;
        elem.info.startDate = info.startDate;
        elem.info.endDate = info.endDate;
      }
    });
    this.saveAsyncData('BuildUP');
  }

  removeIssue(projectId, issueId) {
    this.state.BuildUP.find((elem) => {
      if(elem.info.id == projectId){
        elem.issues.find((taskElem, taskIndex) => {
          if(taskElem.idIssue = issueId){
            return elem.issues.splice(taskIndex, 1);
          }
        })
      }
    })
    this.saveAsyncData('BuildUP');
  }

  doneIssue(projectId, issueId) {
    this.state.BuildUP.find((elem) => {
      if(elem.info.id == projectId){
        elem.issues.find((taskElem, taskIndex) => {
          if(taskElem.idIssue == issueId){
            return taskElem.solved?taskElem.solved=false:taskElem.solved=true;
          }
        })
      }
    })
    this.saveAsyncData('BuildUP');
  }

  addNewIssue(projectId, issue){
    this.state.BuildUP.find((elem) => {
      if(elem.info.id == projectId){
        elem.issues.push(issue)
      }
    });
  }


  static navigationOptions = {
    title: 'buildUP',
  };

  render() {
    const {navigate} = this.props.navigation;
    if(this.state.BuildUP && this.state.Procedures){
      return (
        <View style={styles.container}>
            <ProjectsList
              navigation={this.props.navigation}
              projects={this.state.BuildUP}
              removeProject={this.removeProject.bind(this)}
              removeProcedure={this.removeProcedure.bind(this)}
              removeTask={this.removeTask.bind(this)}
              doneTask={this.doneTask.bind(this)}
              editTask={this.editTask.bind(this)}
              editInfoProject={this.editInfoProject.bind(this)}
              addNewTask={this.addNewTask.bind(this)}
              addProcedure={this.addProcedure.bind(this)}

              procedures={this.state.Procedures}
              removeIssue={this.removeIssue.bind(this)}
              doneIssue={this.doneIssue.bind(this)}
              addNewIssue={this.addNewIssue.bind(this)}
              addNewProject={() => navigate( 'AddNewProject' ,
                {
                  addNewProject: this.addNewProject.bind(this),
                  id: this.state.BuildUP.length>0?this.state.BuildUP[this.state.BuildUP.length-1].info.id+1:1,
                }
              )}
              showLib={() => navigate('LibraryList' ,
              {
                procedures: this.state.Procedures,
                removeProcedureLib: this.removeProcedureLib.bind(this),
                addProcedureLib: this.addProcedureLib.bind(this),
                editProcedureLib: this.editProcedureLib.bind(this),
                editTaskLib: this.editTaskLib.bind(this),
                removeTaskLib: this.removeTaskLib.bind(this),
                addTaskLib: this.addTaskLib.bind(this),
              })}
              />
          </View>
      );
    }
    return <Text>Loading...</Text>
  }
}
