import * as React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { ScrollView, TouchableOpacity } from 'react-native-web'
import { useDispatch, useSelector } from 'react-redux'
import {
  addToBasket,
  renmoveFromBasket,
  selectStarSliceItems,
} from '../../Features/StarSlice'

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
export default function SahredPosts({ navigation }) {
  let items = useSelector(selectStarSliceItems)
  const dispatch = useDispatch()
  const [data, setData] = React.useState([])
  const [text, settext] = React.useState('')
  const [stars, setstars] = React.useState([])
  const onPress = (id, title, body) => {
    navigation.navigate('EditPost', { id, title, body })
  }
  const GoComments = (id, title, body) => {
    navigation.navigate('Comments', { id, title })
  }

  const StarChange = (id, title, body) => {
    dispatch(renmoveFromBasket(id))
  }

  return (
    <>
      <View style={styles.screen}>
        <View style={styles.body}>
          <ScrollView>
            {items ? (
              items.map((post) => (
                <>
                  <View key={post.id} style={styles.task}>
                    <TouchableOpacity
                      onPress={() => onPress(post.id, post.title, post.body)}
                    >
                      <View>
                        <Text>
                          {post.id}. {post.title}
                        </Text>

                        <Ionicons
                          onPress={() =>
                            StarChange(post.id, post.title, post.body)
                          }
                          style={styles.tinyLogo}
                          name={'star'}
                          size='50px'
                          color='black'
                        ></Ionicons>
                      </View>
                    </TouchableOpacity>
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
