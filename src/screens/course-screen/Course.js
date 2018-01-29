import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Container, Content, Text, Button, StyleProvider } from 'native-base';

import Label from "../../components/Label";
import RadioSelector from "./components/RadioSelector";
import Footer from "../../components/Footer"
import Toolbar from "../../components/Toolbar"

import variables from "../../styles/variables";
import screens from "../../screen-names";

export default class Course extends Component {
  
  
    setTee = (selected) => {
      if (this.props.selectedTee.value !== selected) {
        this.props.onSelectTee(selected);
      }
    }
  
    setGameMode = (selected) => {
      if (this.props.selectedGameMode.value !== selected) {
       this.props.onSelectGameMode(selected)
      }
    }
  
    goToSessionScreen = () => {
      const { onFetchHoles, navigation, tees, selectedTee} = this.props;
      const course_id = (navigation.state && navigation.state.params) ? navigation.state.params.id : null;
      const holes = onFetchHoles(course_id);
      navigation.navigate(
        screens.SESSION_SCREEN, {name: navigation.state.params.name, tee: tees.find(tee => tee.value === selectedTee)});
    }
  
    render() {
      const {gameModes, selectedGameMode, selectedTee, tees} = this.props;
      return (
        <Container>
          <Content>
          <RadioSelector options={tees} onSelect={this.setTee} selectedItem={selectedTee} label="Valitse tee" />
          <RadioSelector options={gameModes} onSelect={this.setGameMode} selectedItem={selectedGameMode} label="Valitse kierrospituus" />
        </Content>
        <Footer>
              <Toolbar>
                <Button onPress={() => this.goToSessionScreen()} >
                  <Text>Aloita kierros</Text>
                </Button>
              </Toolbar>
            </Footer>
        </Container>
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
