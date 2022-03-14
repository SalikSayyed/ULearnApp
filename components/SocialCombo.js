import 'react-native-gesture-handler'
import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
//import LandingScreen from './navigation/BottomTabNavigation'
import SocialMedia from './SocialMedia'
import SocialData from '../config/SocialData'

export default function SocialCombo() {
  return (
    <View style={styles.listStyle}>
      <FlatList
        scrollEnabled={false}
        contentContainerStyle={styles.contentStyle}
        style={styles.flatStyle}
        numcolumns={3}
        // keyExtractor={_keyExtractor}
        data={SocialData}
        renderItem={({ item }) => {
          return <SocialMedia label={item.label} textIcon={item.textIcon} />
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  listStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatStyle: {
    alignContent: 'center',
  },
  contentStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})
