import React from 'react'
import Input from '../components/InputComponent'
import { View, StyleSheet } from 'react-native'

const LoginScreen2 = ({}) => {
  const [text, changeText] = React.useState('')
  const Textplaceholder = 'Input Here'

  return (
    <>
      <View style={styles.container1}>
        <Input
          iconName="mail-outline"
          hide={true}
          value={text}
          onChangeValue={changeText}
          placeholder={Textplaceholder}
        />
      </View>

      <View style={styles.container2}>
        <Input
          iconName="mail-outline"
          hide={true}
          value={text}
          onChangeValue={changeText}
          placeholder={Textplaceholder}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container1: {
    paddingBottom: 20,
    // marginHorizontal:10,
  },
  container2: {
    paddingHorizontal: 40,
    // marginHorizontal:10,
  },
})

export default LoginScreen2
