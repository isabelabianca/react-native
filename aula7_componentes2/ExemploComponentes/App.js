import React from 'react'
import { Text, TouchableOpacity, TouchableHighlight, View } from 'react-native'

export default class App extends React.Component {

render() {
  return(
  <View style={{padding: 16}}>
    <TouchableOpacity
      // onPress={_=> alert('Pressionado')}
      activeOpacity={0.3}>
      <Text style={{ fontSize: 30}}>
        Um texto Clicável
      </Text>
      <Text>
         Outro texto
      </Text> 
    </TouchableOpacity>

    <TouchableHighlight
      activeOpacity={0.3}
      underlayColor='green'>
      <Text style={{ fontSize: 30}}>
        Testando TouchableHighlight
      </Text> 
    </TouchableHighlight>


  </View>
  )
}
}
