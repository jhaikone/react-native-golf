import React, { Component } from 'react';
import { Text, View } from 'react-native';

class CourseSelectionPage extends Component {

    static navigationOptions = {
        title: 'Valitse pelattava kenttä',
    };

    render() {
        return (
            <View>
                <Text>Choose your course</Text>
            </View>
        );
    }
}


export default CourseSelectionPage;