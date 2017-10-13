import React, { Component } from "react";
import { View, FlatList } from "react-native";

import { List, ListItem, Divider, SearchBar, Icon } from 'react-native-elements';

import { connect } from "react-redux";

import screenNames from '../../../screen-names';

class CourseSelectionContainer extends Component {

  constructor (props) {
    super(props);
    const favorites = this.props.courses.filter((course) => course.isFavorite);
    const regulars = this.props.courses.filter((course) => !course.isFavorite);
    this.state = {
      filteredCourses: favorites.concat(regulars)
    }
  }

  filterList = (value) => {
    const filteredCourses = this.props.courses.filter((course) => course.name.toLowerCase().indexOf(value) > -1) || [];
    this.setState({filteredCourses})
  }

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <SearchBar
          onChangeText={this.filterList}
          placeholder='Etsi kenttää...'
        />
        <List marginTop={0}>
          <FlatList
            data={this.state.filteredCourses}
            renderItem={({ item }) => {
              return (
                <ListItem
                  title={item.name}
                  onPress={() => {
                    console.log('this item ->', item)
                    console.log('this ->', navigation)
                    navigation.navigate(screenNames.COURSE_SCREEN);
                  }}
                  leftIcon={
                    (
                      <Icon 
                        name="star" 
                        color={item.isFavorite ? '#ffcc33' : '#b3b3b3'} 
                        size={16}
                        raised={true}
                        onPress={ () => {
                          const filteredCourses = this.state.filteredCourses.map((course) => {
                           
                            if (course.id === item.id) {
                              course.isFavorite = !course.isFavorite;
                            }
                            return course;
                          });
                          this.setState({filteredCourses})
                        }}
                      />
                    )
                  }
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
  return {
    courses: state.courses
  };
};

export default connect(mapStateToProps)(CourseSelectionContainer)

