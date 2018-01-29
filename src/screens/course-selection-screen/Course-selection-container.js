import React, { Component } from "react";
import { connect } from "react-redux";
import { actions as courseSelectionActions } from './reducers/courses_reducer';

import CourseSelection from "./CourseSelection";

const CourseSelectionContainer = (props) => ( <CourseSelection {...props}/>)

const mapStateToProps = (state, ownProps) => {
  return {
    ...state.courses,
    navigation: ownProps.navigation
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFilterCourses: (value) => {
      dispatch(courseSelectionActions.filterCourses(value))
    },
    onToggleFavorite: (item) => {
      dispatch(courseSelectionActions.toggleFavorite(item))
    },
    onSelectCourse: selectedCourse => {
      dispatch(courseSelectionActions.selectCourse(selectedCourse))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseSelectionContainer)
