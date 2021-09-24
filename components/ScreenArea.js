import React from 'react'
import { StyleSheet, SafeAreaView } from 'react-native'
import Color from '../config/Colors'
import { StatusBar } from 'expo-status-bar'

export default function App(props) {
  return (
    <SafeAreaView style={[styles.screenStyle, { backgroundColor: props.screenColor }]}>
      {props.children}
      <StatusBar style="auto" backgroundColor={Color.buttonBlue} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    paddingTop: 24,
  },
})
