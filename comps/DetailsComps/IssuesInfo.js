import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ListView } from 'react-native';
import PropTypes from 'prop-types';
import IssueRow from './issues/IssueRow';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 10,
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

export default class IssuesInfo extends React.Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(props.screenProps.state.params.rowData.issues),
    };
  }

  forceRender() {
    const dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(this.props.screenProps.state.params.rowData.issues);
    this.setState({dataSource});
  }

  static navigationOptions = {
    title: 'Issues Info',
  };
  render() {
    const issues = this.props.screenProps.state.params.rowData.issues;
    return (
      <View style={styles.container}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={(rowData) =>
              <IssueRow
                procRow={rowData}
                addIssue={() => navigate('Procedures',
                  {
                    forceRenderMainList: this.forceRender.bind(this),
                  })}
                forceRender={this.forceRender.bind(this)}
              />
              }
          />
          <TouchableOpacity
            style={styles.button}
            >
            <Text style={styles.buttonText}>
              Add Issue
            </Text>
          </TouchableOpacity>
      </View>
    );
  }
}

IssuesInfo.propTypes = {
  screenProps: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        rowData: PropTypes.shape({
          issues: PropTypes.arrayOf(
            PropTypes.shape({
              name: PropTypes.string.isRequired,
              solved: PropTypes.bool.isRequired,
            }),
          ).isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}
