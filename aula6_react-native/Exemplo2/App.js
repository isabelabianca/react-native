import React, { useState } from "react";
import {
  Button, 
  StyleSheet, 
  View, 
  TextInput, 
  StatusBar 
} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      nome: ""
    }
  }
  cliqueBotao = _ => {
    const {nome} = this.state
    if (!nome) {
      alert('Informe um nome!')
    }
    else {
      alert(`Olá, ${nome}!`)
    }

  }
  render() {
    return(
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={nome=> this.setState({nome})}
        />
      <StatusBar />
      <Button
        title="Clique-me"
        onPress={this.cliqueBotao}/>
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  container: {
    padding: 8
  },
  input: {
    borderWidth: 0.5,
    paddingHorizontal: 5,
    fontSize: 16,
    marginBottom: 20
  }
})