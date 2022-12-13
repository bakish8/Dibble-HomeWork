import { useRoute } from '@react-navigation/native'
import axios from 'axios'
import * as React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
} from 'react-native'
import Footer from '../../src/Components/Footer'

export default function Comments({ navigation }) {
  const [data, setData] = React.useState([])
  const styles = StyleSheet.create({
    bold: {
      fontWeight: 'bold',
      color: 'orange',
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
      backgroundColor: 'white',
      padding: 15,
      paddingTop: 10,
      paddingBottom: 10,
      margin: 10,
      marginTop: 30,
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
    comments: {
      width: '100px',
      alignItems: 'center',
      backgroundColor: 'black',
      padding: 15,
      paddingTop: 10,
      paddingBottom: 10,
      margin: 10,
      marginBottom: 30,
      borderRadius: 12,
      shadowColor: '#000',
      shadowOffset: {
        width: '5px',
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
    buttonText: {
      color: 'white',
      fontWeight: '900',
    },
  })
  const {
    params: { id, title },
  } = useRoute()
  const baseUrl = 'https://jsonplaceholder.typicode.com'

  const getComments = () => {
    console.log('getting comments')
    axios({
      method: 'get',
      url: `${baseUrl}/posts/${id}/comments`,
    }).then((response) => {
      console.log(response.data)
      let Arrayyy = []
      for (let i = 0; i < 5; i++) {
        Arrayyy.push(response.data[i])
      }
      setData(Arrayyy)
    })
  }

  React.useLayoutEffect(() => {
    getComments()
  }, [])
  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text
        onPress={() => navigation.navigate('Home')}
        style={{ fontSize: 26, fontWeight: 'bold' }}
      >
        Comments Screen
      </Text>
      <ScrollView>
        {data ? (
          data.map((comment) => (
            <>
              <View style={styles.task} key={comment.id}>
                <View>
                  <Text style={styles.bold}>{comment.name}</Text>
                  <Text>{comment.body}</Text>
                </View>
              </View>{' '}
            </>
          ))
        ) : (
          <></>
        )}
      </ScrollView>
      <Footer navigation={navigation} />
    </View>
  )
}
