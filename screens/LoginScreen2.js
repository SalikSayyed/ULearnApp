import React from 'react'
import Input from '../components/InputComponent'
import { View, StyleSheet } from 'react-native'

const LoginScreen2 = ({}) => {
  const [mail, changeMail] = React.useState('')
  const [pass, changePass] = React.useState('')
  const Textplaceholder = 'Input Here'

  return (
    <>
      <View style={styles.container1}>
        <Input
          iconName="mail-outline"
          hide={false}
          value={mail}
          onChangeValue={changeMail}
          placeholder={Textplaceholder}
        />
      </View>

      <View style={styles.container2}>
        <Input
          iconName="lock-closed-outline"
          hide={true}
          value={pass}
          onChangeValue={changePass}
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
