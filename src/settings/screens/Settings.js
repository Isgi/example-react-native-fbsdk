import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import FBSDK from 'react-native-fbsdk';
const {
  GraphRequest,
  GraphRequestManager,
} = FBSDK;

export default class Settings extends Component {

  componentDidMount() {
    // Create a graph request asking for user information with a callback to handle the response.
    const infoRequest = new GraphRequest(
      '/me',
      null,
      this._responseInfoCallback,
    );
    // Start the graph request.
    new GraphRequestManager().addRequest(infoRequest).start();
  }

  //Create response callback.
  _responseInfoCallback(error: ?Object, result: ?Object) {
    if (error) {
      alert('Error fetching data: ' + error.toString());
    } else {
      alert('Success fetching data: ' + JSON.stringify(result));
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Settings Page
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
