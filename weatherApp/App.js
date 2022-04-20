import React from 'react';
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Text,
  TextInput,
  ImageBackground,
} from 'react-native';

import SearchInput from './components/SearchInput';

import getImages from './utils/ImagesForWeather';
import { fetchLocationId, fetchWeather } from './utils/api'

export default class App extends React.Component {

  state = {
    loading: false,
    error: false,
    location:'',
    temperature: 0,
    weather: ''
  }

  componentDidMount() {
    this.handleUpdateLocation('São Francisco')
  }

  handleUpdateLocation = async (city) => {
    if(!city) return;

    this.setState({loading: true}, async () => {
      try {
        const locationId = await fetchLocationId(city)
        const { location, weather, temperature} = await fetchWeather(locationId)
        this.setState({
          loading: false,
          error: false,
          location,
          weather,
          temperature
        })
      } catch (e) {
        this.setState({loading: false, error: true})
      }
    })
  };
    
  renderContent() {
    const {error} = this.state
    return (
      <View>
        {error && (
          <Text style={[styles.smallText, styles.textStyle]}>
            Could not load weather, please try a different city.
          </Text>
        )}

        {!error && this.renderInfo()}
        <SearchInput 
          placeholder="Search any city" 
          onSubmit={this.handleUpdateLocation}
        />
      </View>
    )
  }

  renderInfo() {
    const { location, weather, temperature } = this.state;
    return (
      <View>
        <Text style={[styles.largeText, styles.textStyle]}>{location}</Text>
        <Text style={[styles.smallText, styles.textStyle]}>
          {weather}
        </Text>
        <Text style={[styles.largeText, styles.textStyle]}>
          {`${Math.round(temperature)}°`}
        </Text>
      </View>
    )
  }

  render() {
    const { loading, error, location, weather, temperature } = this.state;
    return (
      <View style={styles.container}>
        <ImageBackground
          source={getImages(weather)}
          style={styles.imageContainer}
          imageStyle={styles.image}>
          <View style={styles.detailsContainer}>
            <ActivityIndicator animating={loading} color='white' size='large'/>
            {!loading && this.renderContent()}
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
