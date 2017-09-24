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
    backgroundColor: '#e74c3c',
    borderWidth: 1,
    borderColor: '#F7F7F7',
    padding: 10,
    fontSize: 20,
    fontWeight: '300',
  },
  btnProcs: {
    backgroundColor: '#e74c3c',
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
  textBC:{
    backgroundColor: '#1abc9c',
  },
});

export default class IssueRow extends React.Component {
  constructor(props) {
    super(props);
  }

  removeIssuePerm() {
    const projectId = this.props.projectInfo.info.id;
    const issueId = this.props.issueRow.idIssue;
    this.props.removeIssue(projectId, issueId);
    this.props.forceRender();
    alert('Issue was removed!');
  }

  fixedIssue() {
    const projectId = this.props.projectInfo.info.id;
    const issueId = this.props.issueRow.idIssue;
    this.props.doneIssue(projectId, issueId);
    this.props.forceRender();
  }

  render(){

    return (
      <View style={styles.container}>
        <Text style={[styles.label, this.props.issueRow.solved && styles.textBC]}>
            {this.props.issueRow.name}
        </Text>
        <View style={styles.flexRow}>
          <TouchableOpacity
            style={[styles.btnProcs, this.props.issueRow.solved && styles.textBC]}
            onPress={this.fixedIssue.bind(this)}
            >
            <Text style={styles.txtProcs}>
              {this.props.issueRow.solved?'Fixed':'Not Fixed'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnRemove}
            onPress={this.removeIssuePerm.bind(this)}
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
