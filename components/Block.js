import React, { useState } from 'react'
import { FlatList, View, StyleSheet, Text, TouchableOpacity } from 'react-native'
// import { FlatList, LongPressGestureHandler, TouchableOpacity } from 'react-native-gesture-handler';
import Color from '../config/Colors'

export default function App() {
  const [people, setpeople] = useState([
    { name: '😁', id: '1' },
    { name: '🧇', id: '2' },
    { name: '🍎', id: '3' },
  ])

  const pressHandler = (id) => {
    console.log(id)
    setpeople((prevPeople) => {
      return prevPeople.filter((person) => person.id !== id)
    })
  }

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={3}
        // keyExtractor={(item) => item.id}

        data={people}
        renderItem={({ item }) =>
          item.id(
            <TouchableOpacity onPress={() => pressHandler(item.id)}>
              <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>
            //    <SocialMedia label={} textIcon={item.label} />
          )
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 70,
    height: 70,
    borderRadius: 20,
    backgroundColor: Color.white,
    borderWidth: 3,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
