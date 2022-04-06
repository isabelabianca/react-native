import React from 'react'
import {
  Alert, 
  View, 
  TextInput,
  Button,
  StyleSheet,
  StatusBar
} from 'react-native'

export default class App extends React.Component {
  
  constructor(props) {
    super(props)
    this.state ={
      peso: "",
      altura: ""
    }
  }

  btnCalcular = _ => {
    const {peso, altura} = this.state
    const peso1 = parseFloat(peso)
    const altura1 = parseFloat(altura)

    if (Number.isNaN(peso1)|| Number.isNaN(altura1)) {
      Alert.alert("Erro", "Preencha os campos corretamente")
      return
    }

    const imc = peso1/altura1 ** 2

    let categoria = ""

    if (imc < 18.5) {
      categoria = "Abaixo do peso"
    } 
    else if (imc < 25) {
      categoria = "Peso normal"
    } 
    else if (imc < 30) {
      categoria = "Acima do peso"
    } 
    else {
      categoria = "Obesidade"
    }

    const mensagem = `IMC = ${imc}\n${categoria}`
    Alert.alert("Índice de Massa Corporal", mensagem)

  }
  
  render() {
    return(
      <View style={styles.container}>
        <TextInput 
          style={styles.input} 
          placeholder="Peso"
          keyboardType="numeric"
          onChangeText={peso => this.setState({peso})}
        />
        {/* <View style={styles.separator}/> */}
        <TextInput 
          style={styles.input} 
          placeholder="Altura"
          keyboardType="numeric"
          onChangeText={altura => this.setState({altura})}
        />
        <Button 
        title="Calcular"
        onPress={this.btnCalcular}
        style={styles.button}/>
        <StatusBar />
      </View>
    )
  }
}

const styles = StyleSheet.create ({
  container: {
    padding: 16
  },
  input: {
    borderWidth: 1,
    borderColor:'cornflowerblue',
    paddingHorizontal: 5,
    fontSize: 16,
    marginBottom: 20,
    borderRadius: 5
  },
  button: {
    borderRadius: 5,
    backgroundColor: 'cornflowerblue'
  }
  // ,
  // separator: {
  //   marginBottom: 20
  // }
})
