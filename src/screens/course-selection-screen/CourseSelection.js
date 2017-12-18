

import React, { Component } from "react";
import Expo from "expo";
import { StyleSheet } from "react-native";

import screenNames from './../../screen-names';
import variables from './../../styles/variables';
import icons from './../../styles/icons';

import { Container, Header, Input, Item, Button, Content, List, ListItem, Text, Body, Left, Right, Icon, Fab } from 'native-base';

const SearchBar = ({ onChangeText, }) => {
  return (
    <Header searchBar rounded style={{ backgroundColor: variables.theme }}>
      <Item>
        <Icon name="md-search" />
        <Input placeholder='Etsi kenttää...' onChangeText={onChangeText} />
      </Item>
      <Button transparent>
        <Text>Search</Text>
      </Button>
    </Header>
  )
}

export default class CourseSelectionContainer extends Component {

  componentDidMount() {
    this.props.onFetch();
  }

  render() {
    if (!this.props.filteredCourses && !this.props.filteredCourses.length) {
      return <Expo.AppLoading />
    }
    const { filteredCourses, onFilterCourses, navigation } = this.props;
    return (
      <Container style={styles.dashboardContainer}>

        <SearchBar onChangeText={(value) => this.props.onFilterCourses(value)} />

        <List
          dataArray={filteredCourses}
          renderRow={(item) => {
            const iconStyles = {
              color: item.isFavorite ? '#ffcc33' : '#b3b3b3',
              fontSize: 27,
              padding: 10,
              width: 45
            };
            return (
              <ListItem
                style={styles.listItem}
                onPress={() => {
                  this.props.onSelectCourse(item);
                  navigation.navigate(screenNames.COURSE_SCREEN, item);
                }}

              >
                <Left style={styles.leftItem}>
                  <Icon style={iconStyles}
                    active={true}
                    color={'blue'}
                    name={item.isFavorite ? icons.star : icons.starOutline}
                    onPress={
                      () => {
                        console.log('joawd')
                        this.props.onToggleFavorite(item)
                      }
                    }
                  >
                  </Icon>
                </Left>
                <Body style={styles.middleItem}>
                  <Text>{item.name}</Text>
                </Body>
                <Right>
                  <Icon name={icons.right}> </Icon>
                </Right>
              </ListItem>
            )
          }}
        >
        </List>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  dashboardContainer: {
  },
  listContainer: {
  },
  leftItem: {

  },
  middleItem: {
    flex: 4
  },
  listItem: {
    marginLeft: 0,
    marginRight: 0,
    paddingRight: 0,
    paddingLeft: 0,
  },
  rightItem: {
    position: "absolute",
    alignContent: "center"
  }
});



