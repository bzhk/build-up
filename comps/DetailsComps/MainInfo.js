import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    flexDirection: 'column',
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  button:{
    backgroundColor: '#e74c3c',
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

export default class MainInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  removeProjectPerm() {
    this.props.screenProps.state.params.removeProject(this.props.screenProps.state.params.rowData);
    
    alert('Project was removed!');
  }

  static navigationOptions = {
    title: 'Main Info',
  };

  render() {
    const info = this.props.screenProps.state.params.rowData.info;
    return (
      <View style={styles.container}>
        <Text>
          {info.name + "\n"}
          {info.place + "\n"}
          {info.startDate + " - " + info.endDate }
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={this.removeProjectPerm.bind(this)}
          >
          <Text style={styles.buttonText}>
            Remove Project
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

MainInfo.propTypes = {
  screenProps: PropTypes.shape({
    state: PropTypes.shape({
      params: PropTypes.shape({
        rowData: PropTypes.shape({
          info: PropTypes.shape({
            name: PropTypes.string.isRequired,
            place: PropTypes.string.isRequired,
            startDate: PropTypes.string.isRequired,
            endDate: PropTypes.string.isRequired,
          }).isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}
