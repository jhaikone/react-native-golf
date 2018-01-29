import {AsyncStorage} from 'react-native';

import { combineReducers } from 'redux';
import types from './course-action-types';


import MOCK_COURSES from '../../../../mocks/courses.json';

function initCourses () {
  
}

function courses(state = [], action) {
  switch (action.type) {
    case types.GET_COURSES_RECEIVE: {
      return Object.assign([], state, action.courses);
    } default: {
      return state;
    }
  }
}

function filteredCourses (state = [], action) {
  switch (action.type) {
    case types.FILTER_COURSES: {
      const filtered = action.originalCourses.filter((course) => course.name.toLowerCase().indexOf(action.filterBy.toLowerCase()) > -1) || [];
      return Object.assign([], filtered);
    }
    case types.ORDER_BY_FAVORITE: {
      const filtered = (action.originalCourses || []).filter((course) => course.name.toLowerCase().indexOf(action.filterBy.toLowerCase()) > -1) || [];
      const favorites = filtered.filter((course) => course.isFavorite);
      const regulars = filtered.filter((course) => !course.isFavorite);
      return Object.assign([], favorites.concat(regulars));
    }
    default: {
      return state;
    }
  }
}

function toggleFavorite(state = {}, action) {
  switch (action.type) {
    case types.TOGGLE_FAVORITE: {

    }
  }
}

function loading (state = false, action) {
  switch (action.type) {
    case types.GET_COURSES_REQUEST: {
      return true;
    }
    default: {
      return false;
    }
  }
}

function selectCourse (state = {}, action) {
  switch (action.type) {
    case types.SELECT_COURSE: {
      return {
        ...action.course
      }
    }
    default: {
      return state;
    }
  }
}

export const actions = {
  fetch: (dispatch) => {
    return async (dispatch) => {
      dispatch({type: types.GET_COURSES_REQUEST});
      try {
        let courses = await AsyncStorage.getItem("COURSES");
        courses = JSON.parse(courses);
        dispatch({
          type: types.GET_COURSES_RECEIVE,
          courses
        });
        return dispatch({
          type: types.ORDER_BY_FAVORITE,
          filterBy: "",
          originalCourses: courses
        })
      } catch (error) {
      }
    }
  },
  filterCourses: (value) => {
    return (dispatch, getState) => {
      const state = getState();
      return dispatch({
        type: types.FILTER_COURSES,
        filterBy: value,
        originalCourses: state.courses.list
      });
    }
  },
  toggleFavorite: (item) => {
    return (dispatch, getState) => {
      const state = getState();
      const list = state.courses.filteredCourses;
      const toggledList = list.map((course) => {
         if (course.id === item.id) {
           course.isFavorite = !course.isFavorite;
         }
         return course;
       });
      dispatch({
        type: types.FILTER_COURSES,
        filterBy: "",
        originalCourses: toggledList
      });
      dispatch(actions.saveCourses())
    }
  },
  saveCourses: () => {
    return (dispatch, getState) => {
      const state = getState();
      AsyncStorage.setItem("COURSES", JSON.stringify(state.courses.list));
    }
  },
  selectCourse: (selectedCourse) => {
    return (dispatch) => {
      dispatch({
        type: types.SELECT_COURSE,
        course: selectedCourse
      });
    }
  }
}

export default combineReducers({
  filteredCourses,
  loading,
  list: courses,
  selected: selectCourse
});

