import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import LoginScreen2 from './LoginScreen2'
import Signup from '../screens/Signup'
import Color from '../config/Colors'

import PickSocialMedia from '../screens/PickSocialMedia'

const SignupScreen = ({}) => {
  return (
    <View>
      <View style={styles.containerStyle}>
        <Text style={styles.headTextStyle}>Create account ✌</Text>
        <Text style={styles.text1}>Create your account to start your course lessons</Text>
        <PickSocialMedia />
        <Text style={styles.text1}> Or Sign up with your email</Text>
      </View>

      <View style={styles.container}>
        <LoginScreen2 />

        <Signup />
        <View style={styles.red}>
          <Text style={styles.text1}>
            By continuing you agree to our
            <Text style={styles.text3}> Terms & Conditons Privacy Policy </Text>
          </Text>
        </View>
        <View style={styles.signupTextCont}>
          <Text style={styles.text2}> I already have an account?</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },

  signupTextCont: {
    textAlign: 'center',
    marginHorizontal: 55,
    flexDirection: 'row',
  },
  headTextStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    paddingLeft: 15,
    marginBottom: 20,
  },

  text1: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 20,
    color: Color.textGrey,
    textAlign: 'center',
  },

  text3: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 40,

    textAlign: 'center',

    // color: '#00A9B6',
  },

  text2: {
    // color: '#00A9B6',

    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
    // color: '#00ffff'
  },

  containerStyle: {
    marginTop: 70,
  },

  red: {
    marginVertical: 90,
  },
})
export default SignupScreen
