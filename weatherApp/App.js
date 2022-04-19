import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  ImageBackground,
} from 'react-native';

import SearchInput from './components/SearchInput';
import getImages from './utils/ImagesForWeather';

export default class App extends React.Component {

  state = {
    location: 'San Francisco'
  }

  handleUpdateLocation = (city) => {
      this.setState({location: city})
  };
    
  render() {
    const {location} = this.state;
  
    return (
    
      <View style={styles.container}>
        <ImageBackground
          source={getImages('Light Cloud')}
          style={styles.imageContainer}
          imageStyle={styles.image}>
          <View style={styles.detailsContainer}>
            <Text style={[styles.largeText, styles.textStyle]}>
              {location}
            </Text>
            <Text style={[styles.smallText, styles.textStyle]}>Light Cloud</Text>
            <Text style={[styles.largeText, styles.textStyle]}>24º ♥</Text>
            <SearchInput 
              placeholder="Search any city"
              onSubmit={this.handleUpdateLocation}/>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  textStyle: {
    textAlign: 'center',
    color:'white'
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 26,
  },
});
