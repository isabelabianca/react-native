import React from 'react';
import {StatusBar, 
        StyleSheet, 
        View, 
        ActivityIndicator 
      } from 'react-native';

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <ActivityIndicator color='blue' size='large' />
        <ActivityIndicator color='red' size='small' />
        <ActivityIndicator color='green' size={100} animating={true} />
        <StatusBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
});
