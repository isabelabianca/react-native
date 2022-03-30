import React from "react";
import { View, Text } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={{padding: 16}}>
        <Text style={{
          backgroundColor: 'crimson', 
          color: '#FFF', 
          fontSize: 18,
          lineHeight: 40
          }}
          numberOfLines={1}
          ellipsizeMode='middle'
          selectable={true}> 
          
          The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz, vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab quick-jived waltz. Brick quiz whangs jumpy veldt fox. Bright vixens jump; dozy fowl quack.  </Text>
      </View>
    );
  }
}