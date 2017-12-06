import React, { Component } from "react";
import Expo from "expo";
import { StyleSheet } from "react-native";

import { Container, Header, Input, Item, Button, Content, List, ListItem, Text, Body, Left, Right, Icon, Fab } from 'native-base';

import { connect } from "react-redux";

import { actions as courseSelectionActions } from '../reducers/courses_reducer';

import screenNames from '../../../screen-names';
import variables from '../../../styles/variables';
import icons from '../../../styles/icons';

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

class CourseSelectionContainer extends Component {

  componentDidMount() {
    this.props.onFetch();
  }

  render() {
    if (!this.props.filteredCourses && !this.props.filteredCourses.length) {
      return <Expo.AppLoading/>
    }
    console.log('render selection kissa')
    const { filteredCourses, onFilterCourses, navigation } = this.props;
    return (
      <Container style={styles.dashboardContainer}>

        <SearchBar onChangeText={(value) => this.props.onFilterCourses(value)} />

        <List
          dataArray={filteredCourses}
          renderRow={(item ) => {
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

const mapStateToProps = (state, ownProps) => {
  return {
    ...state.courses
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetch: () => {
      dispatch(courseSelectionActions.fetch())
    },
    onFilterCourses: (value) => {
      dispatch(courseSelectionActions.filterCourses(value))
    },
    onToggleFavorite: (item) => {
      dispatch(courseSelectionActions.toggleFavorite(item))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseSelectionContainer)

