import {Colors} from 'assets/Colors'
import {Fonts} from 'assets/Fonts'
import React from 'react'
import {Text, StyleSheet, TextStyle} from 'react-native'

const style = StyleSheet.create({
  text: {
    fontSize: Fonts.fontSize[14],
    color: Colors.text80,
    lineHeight: 18
  }
})

interface TextProps {
  text: string
  color?: string
  styles?: TextStyle
}

const CommonText = (props: TextProps) => {
  const {text, color = Colors.text80, styles = {}} = props
  return <Text style={[style.text, {color}, styles]}>{text || ''}</Text>
}

export default CommonText
