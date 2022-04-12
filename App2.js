import React from 'react'
import { View, ImageBackground, Text } from 'react-native'

const image = {uri: 'https://picsum.photos/id/53/100/200.jpg'}

export default class App extends React.Component {

  render() {
    return(
      <View style={{marginTop: 20, flex: 1}}>
        <ImageBackground 
          source={image}
          resizeMode='cover'
          style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{ color: 'purple', fontSize: 36, textAlign: 'center'}}>
          Hello, React Native :)
        </Text>
        </ImageBackground>
      </View>
    )
  }
}
