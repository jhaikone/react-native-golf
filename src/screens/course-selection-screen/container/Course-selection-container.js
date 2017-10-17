import React, { Component } from "react";
import { View, FlatList } from "react-native";

import { List, ListItem, Divider, SearchBar, Icon } from 'react-native-elements';

import { connect } from "react-redux";

import { actions as courseSelectionActions } from '../reducers/courses_reducer';

import screenNames from '../../../screen-names';

class CourseSelectionContainer extends Component {

  constructor (props) {
    super(props);
    this.state = {
      filteredCourses: this.props.filterCourses
    }
  }

  componentDidMount () {
    this.props.onFetch();
  }

  filterList = (value) => {
    this.props.onFilterCourses(value);
  }

  render() {
    const { navigation, filteredCourses } = this.props;
    console.log('props', this.props);
    return (
      <View>
        <SearchBar
          onChangeText={this.filterList}
          placeholder='Etsi kenttää...'
        />
        <List marginTop={0}>
          <FlatList
            data={filteredCourses}
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
                          this.props.onToggleFavorite(item)
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
    ...state.courses
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetch: () => {
      dispatch(courseSelectionActions.fetch())
    },
    onFilterCourses: (value) => {
      dispatch(courseSelectionActions.filterCourses(value))
    },
    onToggleFavorite: (item) => {
      dispatch(courseSelectionActions.toggleFavorite(item))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseSelectionContainer)

