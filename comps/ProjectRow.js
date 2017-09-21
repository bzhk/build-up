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
    console.log(props);
    console.log("ProjectRow");
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.label}>
            {this.props.project.name + " " + this.props.project.place}
            {this.props.project.startDate + " / " + this.props.project.endDate}
          </Text>
          <TouchableOpacity style={styles.btnDetails}>
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
    name: PropTypes.string.isRequired,
    place: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
  }).isRequired,
};
