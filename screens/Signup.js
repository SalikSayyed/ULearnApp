import React from 'react'
// import { View, StyleSheet } from 'react-native'
import { View, StyleSheet } from 'react-native'

// import SignupScreen from '../screens/SignupScreen'
import Button from '../components/Button'

const Signup = ({}) => {
  return (
    <View style={styles.screenStyle}>
      <Button
        tagName="Signup"
        // onPress={() => navigation.setOptions({ tabBarStyle: { height: 0 } })}
        customeStyle={styles.buttonStyle}
      />
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    // width:100,
    // marginHorizontal:40,
  },

  buttonStyle: {
    marginHorizontal: 10,
    padding: 80,
  },
})
