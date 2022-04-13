import React from 'react'
import { StatusBar, Image, ScrollView, View } from 'react-native'

const image = {uri: 'https://picsum.photos/id/1003/200/300'}

export default class App extends React.Component {
  render () {
    return (
      <ScrollView
        onScrollBeginDrag={_=> alert('Iniciou rolagem')}>

        <Image source={image} style={{height: 300, width: 300}}/>
        <View style={{margin:10}} />
        <Image source={image} style={{height: 300, width: 300}}/>
        <View style={{margin:10}} />
        <Image source={image} style={{height: 300, width: 300}}/>
        <View style={{margin:10}} />
        <Image source={image} style={{height: 300, width: 300}}/>
        <View style={{margin:10}} />

        <StatusBar />
      </ScrollView>
    )
  }
}
