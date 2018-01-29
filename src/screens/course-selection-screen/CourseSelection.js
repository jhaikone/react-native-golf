

import React, { Component } from "react";
import Expo from "expo";
import { StyleSheet, FlatList, ScrollView } from "react-native";

import screenNames from './../../screen-names';
import variables from './../../styles/variables';
import icons from './../../styles/icons';

import ListItem from "../../components/ListItem";

import _ from "lodash";

import { Container, Header, Input, Item, Button, Content, List, Text, Body, Left, Right, Icon, Fab } from 'native-base';

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

  constructor (props) {
    super(props);
    this.delayedSearch = _.debounce(this.props.onFilterCourses, 300)
  }

  render() {
    if (!this.props.filteredCourses && !this.props.filteredCourses.length) {
      return <Expo.AppLoading />
    }
    const { filteredCourses, onFilterCourses, navigation } = this.props;
    return (
      <Container style={styles.dashboardContainer}>

        <SearchBar onChangeText={(value) => this.delayedSearch(value)} />
      <ScrollView>
        <FlatList
          data={filteredCourses}
          initialNumToRender={10}

          renderItem={({item}) => {
            const iconStyles = {
              color: item.isFavorite ? '#ffcc33' : '#b3b3b3',
              fontSize: 27,
              padding: 10,
              width: 45
            };
            return (
              <ListItem
                onPress={() => {
                  this.props.onSelectCourse(item);
                  navigation.navigate(screenNames.COURSE_SCREEN, item);
                }}
                onLongPress={
                  () => {
                    this.props.onToggleFavorite(item)
                  }
                }
              >
                <Left style={styles.leftItem}>
                  <Icon style={iconStyles}
                    active={true}
                    color={'blue'}
                    name={item.isFavorite ? icons.star : icons.starOutline}
                    onPress={
                      () => {
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
        </FlatList>
        </ScrollView>
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
  rightItem: {
    position: "absolute",
    alignContent: "center"
  }
});



