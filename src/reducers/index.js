import { combineReducers } from 'redux';
import rounds from '../screens/dashboard-screen/reducers/rounds_reducer';
import user from '../screens/dashboard-screen/reducers/user_reducer';
import courses from '../screens/course-selection-screen/reducers/courses_reducer';
import course from '../screens/course-screen/reducers/course-reducer';

export default combineReducers( 
    {
        rounds,
        user,
        courses,
        course
    }
);
