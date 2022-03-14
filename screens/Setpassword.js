import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Button from '../components/Button'
import Password from './Password'
import Color from '../config/Colors'
// import { CurrentRenderContext } from '@react-navigation/core'

const Setpassword = () => {
  const [] = React.useState('Set new password')

  // const Textplaceholder = 'Input Here'

  return (
    <View style={styles.container}>
      <View style={styles.containerStyle}>
        <Text style={styles.headTextStyle}>Set new password 🔐</Text>
        <Text style={styles.text1}>
          Enter your email and a verification code it reset the password will be sent to your email.
        </Text>
      </View>
      {/* <View style={styles.cover}> */}
      <View style={styles.box}>
        <Password />
      </View>

      <View style={styles.screenStyle}>
        <Button tagName="Set new password" customeStyle={styles.buttonStyle} />
      </View>
      {/* </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 100,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  containerStyle: {
    marginTop: 50,

    marginHorizontal: 10,
  },

  headTextStyle: {
    fontSize: 27,
    fontWeight: 'bold',
    paddingBottom: 5,
    marginHorizontal: 10,
    marginVertical: 10,
  },

  text1: {
    fontSize: 15,
    fontWeight: 'bold',
    color: Color.textGrey,
    marginHorizontal: 10,
  },

  // signupTextCont: {
  //   flexGrow: 1,
  //   alignItems: 'flex-end',
  //   justifyContent: 'center',
  //   paddingVertical: 16,
  //   textAlign: 'center',
  //   marginHorizontal: 55,
  //   flexDirection: 'row',
  // },
  screenStyle: {
    marginBottom: 40,
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginHorizontal: 10,
  },

  buttonStyle: {
    marginHorizontal: 100,
    padding: 16,
  },

  box: {
    padding: 10,
    marginHorizontal: 70,
    marginVertical: 10,
  },
  // cover: {},
})

export default Setpassword
