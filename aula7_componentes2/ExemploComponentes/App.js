import React from 'react'
import { Switch, View, Text, StatusBar } from 'react-native'


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isEnabled: false
    }
  }
    
render() {

  const {isEnabled} = this.state

  return(
  <View style={{padding: 16, flexDirection: 'row'}}>
    <Text style={{fontSize: 18}}>Ativar Opção</Text>
    <Switch
      value={isEnabled}
      onValueChange={_ => this.setState({isEnabled: !isEnabled})}
      thumbColor="#fada"
      trackColor={{false:'purple', true:'lightblue'}}
    />
    <StatusBar />
  </View>
  )
}
}