import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

class CourseSelectionScreen extends Component {

    static navigationOptions = {
        title: 'Valitse pelattava kenttä',
    };

    render() {
        return (
            <View>
                <Text>Choose your course</Text>
                <Image source={require('../../assets/img/dashboard/test.jpg')}/> 
            </View>
        );  
    }
}


export default CourseSelectionScreen;