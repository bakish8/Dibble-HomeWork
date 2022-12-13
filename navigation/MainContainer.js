import * as React from 'react'
import { NavigationContainer, StackRouter } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Provider } from 'react-redux'
import { store } from '../store'
import Header from '../src/Components/Header'
// Screens
import Feed from './screens/Feed'
import SahredPosts from './screens/SahredPosts'
import EditPost from './screens/EditPost'
import Comments from './screens/Comments'

//Screen names
const feedName = 'Feed'
const SharedPostName = 'Shared Post'

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

function MyTabs() {
  return (
    <>
      <Tab.Navigator
        initialRouteName={feedName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName
            let rn = route.name

            if (rn === feedName) {
              iconName = focused ? 'home' : 'home-outline'
            } else if (rn === SharedPostName) {
              iconName = focused ? 'list' : 'list-outline'
            }
            return <Ionicons name={iconName} size={size} color={color} />
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70 },
        }}
      >
        <Tab.Screen
          options={{
            headerShown: false,
          }}
          name={feedName}
          component={Feed}
        />
        <Tab.Screen
          options={{
            headerShown: false,
          }}
          name={SharedPostName}
          component={SahredPosts}
        />
      </Tab.Navigator>
    </>
  )
}

function MainContainer() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Header />
        <Stack.Navigator>
          <Stack.Screen
            name={feedName}
            component={MyTabs}
            options={{ header: () => null }}
          />
          <Stack.Screen
            name='EditPost'
            component={EditPost}
            options={{ header: () => null }}
          />
          <Stack.Screen
            name='Comments'
            component={Comments}
            options={{ header: () => null }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
export default MainContainer
