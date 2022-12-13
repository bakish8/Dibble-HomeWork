import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { addToBasket, renmoveFromBasket } from '../../Features/StarSlice'

export default function Post(id, title, body, action) {
  const styles = StyleSheet.create({
    tinyLogo: {
      alignSelf: 'flex-end',
    },
  })

  return (
    <TouchableOpacity onPress={() => action(id, title, body)}>
      <Ionicons
        style={styles.tinyLogo}
        name='star-outline'
        size='50px'
        color='black'
      ></Ionicons>
    </TouchableOpacity>
  )
}
