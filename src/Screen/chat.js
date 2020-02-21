import * as React from 'react';
import {Text, View} from 'react-native';
import {Avatar} from 'react-native-elements';

export default function() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>chat</Text>
      <Avatar
        source={{
          uri:
            'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
        }}
        showEditButton
        size="xlarge"
        rounded
        title="CR"
        onPress={() => console.log('Works!')}
        activeOpacity={0.7}
      />
    </View>
  );
}
