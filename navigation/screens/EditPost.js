import { useRoute } from '@react-navigation/native'
import * as React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native'
import Footer from '../../src/Components/Footer'

export default function EditPost({ navigation }) {
  const styles = StyleSheet.create({
    task: {
      backgroundColor: 'white',
      padding: 10,
      margin: 10,
      borderRadius: 12,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },

    tinyLogo: {
      alignSelf: 'flex-end',
    },
    screen: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    body: {
      flex: 8,
      width: '100%',
      backgroundColor: '#14141410',
    },
    task: {
      backgroundColor: 'white',
      padding: 10,
      margin: 10,
      borderRadius: 12,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
    input: {
      height: '150px',

      backgroundColor: 'white',
      padding: 15,
      paddingTop: 10,
      paddingBottom: 10,
      margin: 10,
      marginTop: 10,
      borderRadius: 12,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#141414',
      padding: 15,
      paddingTop: 10,
      paddingBottom: 10,
      margin: 10,
      marginBottom: 30,
      borderRadius: 12,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
    buttonText: {
      fontSize: '30px',
      color: 'white',
      fontWeight: '900',
    },
    headerP: {
      marginTop: '25px',
      width: '70%',
      color: 'orange',
      fontWeight: 'bold',
      alignSelf: 'center',
    },
  })
  const [text, settext] = React.useState('')
  let {
    params: { id, title, body },
  } = useRoute()
  React.useLayoutEffect(() => {
    if (body) {
      console.log(body)
      settext(body)
    }
  }, [])

  return (
    <View style={styles.screen}>
      <View style={styles.body}>
        <Text
          style={{
            fontSize: 26,
            fontWeight: 'bold',
            justifyContent: 'center',
            alignSelf: 'center',
            marginTop: '15px',
          }}
        >
          Edit Post
        </Text>
        <Text style={styles.headerP}> {title}</Text>{' '}
        <TextInput onChangeText={settext} value={text} style={styles.input} />
        <TouchableOpacity style={styles.button}>
          {' '}
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
      </View>{' '}
      <Footer navigation={navigation} />
    </View>
  )
}
