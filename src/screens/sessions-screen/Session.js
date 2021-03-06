import React, { PureComponent } from "react";
import Expo from "expo";
import { View, Image, StyleSheet } from "react-native";

import { Container, Content, Text, Button } from 'native-base';

import { connect } from "react-redux";

import SessionHeader from "./components/SessionHeader";
import SessionContent from "./components/SessionContent";

import screenNames from '../../screen-names';
import variables from '../../styles/variables';

import Swiper from 'react-native-swiper';

export default class Session extends PureComponent {

  render() {
    const { holes, currentIndex, navigation } = this.props;
    const isLastHole = !!(currentIndex === holes.length - 1);
    return (
      <Swiper
        showsPagination={!isLastHole}
        loop={false}
        bounces={true}
        style={{ flex: 1 }}
        onIndexChanged={(index) => {
          this.props.onIndexChanged(index);
        }}
        activeDotColor={variables.primary}
      >
        {holes.map((hole) => {
          return (
            <View key={hole.order} style={{ flex: 1 }}>
              <SessionHeader content={hole} />
              <SessionContent
                onUpdateScore={this.props.onUpdateScore}
                content={hole}
              />
              {isLastHole &&
                <Button style={styles.button} full onPress={() => {
                  navigation.navigate(screenNames.SESSION_FINISHED_SCREEN);
                }}>
                  <Text>Näytä yhteenveto kierroksesta</Text>
                </Button>
              }
            </View>
          )
        })}
      </Swiper>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: variables.primary,
    position: "absolute",
    bottom: 1,
    left: 0,
    right: 0
  }
});
