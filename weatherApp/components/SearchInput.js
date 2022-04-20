import React from 'react'

import { View, TextInput, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

export default class SearchInput extends React.Component {

  state = {
    text: '',
  };

  handleSubmitEditing = _ => {
    const { onSubmit } = this.props;
    const {text} = this.state
    if(!text) return;
    onSubmit(text);
    this.setState({text: ''});
  };

  render() {
    const { placeholder } = this.props
    const { text } = this.state
    return(
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          placeholderTextColor="white" 
          value={text}
          onChangeText={(text) => this.setState({text})}
          onSubmitEditing={this.handleSubmitEditing}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#666',
    color: 'white',
    height: 40,
    marginTop: 20,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  textInput: {
    flex: 1,
    color: 'white'
  },
});

SearchInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string
}

SearchInput.defaultProps = {
  placeholder: ''
}
