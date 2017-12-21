import { combineReducers } from 'redux';
import rounds from '../screens/dashboard-screen/reducers/rounds_reducer';
import user from '../screens/dashboard-screen/reducers/user_reducer';
import courses from '../screens/course-selection-screen/reducers/courses_reducer';
import course from '../screens/course-screen/reducers/course-reducer';
import session from "../screens/sessions-screen/reducers/session-reducer";
import sessionFinished from "../screens/session-finished-screen/reducers/session-finished-reducer";
import scorecard from "../screens/score-card-screen/reducers/score-card-reducer";

export default combineReducers( 
    {
        rounds,
        user,
        courses,
        course,
        session,
        scorecard
    }
);
