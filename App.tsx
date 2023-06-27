import Onboarding from 'modules/GatherInformation/views/Onboarding'
import React from 'react'
import {View, StyleSheet, StatusBar, SafeAreaView} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

const App = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      {/* <StatusBar barStyle={'dark-content'} /> */}
      <Onboarding />
    </View>
  )
}
export default App
