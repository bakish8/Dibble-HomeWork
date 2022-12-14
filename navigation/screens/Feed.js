import * as React from 'react'
import { SafeAreaView, StyleSheet, TextInput, View, Text } from 'react-native'
import axios from 'axios'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ScrollView, TouchableOpacity } from 'react-native-web'
import Footer from '../../src/Components/Footer'
import { useDispatch, useSelector } from 'react-redux'
import {
  addToBasket,
  renmoveFromBasket,
  selectStarSliceItems,
} from '../../Features/StarSlice'
import Post from '../../src/Components/Post'
const baseUrl = 'https://jsonplaceholder.typicode.com'

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
export default function Feed({ navigation }) {
  let items = useSelector(selectStarSliceItems)
  const dispatch = useDispatch()
  const [data, setData] = React.useState([])
  const [text, settext] = React.useState('')
  const [stars, setstars] = React.useState([])
  const [pressed, isPressed] = React.useState(false)
  const onPress = (id, title, body) => {
    navigation.navigate('EditPost', { id, title, body })
  }
  const GoComments = (id, title, body) => {
    navigation.navigate('Comments', { id, title })
  }
  const dispatchush = () => {
    axios({
      method: 'get',
      url: `${baseUrl}/posts`,
    }).then((response) => {
      console.log(response.data)
      let Arrayyy = []
      for (let i = 0; i < 5; i++) {
        Arrayyy.push(response.data[i])
      }
      setData(Arrayyy)
    })
  }

  const StarChange = (id, title, body) => {
    if (stars.includes(id)) {
      console.log(`include`)
      stars.pop(id)
      renmoveFromBasket
      dispatch(renmoveFromBasket(id))
    } else {
      console.log(` Not include add`)
      stars.push(id)
      dispatch(addToBasket({ id, title, body }))
    }
  }

  React.useLayoutEffect(() => {
    dispatchush()
  }, [])
  React.useEffect(() => {
    console.log(items)
  }, [items])

  return (
    <>
      <View style={styles.screen}>
        <View style={styles.body}>
          <TextInput
            onChangeText={settext}
            value={text}
            placeholder='Whats on your mind ?'
            style={styles.input}
          />
          <TouchableOpacity style={styles.button} onPress={() => dispatchush()}>
            <Text style={styles.buttonText}>Post</Text>
          </TouchableOpacity>
          <ScrollView>
            {data ? (
              data.map((post) => (
                <>
                  <View style={styles.task} key={post.id}>
                    <TouchableOpacity
                      onPress={() => onPress(post.id, post.title, post.body)}
                    >
                      <View>
                        <Text style={styles.bold}>{post.title}</Text>
                        <Text>{post.body}</Text>
                      </View>
                    </TouchableOpacity>
                    <Ionicons
                      onPress={() => StarChange(post.id, post.title, post.body)}
                      style={styles.tinyLogo}
                      name={
                        items.some((item) => item.id === post.id)
                          ? 'star'
                          : 'star-outline'
                      }
                      size='50px'
                      color='black'
                    ></Ionicons>
                  </View>{' '}
                  <TouchableOpacity
                    style={styles.comments}
                    onPress={() => GoComments(post.id, post.title, post.body)}
                  >
                    <Text style={styles.buttonText}>comments</Text>
                  </TouchableOpacity>
                </>
              ))
            ) : (
              <></>
            )}
          </ScrollView>
        </View>{' '}
      </View>{' '}
    </>
  )
}
