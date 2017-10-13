import React, { Component } from "react";
import { View, Text } from "react-native";

import { List, ListItem, Divider, SearchBar, Icon } from 'react-native-elements';

import { connect } from "react-redux";

class CourseContainer extends Component {

  constructor (props) {
    super(props);
    console.log('this props', this.props);
  }

  render() {
    return (
      <View>
        <Text>Course container says hello</Text>
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    course: state.course
  };
};

export default connect(mapStateToProps)(CourseContainer)

