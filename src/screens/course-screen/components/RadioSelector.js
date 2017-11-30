import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Container, Card, CardItem, Body, Content, ListItem, Text, Radio, Right, StyleProvider } from 'native-base';

import getTheme from '../../../../native-base-theme/components';
import platform from '../../../../native-base-theme/variables/platform';


import { connect } from "react-redux";

import Label from "../../../components/Label";

import variables from "../../../styles/variables";
import { makeDirectoryAsync } from "expo/src/FileSystem";

export default class RadioSelector extends Component {

    render() {
        const { onSelect, selectedItem, options, label } = this.props;
        return (      
                <Card>
                    <View style={styles.cardHeader}>
                        <CardItem header>
                            <Label text={label}></Label>
                        </CardItem>
                    </View>
                    <CardItem>
                        <Content>
                            {options.map((tee) => {
                                return (
                                    <ListItem key={tee.value} style={styles.listItem} onPress={() => onSelect(tee.value)} >
                                        <Text style={{ color: tee.value === selectedItem ? variables.primary : "#000" }}>{tee.label}</Text>
                                        <Right style={styles.rightItem}>
                                            <Radio style={styles.radio} onPress={() => onSelect(tee.value)} selected={tee.value === selectedItem} />
                                        </Right>
                                    </ListItem>
                                )
                            })
                            }
                        </Content>
                    </CardItem>
                </Card>
        )
    }
}


const styles = StyleSheet.create({
    listItem: {
    },
    rightItem: {
        flex: 1,
        alignItems: "flex-end"
    },
    radio: {
        flex: 1,
        alignItems: "flex-end",
    },
    cardHeader: {
        flex: 1,
        borderBottomWidth: 1,
        borderColor: variables.border
    }
});