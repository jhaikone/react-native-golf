import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

class DashboardScreen extends Component {

    static navigationOptions = {
        title: 'Valitse pelattava kenttä',
    };

    render() {
        return (
            <View>
                <UserImageContainer />
            </View>
        );  
    }
}


export default DashboardScreen;