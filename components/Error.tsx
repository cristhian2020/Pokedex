import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface ErrorProps {
  message: string;
}

const Error = ({message}:ErrorProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Error:{message}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text:{
    color: 'red',
    fontSize: 16,
  }
})

export default Error