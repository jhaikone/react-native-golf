import React, { Component } from "react";
import { View, FlatList } from "react-native";

import { List, ListItem, Divider, SearchBar } from 'react-native-elements';

import { connect } from "react-redux";

class CourseSelectionContainer extends Component {

  constructor (props) {
    super(props);
    this.state = {
      filteredCourses: this.props.courses
    }
  }
  

  filterList = (value) => {
    const filteredCourses = this.props.courses.filter((course) => course.name.toLowerCase().indexOf(value) > -1) || [];
    this.setState({filteredCourses})
  }    

  render() {
    return (
      <View>
        <SearchBar
          onChangeText={this.filterList}
          placeholder='Etsi kenttää...'
        />
        <List marginTop={0}>
          <FlatList
            data={this.state.filteredCourses.map((course) => {
              return { ...course, key: course.id }
            })}
            renderItem={({ item }) => {
              return (
                <ListItem
                  title={item.name}
                />
              )
            }}
          />
        </List>
      </View>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log('Dashboard contaioner state', state);
  return {
    courses: state.courses
  };
};

export default connect(mapStateToProps)(CourseSelectionContainer)

