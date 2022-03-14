import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CourseListScreen from '../screens/ExploreScreen'
import TransactionScreen from '../screens/TransactionSuccessScreen'
import LoginScreen from '../screens/LoginScreen'
import IntrestSelection from '../screens/PickFavouriteScreen'
import TabNavigator from '../navigation/BottomTabNavigation'
import VideoScreen from '../screens/GoVideoScreen'
// import SignupScreen from '../screens/SignupScreen'
const Stack = createStackNavigator()

export default function Home() {
  {
    /* set Initial Route name below to ComponentAndScreenTest To Test the screens
    and components you are working on
    Also import the component/screen and put on component prop  of Stack.screen
    in with the name="ComponentAndScreenTest" which is alreay provided
*/
  }
  return (
    <Stack.Navigator
      initialRouteName="CreateAccount"
      /* set this to ComponentAndScreenTest to test a component,
    by default it is CreateAccount Screen*/
      cardShadowEnabled={false}
      animationEnabled={true}
      screenOptions={{ headerShown: false, detachPreviousScreen: true }}
    >
      <Stack.Screen name="CreateAccount" component={LoginScreen} />
      {/*<Stack.Screen name="CreateAccount" component={LoginScreen} /> */}
      {/*default initial route ^ */}
      <Stack.Screen name="PickFavourite" component={IntrestSelection} />
      <Stack.Screen name="SetNewPassword" component={TransactionScreen} />
      <Stack.Screen name="TransactionSuccess" component={TransactionScreen} />
      <Stack.Screen name="TransactionFail" component={CourseListScreen} />
      <Stack.Screen name="CourseSearchScreen" component={CourseListScreen} />
      <Stack.Screen name="MainTabScreen" component={TabNavigator} />
      <Stack.Screen name="MainVideoCourse" component={VideoScreen} />
      <Stack.Screen name="ComponentAndScreenTest" component={VideoScreen} />
      <Stack.Screen name="LiveCall" component={TransactionScreen} />
      {/* change this to your testing component*/}
    </Stack.Navigator>
  )
}
