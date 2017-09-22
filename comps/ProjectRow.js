import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    flexDirection: 'column',
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  label: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#F7F7F7',
    padding: 20,
    fontSize: 20,
    fontWeight: '300',
  },
  btnDetails: {
    padding: 5,
    backgroundColor: '#35B989',
    flex: 2,
    alignItems: 'center',
  },
  txtDetails:{
    color: '#fafafa',
  },
});

export default class ProjectRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){

    return (
      <View style={styles.container}>
        <Text style={styles.label}>
            {this.props.project.info.name + " " + this.props.project.info.place}
            {this.props.project.info.startDate + " / " + this.props.project.info.endDate}
          </Text>
          <TouchableOpacity
            style={styles.btnDetails}
            onPress={this.props.projectDetails}
            >
            <Text style={styles.txtDetails}>
              Details
            </Text>
          </TouchableOpacity>
      </View>
    );
  }
}

ProjectRow.propTypes = {
  project: PropTypes.shape({
    info: PropTypes.shape({
      name: PropTypes.string.isRequired,
      place: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
