import React, { Component } from 'react';
import { StyleSheet } from "react-native";
import { ListItem } from 'native-base';

export default class StyledListItem extends Component {
  
  render () {
    return (
      <ListItem style={styles.listItem} {...this.props}>
        {this.props.children}
      </ListItem>
    )
  }
}

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    marginLeft: 0,
    marginRight: 0,
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 8,
    paddingBottom: 8,
    justifyContent: "center",
  },
});