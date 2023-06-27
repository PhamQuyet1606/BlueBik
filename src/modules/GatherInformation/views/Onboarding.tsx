import {Colors} from 'assets/Colors'
import React, {useState} from 'react'
import {View, StyleSheet, Alert} from 'react-native'
import Swiper from 'react-native-swiper'
import StepOne from '../components/StepOne'
import StepTwo from '../components/StepTwo'
import StepThree from '../components/StepThree'
import CommonButton from 'components/Button'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
  },
  swiper: {},
  wrapperButton: {
    paddingVertical: 40,
  },
})

const Onboarding = () => {
  const [currentStep, setCurrentStep] = useState<number>(0)
  const [fullName, setFullName] = useState<string>('')
  const [idNumber, setIdNumber] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [dateOfBirth, setDateOfBirth] = useState<string>('')
  const [purposes, setPurposes] = useState<string[]>([])

  const [error, setError] = useState<onboarding.error>({
    fullName: '',
    idNumber: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
    purpose: '',
  })

  const onPressNext = () => {
    if (currentStep === 0) {
      if (!idNumber || !fullName) {
        setError({
          ...error,
          fullName: !fullName ? 'Full name is required' : '',
          idNumber: !idNumber ? 'ID number is required' : '',
        })
        return
      }
    }
    if (currentStep === 1) {
      if (!email || !phoneNumber || !dateOfBirth) {
        setError({
          ...error,
          phoneNumber: !phoneNumber ? 'Phone number is required' : '',
          email: !email ? 'Email is required' : '',
          dateOfBirth: !dateOfBirth ? 'Date of birth is required' : '',
        })
        return
      }
    }
    if (currentStep === 2) {
      if (!purposes?.length) {
        setError({...error, purpose: 'Please select at least one purpose'})
      }
    }

    if (currentStep !== 2) {
      setCurrentStep(currentStep + 1)
    } else {
      Alert.alert('', 'Thank you')
    }
  }

  const onChangeName = (value: string) => {
    setFullName(value)
    if (error.fullName) {
      setError({...error, fullName: ''})
    }
  }

  const onChangeEmail = (value: string) => {
    setEmail(value)
    if (error.email) {
      setError({...error, email: ''})
    }
  }

  const onChangePhoneNumber = (value: string) => {
    setPhoneNumber(value)
    if (error.phoneNumber) {
      setError({...error, phoneNumber: ''})
    }
  }

  const onChangeDateOfBirth = (value: string) => {
    setDateOfBirth(value)
    if (error.dateOfBirth) {
      setError({...error, dateOfBirth: ''})
    }
  }

  const onChangeID = (value: string) => {
    setIdNumber(value)
    if (error.idNumber) {
      setError({...error, idNumber: ''})
    }
  }

  const onSelectPurPoses = (value: string) => {
    if (purposes.includes(value)) {
      const newPurpose = purposes.filter(e => e !== value)
      setPurposes(newPurpose)
    } else {
      setPurposes([...purposes, value])
    }
    if (error.purpose) {
      setError({...error, purpose: ''})
    }
  }

  return (
    <View style={styles.container}>
      <Swiper
        key={currentStep}
        style={styles.swiper}
        index={currentStep}
        autoplay={false}
        removeClippedSubviews={true}
        scrollEnabled={false}>
        <StepOne
          errorFullName={error.fullName}
          errorId={error.idNumber}
          idNumber={idNumber}
          onChangeID={onChangeID}
          fullName={fullName}
          onChangeName={onChangeName}
        />
        <StepTwo
          errorDateOfBirth={error.dateOfBirth}
          errorEmail={error.email}
          errorPhoneNumber={error.phoneNumber}
          email={email}
          dateOfBirth={dateOfBirth}
          phoneNumber={phoneNumber}
          onChangeDate={onChangeDateOfBirth}
          onChangeEmail={onChangeEmail}
          onChangePhoneNumber={onChangePhoneNumber}
        />
        <StepThree
          textError={error.purpose}
          purposes={purposes}
          onSelectPurpose={onSelectPurPoses}
        />
      </Swiper>
      <View style={styles.wrapperButton}>
        <CommonButton
          text={currentStep !== 2 ? 'Next' : 'Finish'}
          onPress={onPressNext}
        />
      </View>
    </View>
  )
}

export default Onboarding
