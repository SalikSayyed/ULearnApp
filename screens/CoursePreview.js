import React from 'react';
import { StyleSheet, Text, View, FlatList, Button} from 'react-native';
//import Color from '../config/Colors'
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
];

const GridView = ({ name }) => (
  <View style={styles.gridStyle}>
    <Text style={styles.gridText}>{name}</Text>
  </View>
);
const App = () => {
  return (
    <View style={[styles.container, {flexDirection: "column"}]}>
        <View style={{ flex: 1 }}>
          



        </View>
        <View style={{ flex: 2, backgroundColor: "white",  borderTopRightRadius: 30}}>
              <Text style={{marginTop: 40, justifyContent: 'center', fontSize: 30, fontWeight: 'bold', paddingLeft: 20,}}>Design Fundamental</Text>                      
              
              <View style={{alignContent: 'space-between' ,flexDirection: 'row',color: 'blue', marginTop: 10, paddingLeft: 20}}>
                <Text style={{fontSize: 20}}>👨 Halo Academy</Text>  
                <Text style={{paddingLeft: 60, fontSize: 20}}>⭐ 4.8</Text>
              </View>
 
              <Text style={{marginTop: 20, color: "grey", justifyContent: 'center', fontSize: 20, marginHorizontal: 20,}}>Description(It's all about course that we will learn in this video)</Text>

              <View style={styles.MainContainer}>
 
                <FlatList
                  data={Data}
                  renderItem={({ item }) => <GridView name={item.name}/>}
                  keyExtractor={item => item.id}
                  numColumns={2}
                  key={item => item.id}
                />
              </View>
              
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
  },

  text2:{
    marginTop: 50, 
    color: "grey", 
    fontSize: 20,
    marginLeft: 20,
    marginRight: 50,
  },

  MainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
 
  gridStyle: {
    marginTop: 20,
    paddingLeft: 20,
    flex:1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: 80,
    margin: 2,
    //backgroundColor: '#00C853'
  },
 
  gridText: {
    fontSize: 20,
    color: 'grey'
  }
});
 
export default App;