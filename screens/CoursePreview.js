import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import Color from '../config/Colors'
//import Button from '../components/Button'

const Data = [
  {
    id: 1,
    name: 'Students',
  },
  {
    id: 2,
    name: 'Language',
  },
  {
    id: 3,
    name: 'Last Updated',
  },
  {
    id: 4,
    name: 'Subtitle',
  },
]

const GridView = ({ name }) => (
  <View style={styles.gridStyle}>
    <Text style={styles.gridText}>{name}</Text>
  </View>
)
const App = () => {
  return (
    <View style={[styles.container]}>
      <View style={[styles.container1]} />
      <View style={[styles.container2]}>
        <Text style={[styles.textstyle]}>Design Fundamental</Text>

        <View style={[styles.container3]}>
          <Text style={[styles.textstyle_c3_1]}>👨 Halo Academy</Text>
          <Text style={[styles.textstyle_c3_2]}>⭐ 4.8</Text>
        </View>

        <Text style={[styles.textstyle1]}>
          Description(It's all about course that we will learn in this video)
        </Text>

        <View style={styles.MainContainer}>
          <FlatList
            data={Data}
            renderItem={({ item }) => <GridView name={item.name} />}
            keyExtractor={(item) => item.id}
            numColumns={2}
            key={(item) => item.id}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.yellow,
    flexDirection: 'column',
  },

  container1: {
    flex: 1,
  },

  container2: {
    flex: 2,
    backgroundColor: Color.white,
    borderTopRightRadius: 30,
  },

  container3: {
    alignContent: 'space-between',
    flexDirection: 'row',
    marginTop: 10,
    paddingLeft: 20,
  },

  textstyle_c3_1: {
    fontSize: 20,
    color: Color.blue,
  },

  textstyle_c3_2: {
    paddingLeft: 60,
    fontSize: 20,
  },

  textstyle: {
    marginTop: 40,
    justifyContent: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    paddingLeft: 20,
  },

  textstyle1: {
    marginTop: 20,
    color: Color.grey,
    justifyContent: 'center',
    fontSize: 20,
    marginHorizontal: 20,
  },

  MainContainer: {
    flex: 1,
    backgroundColor: Color.white,
  },

  gridStyle: {
    marginTop: 20,
    paddingLeft: 20,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: 80,
    margin: 2,
  },

  gridText: {
    fontSize: 20,
    color: Color.grey,
  },
})

export default App
