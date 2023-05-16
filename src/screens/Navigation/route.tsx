import React, { Component } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Splash from "../splashscreen/Splash";
import Welcome from "../welcomescreen/Welcome";

const Project = createStackNavigator({
  Splash: {
    screen: Splash,
    navigationOptions:
    {
      headerShown: false
    }
  },
  Welcome: {
    screen: Welcome,
    navigationOptions:
    {
      headerShown: false
    }
  },

});

export default createAppContainer(Project)
