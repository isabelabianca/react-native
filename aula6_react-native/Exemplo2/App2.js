import React from 'react'
import {
  Button,
  View,
  StatusBar
} from 'react-native'

export default class App extends React.component {
  render() {
    return(
      <View style={{padding:16}}>
        <Button
          color="#A00"
          title="Clique-me"
          onPress={_=> alert("Clicou no botão :)")}
        />
        <StatusBar />
      </View>
    )
  }
}
