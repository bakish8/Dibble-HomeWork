import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useSelector } from 'react-redux'
import { selectStarSliceItems } from '../../Features/StarSlice'

const Header = ({ navigation }) => {
  let items = useSelector(selectStarSliceItems)

  return (
    <View style={styles.mainHeader}>
      <Text style={styles.Notification}>{items.length}</Text>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://i.ibb.co/4pbyrJ6/Five-pointed-star.png',
        }}
      />
      <View style={styles.textLogo1}>
        <Text style={styles.textLogo}>my App</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  Notification: {
    marginLeft: 35,
    marginTop: '10px',
    position: 'absulute',
    backgroundColor: 'red',
    width: '30px',
    height: '30px',
    borderRadius: '20px',
    color: 'white',
    textAlign: 'center',
    fontSize: '20px',
  },
  mainHeader: {
    height: '170px',
    borderBottomWidth: '5px',
    borderBottomColor: 'black',
    borderBottomEndRadius: '45px',
    borderBottomStartRadius: '45px',
  },
  textLogo1: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLogo: {
    fontSize: '25px',
    fontWeight: 'bold',
    marginBottom: '25px',
  },
  tinyLogo: {
    marginLeft: '15',
    width: 70,
    height: 70,
  },
})
export default Header
