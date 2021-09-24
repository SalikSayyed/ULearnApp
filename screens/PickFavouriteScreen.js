import 'react-native-gesture-handler'
import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import IntrestSelection from '../components/IntrestsSelection'
import interestData from '../config/IntrestData'
import Button from '../components/Button'

export default function InterestCombo({ navigation }) {
  const _keyExtractor = (item, index) => index.toString()
  return (
    <View style={styles.listStyle}>
      <FlatList
        scrollEnabled={false}
        contentContainerStyle={styles.contentStyle}
        style={styles.flatStyle}
        numColumns={3}
        data={interestData}
        keyExtractor={_keyExtractor}
        renderItem={({ item }) => {
          return <IntrestSelection label={item.label} textIcon={item.textIcon} />
        }}
      />
      <Button
        tagName="Let's Begin"
        onPress={() => {
          navigation.push('TransactionSuccess')
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
