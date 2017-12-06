import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Container, Content, Text, Button, StyleProvider } from 'native-base';

import getTheme from '../../../../native-base-theme/components';
import platform from '../../../../native-base-theme/variables/platform';

import { actions as courseActions } from '../reducers/course-reducer';

import { connect } from "react-redux";

import Label from "../../../components/Label";
import RadioSelector from "../components/RadioSelector";
import Footer from "../../../components/Footer"
import Toolbar from "../../../components/Toolbar"

import variables from "../../../styles/variables";
import screens from "../../../screen-names";
import { makeDirectoryAsync } from "expo/src/FileSystem";

const RoundTypes = [
  {value: 0, type: "full", label: "18 reikää"},
  {value: 1, type: "front", label: "Etuysi"},
  {value: 2, type: "back", label: "Takaysi"}
];

class CourseContainer extends Component {

  constructor(props) {
    super(props);
    const { course } = this.props;
    this.tees = [
      { value: 0, label: this.getLabel('Musta', course.black) },
      { value: 1, label: this.getLabel('Valkoinen', course.white) },
      { value: 2, label: this.getLabel('Keltainen', course.yellow) },
      { value: 3, label: this.getLabel('Sininen', course.blue) },
      { value: 4, label: this.getLabel('Punainen', course.red) },
    ];
    this.state = {
      selectedTee: this.tees.length - 1,
      selectedRoundType: 0
    };
  }

  getLabel(name, value) {
    if (value === null || value === undefined || value === '') return null;
    return `${name} - ${Math.round(Number(value) / 100)}`
  }

  //TODO: Move this to reducers
  setTee = (selected) => {
    if (this.state.activeTee !== selected) {
      this.setState({ selectedTee: selected })
    }
  }

  //TODO: Move this to reducers
  setRoundType = (selected) => {
    if (this.state.selectedRoundType !== selected) {
      this.setState({selectedRoundType: selected});
    }
  }

  goToSessionScreen = () => {
    const { onFetchHoles, navigation } = this.props;
    const course_id = (navigation.state && navigation.state.params) ? navigation.state.params.id : null;
    const holes = onFetchHoles(course_id);
    navigation.navigate(screens.SESSION_SCREEN);
  }



  render() {
    console.log('container course render', this);
    return (
      <StyleProvider style={getTheme(platform)}>
      <Container>
        <Content>
        <RadioSelector options={this.tees} onSelect={this.setTee} selectedItem={this.state.selectedTee} label="Valitse tee" />
        <RadioSelector options={RoundTypes} onSelect={this.setRoundType} selectedItem={this.state.selectedRoundType} label="Valitse kierrospituus" />
      </Content>
      <Footer>
            <Toolbar>
              <Button onPress={() => this.goToSessionScreen()} >
                <Text>Aloita kierros</Text>
              </Button>
            </Toolbar>
          </Footer>
      </Container>
      </StyleProvider>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchHoles: (id) => {
      dispatch(courseActions.fetchHoles(id))
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    course: ownProps.navigation.state.params
  };
};

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

export default connect(mapStateToProps, mapDispatchToProps)(CourseContainer)

