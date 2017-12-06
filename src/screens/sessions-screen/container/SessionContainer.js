import React, { Component } from "react";
import Expo from "expo";
import { View, Image, StyleSheet } from "react-native";

import { Container, Content, Text } from 'native-base';

import { connect } from "react-redux";

import SessionHeader from "../components/SessionHeader";

// import { actions as sessionActions } from '../reducers/courses_reducer';

import screenNames from '../../../screen-names';
import variables from '../../../styles/variables';

import Swiper from 'react-native-swiper';

const HoleContent = ({ content }) => {
  return (
    <View style={{ flex: 4 }}>
      <Text>hcp {content.hcp}</Text>
    </View>
  )
}


const styles = StyleSheet.create({

})

class SessionContainer extends Component {

  render() {
    const { holes } = this.props;
    console.log('sessionc container', this.props);
    return (
      <Swiper style={{ flex: 1 }}>
        {holes.map((hole) => {
          return (
            <View key={hole.order} style={{ flex: 1 }}>
              <SessionHeader content={hole} />
              <HoleContent content={hole} />
            </View>

          )
        })}
      </Swiper>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log('state session containerissa', state);
  console.log('ownProps session containerissa', ownProps);
  return {
    ...state.course
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onFetch: () => {
//       dispatch(SessionActions.fetch())
//     }
//   }
// }

export default connect(mapStateToProps)(SessionContainer)

