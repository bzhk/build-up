import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  flexRow: {
    flex: 2,
    flexDirection: 'row',
  },
  label: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#F7F7F7',
    padding: 10,
    fontSize: 20,
    fontWeight: '300',
  },
  btnProcs: {
    backgroundColor: '#1abc9c',
    flex: 2,
    alignItems: 'center',
    padding: 10,
  },
  btnRemove: {
    backgroundColor: '#e74c3c',
    flex: 2,
    alignItems: 'center',
    padding: 10,
  },
  txtProcs:{
    color: '#fafafa',
  },
});

export default class ProcRow extends React.Component {
  constructor(props) {
    super(props);
  }
  removeProcedurePerm() {
    console.log(this.props.procRow)
    this.props.removeProcedure(this.props.procRow.newId, this.props.targetProject);
    this.props.forceRender();
    alert('Procedure was removed!');
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.label}>
            {this.props.procRow.name}
        </Text>
        <Text style={styles.label}>
          Done: 2/3
        </Text>
        <View style={styles.flexRow}>
          <TouchableOpacity
            style={styles.btnProcs}
            onPress={this.props.showTasks}
            >
            <Text style={styles.txtProcs}>
              Tasks
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnRemove}
            onPress={this.removeProcedurePerm.bind(this)}
            >
            <Text style={styles.txtProcs}>
              Remove
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

ProcRow.propTypes = {
  showTasks: PropTypes.func.isRequired,
}
