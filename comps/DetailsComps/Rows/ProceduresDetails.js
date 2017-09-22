import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';


export default class ProceduresDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.rowData.name}`,
  });
  render(){

    return (
      <View>
        <Text>
            asdf
        </Text>
      </View>
    );
  }
}
