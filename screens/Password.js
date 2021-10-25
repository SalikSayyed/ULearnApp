import React from 'react'
import Input from '../components/InputComponent'
import { View, StyleSheet } from 'react-native'

const PassScreen = ({}) => {
  const [text, changeText] = React.useState(' ')
  const Textplaceholder = 'Password'

  return (
    <View style={styles.container2}>
      <Input
        iconName="mail-outline"
        hide={true}
        value={text}
        onChangeValue={changeText}
        placeholder={Textplaceholder}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container2: {
    marginHorizontal: 10,
    paddingHorizontal: 40,
    width: 20,
  },
})

export default PassScreen
