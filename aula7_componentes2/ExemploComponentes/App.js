import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

export default class App extends React.Component {

render() {
  return(
  <View style={{padding: 16}}>
    <TouchableOpacity
      onPress={_=> alert('Pressionado')}>
      <Text style={{ fontSize: 30}}>
        Um texto Clicável
      </Text>
      <Text>
         Outro texto
      </Text> 
    </TouchableOpacity>
  </View>
  )
}
}
