import React from 'react'
import { StyleSheet } from 'react-native'
import Input from '../components/InputComponent'
import Button from '../components/Button'
const LoginScreen = ({ navigation }) => {
  const [text, changeText] = React.useState('')
  const Textplaceholder = 'Input Here'
  return (
    <>
      <Input
        iconName="mail-outline"
        hide={true}
        value={text}
        onChangeValue={changeText}
        placeholder={Textplaceholder}
        customStyle={styles.inputStyle}
      />
      <Button tagName="Test Login" onPress={() => navigation.push('PickFavourite')} />
      <Button tagName="Test Login2" onPress={() => navigation.push('SignupScreen')} />
    </>
  )
}

const styles = StyleSheet.create({
  inputStyle: {
    paddingTop: 2,
  },
})

export default LoginScreen
