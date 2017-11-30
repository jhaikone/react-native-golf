import React, { Component } from "react";
import Expo from "expo";
import { connect } from "react-redux";

import { View, ScrollView, StyleSheet } from "react-native";
import { Container, Button, Content, List, ListItem, Text, Body, Left, Right, Icon as BaseIcon, Fab } from 'native-base';


import UserProfile from "../components/UserProfile";
import RoundInformation from "../components/RoundInformation";

import helper from '../../../utils/helpers';
import variables from "../../../styles/variables.js";

import screens from "../../../screen-names";

import Icon from 'react-native-vector-icons/MaterialIcons';

class DashboardContainer extends Component {

    constructor(props) {
        super(props);
        //TODO: move this out of here
        this.state = {
            isReady: false
          };
    }


    async componentWillMount() {
        await Expo.Font.loadAsync({
          Roboto: require("native-base/Fonts/Roboto.ttf"),
          Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
          Ionicons: require("@expo/vector-icons/fonts/Ionicons.ttf")
        });
    
        this.setState({ isReady: true });
      }
    

    render() {
        if (!this.state.isReady) {
            return <Expo.AppLoading/>
        }
        const { rounds, user, navigation } = this.props;
        const dataArray = rounds.map((round) => {
            return { ...round, key: round.id }
        });
        return (
            <View style={styles.dashboardContainer}>
                <View style={styles.container}>
                    <UserProfile user={user} />
                </View>
                <View style={styles.informationContainer}>
                    <RoundInformation rounds={rounds} />
                </View>
                {/* <Container style={styles.listContainer}> */}
                    <List
                    dataArray={dataArray}
                    renderRow={(item) => {
                          return (
                            <ListItem style={styles.listItem}>
                                <Body style={styles.leftItem}>
                                    <Text>{item.name}</Text>
                                    <Text>{helper.formatDate(item.startedAt)}</Text>
                                </Body>

                                <Body style={styles.middleItem}>
                                    <Text style={{ color: variables.primary }}>{item.score.toString()}</Text>

                                </Body>

                                <Right style={styles.rightItem}>
                                    <BaseIcon name="md-arrow-forward"></BaseIcon>
                                </Right>
                            </ListItem>
                        )
                    } }
                    >
                        
                    </List>
     
                    <Fab
                        onPress={
                            () => navigation.navigate(screens.COURSE_SELECTION_SCREEN)
                        }
                        style={styles.fab}
                    >
                        <Icon name="golf-course"></Icon>
                    </Fab>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    dashboardContainer: {
        flex: 1,
        flexDirection: "column"
    },
    container: {
        height: 190
    },
    informationContainer: {
        height: 70,
        borderBottomWidth: 1,
        borderColor: variables.border
    },
    listContainer: {
        padding: 0,
        margin: 0,
        marginBottom: 100
    },
    listItem: {
        marginLeft: 0,
        marginRight: 0,
        paddingRight: 0,
        paddingLeft: 0,
    },
    leftItem: {
        alignItems: 'center',
    },
    middleItem: {
        alignItems: 'center',
    },
    rightItem: {
        position: "absolute",
        right: 10,
        alignContent: "center"
    },
    fab: {
        backgroundColor: variables.primary,
    }
});


const mapStateToProps = (state, ownProps) => {
    return {
        rounds: state.rounds,
        user: state.user
    };
};

export default connect(mapStateToProps)(DashboardContainer)

