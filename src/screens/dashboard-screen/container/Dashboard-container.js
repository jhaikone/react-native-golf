import React, { Component } from "react";
import { connect } from "react-redux";

import { View, FlatList, Text, StyleSheet } from "react-native";
import { List, ListItem, Divider } from 'react-native-elements';
import FAB from 'react-native-fab';

import UserProfile from "../components/UserProfile";
import RoundInformation from "../components/RoundInformation";

import helper from '../../../utils/helpers';
import variables from "../../../styles/variables.js";

import screens from "../../../screen-names";

import Icon from 'react-native-vector-icons/MaterialIcons';

class DashboardContainer extends Component {

    render() {
        const { rounds, user, navigation } = this.props;
        console.log('this', this)
        return (
            <View style={styles.dashboardContainer}>
                <View style={styles.container}>
                    <UserProfile user={user} />
                </View>
                <View style={styles.informationContainer}>
                    <RoundInformation rounds={rounds}/>
                </View>
                <View style={styles.listContainer}>
                    <List marginTop={0}>
                        <FlatList
                            data={rounds.map((round) => {
                              return {...round, key: round.id}
                            })}
                            renderItem={({ item }) => {
                                return (
                                    <ListItem
                                        title={item.name}
                                        subtitle={helper.formatDate(item.startedAt)}
                                        rightTitle={item.score.toString()}
                                        rightTitleStyle={{ color: variables.primary }}
                                    />
                                )
                            }}
                        />
                    </List>
                    <FAB 
                        buttonColor={variables.primary} 
                        iconTextColor="#FFFFFF" 
                        onClickAction={
                            () => navigation.navigate(screens.COURSE_SELECTION_SCREEN)
                        } 
                        visible={true} 
                        iconTextComponent={<Icon name="golf-course"></Icon>} />
                </View>
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
    },
    listContainer: {
        flex: 1
    },
    fab: {
    }
});


const mapStateToProps = (state, ownProps) => {
    console.log('Dashboard contaioner state', state);
    return {
        rounds: state.rounds,
        user: state.user
    };
};

export default connect(mapStateToProps)(DashboardContainer)

