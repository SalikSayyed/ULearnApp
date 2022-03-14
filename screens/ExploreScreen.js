import React from 'react'
import { Button, View, StyleSheet } from 'react-native'
import PopularCourseList from '../components/PopularCourseList'
import Color from '../config/Colors'

export default function Home({ navigation }) {
  return (
    <View style={styles.screenStyle}>
      <View style={styles.containerStyle}>
        <PopularCourseList />
        <View style={styles.buttonView}>
          <Button title="GO LIVE" onPress={() => navigation.push('LiveCall')} />
        </View>
        <View style={styles.buttonView}>
          <Button title="GO VIDEO" onPress={() => navigation.push('MainVideoCourse')} />
        </View>
        <View style={styles.buttonView}>
          <Button title="Signup Screen" onPress={() => navigation.push('SignupScreen')} />
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  buttonView: {
    width: 120,
    height: 35,
    borderRadius: 20,
    backgroundColor: Color.blue,
    fontSize: 40,
  },
  screenStyle: {
    flex: 1,
    justifyContent: 'center',
  },
  containerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})
