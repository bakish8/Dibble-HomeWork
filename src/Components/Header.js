import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useSelector } from 'react-redux'
import { selectStarSliceItems } from '../../Features/StarSlice'

const Header = ({ navigation }) => {
  let items = useSelector(selectStarSliceItems)

  return (
    <View style={styles.mainHeader}>
      <Ionicons
        style={styles.tinyLogo}
        name='star-outline'
        size='50px'
        color='black'
      ></Ionicons>

      <View style={styles.textLogo1}>
        <Text style={styles.textLogo}>my App</Text>
      </View>
      <Text style={styles.Notification}>{items.length}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  Notification: {
    backgroundColor: 'red',
    width: '25px',
    height: '25px',
    borderRadius: '20px',
    color: 'white',
    textAlign: 'center',
  },
  mainHeader: {
    height: '150px',
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
  },
  tinyLogo: {
    marginLeft: '15',
    display: 'absulute',
    marginTop: '25px',
    width: 50,
    height: 50,
  },
})
export default Header
