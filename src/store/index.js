import { createStore, compose, applyMiddleware } from 'redux';
import { AsyncStorage } from "react-native";
import thunk from 'redux-thunk';
import reducers from '../reducers';

import COURSES_LIST from "../../mocks/courses.json"

const STORAGE_KEYS = {
  COURSES: "@COURSES",
  ROUNDS: "@ROUNDS"
};

const courses = await AsyncStorage.getItem(STORAGE_KEYS.COURSES);

if (courses === null) {
  await AsyncStorage.setItem(STORAGE_KEYS.COURSES, JSON.stringify(COURSES_LIST));
} else {
  courses = JSON.parse(courses);
}

const rounds = await AsyncStorage.getItem(STORAGE_KEYS.ROUNDS);

if (rounds !== null) {
  rounds = JSON.parse(rounds);
}

const store = createStore(reducers, { rounds: { list: rounds ? rounds : [] }, courses: { filteredCourses: courses ? courses : [], list: courses ? courses : [] } }, compose(applyMiddleware(thunk)));

export default store;