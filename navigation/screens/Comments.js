import * as React from 'react'
import { View, Text } from 'react-native'
import Footer from '../../src/Components/Footer'

export default function Comments({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text
        onPress={() => navigation.navigate('Home')}
        style={{ fontSize: 26, fontWeight: 'bold' }}
      >
        Comments Screen
      </Text>
      <Footer navigation={navigation} />
    </View>
  )
}
