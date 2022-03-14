import 'react-native-gesture-handler'
import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import SocialMedia from '../components/SocialMedia'
import SocialData from '../config/SocialData'
// import Button from '../components/Button'

export default function SocialCombo({}) {
  const _keyExtractor = (item, index) => index.toString()
  return (
    <View style={styles.listStyle}>
      <FlatList
        scrollEnabled={false}
        contentContainerStyle={styles.contentStyle}
        style={styles.flatStyle}
        numColumns={3}
        data={SocialData}
        keyExtractor={_keyExtractor}
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

    // flex:3,
  },
  flatStyle: {
    alignContent: 'center',
    paddingRight: 30,
  },
  contentStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})
