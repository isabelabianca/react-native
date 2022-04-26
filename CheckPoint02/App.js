import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableHighlight
} from 'react-native';

import equilatero from './assets/equilatero.png'
import escaleno from './assets/escaleno.png'
import isoceles from './assets/isoceles.png'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      image: '',
      a: '',
      b: '',
      c: '',
      text:''
    }
  }

  classificaTriangulo = () => {
    const { image, a, b, c, text } = this.state;

    if (!a || !b || !c) return;

    if (a==b && a==c && b==c) {
      this.setState({
        image: equilatero,
        text: 'É um triângulo Equilátero'})
    }
    else if (a==b && b!=c || a==c && c!=b || b==c && c!=a) {
       this.setState({
         image: isoceles,
         text: 'É um triângulo Isóceles'})
    }
    else {
      this.setState({
        image: escaleno,
        text: 'É um triângulo Escaleno'})
    }
  }

  render() {
    const { image, a, b, c, text } = this.state;
    return (
      <View style={styles.container}>
        <TextInput 
          style={styles.inputText} 
          placeholder="A"
          value={a}
          onChangeText={(a) => this.setState({ a })}
        />
        <TextInput 
          style={styles.inputText} 
          placeholder="B"
          value={b}
          onChangeText={(b) => this.setState({ b })}
        />
        <TextInput 
          style={styles.inputText} 
          placeholder="C"
          value={c}
          onChangeText={(c) => this.setState({ c })}
        />
        <View style={styles.separator}/>
        <TouchableHighlight
          style={styles.button}
          activeOpacity={0.3}
          onPress={this.classificaTriangulo}>
          <Text style={styles.buttonText}>
            Classificar 
          </Text> 
        </TouchableHighlight>
        <View style={styles.separator}/>
        <Text style={styles.text}> {text} </Text>
        <Image 
          source={image}
          style={styles.imagem}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  inputText: {
    borderWidth: 1,
    borderColor: '#A9A9A9',
    marginBottom: 10,
    padding:2
  },
  button: {
    padding:5,
    backgroundColor:'#4682b4',
    borderRadius: 5, 
    width: 100,
    alignSelf:'center'
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    textAlign:'center'
  },
  imagem: {
    alignSelf: 'center', 
    width: 200, 
    height: 200,
    resizeMode: 'contain'
  },
  text: {
    fontSize: 18,
    textAlign:'center',
    fontWeight: 'bold'
  },
  separator: {
    margin: 15
  }
});
