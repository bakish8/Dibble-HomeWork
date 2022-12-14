import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useSelector } from 'react-redux'
import { selectStarSliceItems } from '../../Features/StarSlice'

const Header = ({ navigation }) => {
  let items = useSelector(selectStarSliceItems)
  const sendMe = () => {
    console.log(`navigation`)
  }

  return (
    <View>
      <View style={styles.mainHeader}>
        <View style={styles.textLogo1}>
          {' '}
          <Text style={styles.textLogo}>my App</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.ttt} onPress={() => sendMe()}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://i.ibb.co/4pbyrJ6/Five-pointed-star.png',
          }}
        />
        <Text style={styles.Notification}>{items.length}</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  ttt: { position: 'fixed' },
  tinyLogo: {
    position: 'fixed',
    marginLeft: '15',
    width: 70,
    height: 70,
  },
  Notification: {
    marginTop: 10,
    marginLeft: 35,
    position: 'fixed',
    backgroundColor: 'red',
    width: '30px',
    height: '30px',
    borderRadius: '20px',
    color: 'white',
    textAlign: 'center',
    fontSize: '20px',
  },
  mainHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100px',
    borderBottomWidth: '5px',
    borderBottomColor: 'black',
    borderBottomEndRadius: '45px',
    borderBottomStartRadius: '45px',
    justifyContent: 'center',
  },
  textLogo1: {
    alignSelf: 'center',
    marginTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textLogo: {
    alignSelf: 'center',
    fontSize: '25px',
    fontWeight: 'bold',
    marginBottom: '25px',
  },
})
export default Header
