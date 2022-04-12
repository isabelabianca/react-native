import React from 'react'
import { View, Image, ImageBackground, Button } from 'react-native'

import img from './assets/1062.jpg'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      resizeMode:'cover'
    }
  }

  render() {
    return(
      <View style={{marginTop: 20}}>
        <Image
          resizeMode={this.state.resizeMode} 
          source={{uri: "https://picsum.photos/id/1025/100/200.jpg"}}
          style={{alignSelf: 'center', width: 200, height: 200}}
        />
        <Image
          source={img}
          style={{alignSelf: 'center', width: 300, height:200}}  
        />
        <View style={{marginTop: 20, paddingHorizontal:10}}>
          <Button 
            title="Cover"
            onPress={_=> this.setState({resizeMode:'cover'})}
          />
          <Button 
            title="Contain"
            onPress={_=> this.setState({resizeMode:'contain'})}
          />
          <Button 
            title="Stretch"
            onPress={_=> this.setState({resizeMode:'stretch'})}
          />
          <Button 
            title="Repeat"
            onPress={_=> this.setState({resizeMode:'repeat'})}
          />
          <Button 
            title="Center"
            onPress={_=> this.setState({resizeMode:'center'})}
          />
        </View>

      </View>
    )
  }
}