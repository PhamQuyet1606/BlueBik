import CommonInput from 'components/Input'
import React from 'react'
import {View, StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
})

interface PropsStepTwo {
  onChangeEmail: (value: string) => void
  onChangePhoneNumber: (value: string) => void
  onChangeDate: (value: string) => void
  email: string
  phoneNumber: string
  errorEmail: string
  errorPhoneNumber: string
  dateOfBirth: string
  errorDateOfBirth: string
}

const StepTwo = (props: PropsStepTwo) => {
  const {
    email,
    onChangeEmail,
    onChangePhoneNumber,
    phoneNumber,
    errorEmail,
    errorPhoneNumber,
    dateOfBirth,
    onChangeDate,
    errorDateOfBirth,
  } = props
  return (
    <View style={styles.container}>
      <CommonInput
        textError={errorEmail}
        title="Email"
        value={email}
        onChangeText={onChangeEmail}
      />

      <CommonInput
        textError={errorPhoneNumber}
        title="Phone number"
        value={phoneNumber}
        onChangeText={onChangePhoneNumber}
        keyboardType="number-pad"
        returnKeyType="done"
      />

      <CommonInput
        textError={errorDateOfBirth}
        title="Date of birth"
        value={dateOfBirth}
        onChangeText={onChangeDate}
        placeholder="DD/MM/YYYY"
      />
    </View>
  )
}

export default StepTwo
