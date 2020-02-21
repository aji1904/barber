import * as React from 'react';
import {Text, View, TextInput} from 'react-native';

export default function() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
      <TextInput placeholder="Type here to translate!" />
    </View>
  );
}
