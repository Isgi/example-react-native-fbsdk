import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { LeftButtonMenu, RightButtonMore, LeftButtonBack } from '../custom-buttons/ButtonsNavigator';

export const parentScreen = {
  headerLeft: <LeftButtonMenu />,
  headerRight: <RightButtonMore />,
  headerTintColor: '#ffffff',
  headerStyle: {
    backgroundColor: '#0077af',
    paddingTop: StatusBar.currentHeight,
    height: Platform.OS == 'ios' ? 50 : 50 + StatusBar.currentHeight
  },
  headerTitleStyle: {
    fontWeight: 'normal',
    fontSize: 18,
    marginBottom: 3,
    marginLeft: 6
  }
}

export const childScreen = {
  headerLeft: <LeftButtonBack />,
  headerRight: <RightButtonMore />,
  headerTintColor: '#ffffff',
  headerStyle: {
    backgroundColor: '#0077af',
    paddingTop: StatusBar.currentHeight,
    height: Platform.OS == 'ios' ? 50 : 50 + StatusBar.currentHeight
  },
  headerTitleStyle: {
    fontWeight: 'normal',
    fontSize: 18,
    marginBottom: 3,
    marginLeft: 6
  }
}

export const endScreen = {
  headerLeft: <LeftButtonBack />,
  headerTintColor: '#ffffff',
  headerStyle: {
    backgroundColor: '#0077af',
    paddingTop: StatusBar.currentHeight,
    height: Platform.OS == 'ios' ? 50 : 50 + StatusBar.currentHeight
  },
  headerTitleStyle: {
    fontWeight: 'normal',
    fontSize: 18,
    marginBottom: 3,
    marginLeft: 6
  }
}

export const navigationStyle = {
  headerTintColor: '#ffffff',
  headerStyle: {
    backgroundColor: '#0077af',
    paddingTop: StatusBar.currentHeight,
    height: Platform.OS == 'ios' ? 50 : 50 + StatusBar.currentHeight
  },
  headerTitleStyle: {
    fontWeight: 'normal',
    fontSize: 18,
    marginBottom: 3,
    marginLeft: 6
  }
}
