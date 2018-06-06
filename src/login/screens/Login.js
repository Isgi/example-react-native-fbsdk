import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import FBSDK from 'react-native-fbsdk';

const {
  LoginButton,
  AccessToken
} = FBSDK;

class Login extends Component {

  render() {
    return (
      <View style={styles.container}>
        <LoginButton
        publishPermissions={["publish_actions"]}
        onLoginFinished={
          (error, result) => {
            if (error) {
              alert("login has error: " + result.error);
            } else if (result.isCancelled) {
              alert("login is cancelled.");
            } else {
              AccessToken.getCurrentAccessToken().then(
                (data) => {
                  this.props.serviceSet('settings', {
                    user: {
                      token: data.accessToken.toString()
                    }
                  });
                  this.props.navigateToDashboard();
                }
              )
            }
          }
        }
        onLogoutFinished={() => alert("logout.")}/>
      </View>
    )
  }
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  logo: {
    height: 55,
    width: 200
  },
  title: {
    fontSize: 25,
    margin: 20,
    color: '#ffffff'
  }
})
