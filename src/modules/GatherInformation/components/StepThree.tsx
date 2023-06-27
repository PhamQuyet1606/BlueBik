import CommonText from 'components/CommonText'
import React from 'react'
import {View, StyleSheet} from 'react-native'
import CheckBox from '@react-native-community/checkbox'
import {Fonts} from 'assets/Fonts'
import {Colors} from 'assets/Colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  rowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    marginLeft: 6,
    fontSize: Fonts.fontSize[16],
  },
  topTitle: {
    marginBottom: 12,
    fontSize: Fonts.fontSize[18],
    fontWeight: '800',
  },
  error: {
    color: Colors.errorInput,
    lineHeight: 20,
    marginTop: 12,
  },
})

interface PropsStepThree {
  purposes: string[]
  onSelectPurpose: (value: string) => void
  textError: string
}

const StepThree = (props: PropsStepThree) => {
  const {purposes, onSelectPurpose, textError = ''} = props

  const options = [
    'Money transfer',
    'Payment',
    'Bill payment',
    'Loan',
    'Investment',
    'Saving',
  ]

  const onValueChange = (item: string) => () => {
    onSelectPurpose(item)
  }

  return (
    <View style={styles.container}>
      <CommonText
        styles={styles.topTitle}
        text="Purposes for using the e-wallet product"
      />
      {options.map((item, index) => {
        return (
          <View key={index} style={styles.rowItem}>
            <CheckBox
              value={purposes?.includes(item)}
              onValueChange={onValueChange(item)}
            />
            <CommonText text={item} styles={styles.title} />
          </View>
        )
      })}
      {textError !== '' && (
        <CommonText text={textError} styles={styles.error} />
      )}
    </View>
  )
}

export default StepThree
