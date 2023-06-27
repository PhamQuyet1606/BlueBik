import {Colors} from 'assets/Colors'
import {Fonts} from 'assets/Fonts'
import React, {ReactElement, ReactNode} from 'react'
import {
  Text,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
  Dimensions,
} from 'react-native'

const style = StyleSheet.create({
  text: {
    fontSize: Fonts.fontSize[16],
    color: Colors.white,
    fontWeight: '500',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  linear: {
    height: 48,
    borderRadius: 8,
    width: Dimensions.get('screen').width - 32,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: Colors.main,
  },
})

interface ButtonProps {
  text: string
  color?: string
  textStyles?: TextStyle
  buttonStyles?: ViewStyle
  onPress: () => void
  isDisable?: boolean
  backgroundColor?: string
  children?: ReactElement | ReactNode
}

const CommonButton = (props: ButtonProps) => {
  const {
    text,
    color = Colors.white,
    textStyles = {},
    onPress,
    isDisable = false,
    buttonStyles = {},
  } = props

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isDisable}
      style={[style.linear, buttonStyles]}>
      <Text style={[style.text, {color}, textStyles]}>{text || ''}</Text>
    </TouchableOpacity>
  )
}

export default CommonButton
