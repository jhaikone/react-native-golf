import {AsyncStorage} from 'react-native';

import { combineReducers } from 'redux';
import types from './course-action-types';


import MOCK_COURSES from '../../../../mocks/courses.json';

function initCourses () {
  
}

function courses(state = [], action) {
  console.log('ACTION IS HAPPENING', action)
  switch (action.type) {
    case types.GET_COURSES_RECEIVE: {
      console.log('action type', action);
      return Object.assign([], state, action.courses);
    } default: {
      return state;
    }
  }
}

function filteredCourses (state = [], action) {
  switch (action.type) {
    case types.FILTER_COURSES: {
      const filtered = action.originalCourses.filter((course) => course.name.toLowerCase().indexOf(action.filterBy) > -1) || [];
      return Object.assign([], filtered);
    }
    case types.ORDER_BY_FAVORITE: {
      const filtered = action.originalCourses.filter((course) => course.name.toLowerCase().indexOf(action.filterBy) > -1) || [];
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
      console.log('getState', getState());
      console.log('value', value);
      const state = getState();
      return dispatch({
        type: types.FILTER_COURSES,
        filterBy: value,
        originalCourses: state.courses.courses
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
      const result = dispatch({
        type: types.FILTER_COURSES,
        filterBy: "",
        originalCourses: toggledList
      })
      console.log('result', result);
      AsyncStorage.setItem("COURSES", JSON.stringify(result.originalCourses));
    }
  }
}

export default combineReducers({
  filteredCourses,
  loading,
  courses
});

