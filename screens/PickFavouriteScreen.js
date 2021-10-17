import 'react-native-gesture-handler'
import React from 'react'
import { FlatList, StyleSheet, View, Text } from 'react-native'
import IntrestSelection from '../components/IntrestsSelection'
import interestData from '../config/IntrestData'
import Button from '../components/Button'
import Color from '../config/Colors'

export default function InterestCombo({ navigation }) {
  const _keyExtractor = (item, index) => index.toString()
  return (
    <View style={styles.listStyle}>
      <View style={styles.containerStyle}>
        <Text style={styles.headTextStyle}>Pick your Favourite topic</Text>
        <Text style={styles.text1}>Choose your favourite topic to help us deliver</Text>

        <Text style={styles.text3}>the most suitable course for you.</Text>
      </View>

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

      <Text style={styles.text2}> You can still change your topic again later</Text>
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
    // paddingTop:10,
    paddingBottom: 30,
  },

  contentStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    paddingTop: 30,
  },

  text1: {
    fontSize: 14,
    fontWeight: 'bold',
    // marginBottom: 5,
    color: Color.textGrey,
    textAlign: 'center',
    paddingBottom: 10,
  },

  text2: {
    color: Color.textGrey,
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 20,
    padding: 20,
    textAlign: 'center',
    paddingBottom: 20,
  },

  text3: {
    color: Color.textGrey,
    fontSize: 14,
    fontWeight: 'bold',

    textAlign: 'center',
  },
  headTextStyle: {
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    marginVertical: 20,
  },
  containerStyle: {
    marginTop: 20,
    alignItems: 'center',
  },
})
