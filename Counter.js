import React from 'react'
import { SafeAreaView, Text } from 'react-native'

const Counter = () => {
  return (
    <SafeAreaView
      style = {{
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
      }}
    >
      <Text
        style = {{
          fontSize: 36,
          fontWeight: 'bold'
        }}
      >
        Hello world
      </Text>
    </SafeAreaView>
  )
}

export default Counter