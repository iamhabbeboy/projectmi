import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Homeview from './homeview';
import Seminar from './seminar';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  View
} from 'react-native';


export const Route = TabNavigator({
  Project: {
    screen: Homeview,
    navigationOptions: {
      tabBarLabel: 'Project',
      tabBarIcon: (<Icon name="home" size={15} color="#FFF" />),
    }
  },
  Seminar: {
    screen: Seminar,
    title: 'Seminar'
  }
}, {
  tabBarOptions: {
    activeTintColor: '#FFFFFF',
    labelStyle: {
      fontSize: 13,
      fontFamily:'Khand-Bold',
    },
    style: {
      backgroundColor: '#AC92EC',
    }
  }
});

export const Links = StackNavigator({
  Project: {
    screen: Route,
    navigationOptions: {
      title: 'Project Mi',
      headerLeft: (<View style={{paddingLeft: 30}}><Icon name="graduation-cap" size={18} color="#FFF" /></View>),
      headerRight: (<View style={{paddingRight: 30}}><Icon name="search" size={18} color="#FFF" /></View>),
      headerStyle: { backgroundColor: '#967ADC'},
      headerTitleStyle: { color: '#F1F1F1'}
    }
  },
});
