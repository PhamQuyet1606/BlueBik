import {Colors} from 'assets/Colors'
import {Fonts} from 'assets/Fonts'
import React, {ReactElement, ReactNode} from 'react'
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  Dimensions,
} from 'react-native'
import CommonText from './CommonText'

const styles = StyleSheet.create({
  wrapperInput: {
    height: 48,
    width: Dimensions.get('screen').width - 32,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.desc,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  input: {
    flex: 1,
    color: Colors.text100,
    fontSize: Fonts.fontSize[14],
  },
  error: {
    color: Colors.errorInput,
    lineHeight: 20,
    marginBottom: 12,
  },
  title: {
    marginBottom: 6,
  },
})

interface InputProps {
  value?: string
  onChangeText: (value: string) => void
  placeholder?: string
  rightIcon?: ReactNode | ReactElement
  borderColor?: string
  inputProps?: TextInputProps
  textError?: string
  title: string
}

const CommonInput = (props: InputProps & TextInputProps) => {
  const {
    value,
    onChangeText,
    placeholder = '',
    rightIcon,
    borderColor = Colors.desc,
    textError = '',
    title = '',
  } = props
  const marginBottom = textError !== '' ? 4 : 16
  return (
    <>
      <CommonText text={title} styles={styles.title} />
      <View style={[styles.wrapperInput, {borderColor, marginBottom}]}>
        <TextInput
          {...props}
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholderTextColor={Colors.placeHolder}
          placeholder={placeholder}
        />
        {rightIcon && rightIcon}
      </View>
      {textError !== '' && (
        <CommonText text={textError} styles={styles.error} />
      )}
    </>
  )
}
export default CommonInput
