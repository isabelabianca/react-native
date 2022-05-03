import React from 'react';
import { View, StatusBar, Text } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          backgroundColor: 'pink',
          justifyContent: 'flex-start',
          alignItems: 'flex-end',
        }}>
        <View
          style={{
            backgroundColor: 'plum',
            alignSelf: 'center'
          }}>
          <Text
            style={{
              alignSelf:'center'
            }}>Teste</Text>
        </View>
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'powderblue',
            alignSelf: 'center'
          }}
        />
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: 'lightyellow',
          }}
        />

        <StatusBar />
      </View>
    );
  }
}
