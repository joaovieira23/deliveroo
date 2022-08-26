import { SafeAreaView, Text } from 'react-native'
import React from 'react';
import * as Animatable from 'react-native-animatable';

const PreparingOrderScreen = () => {
  return (
    <SafeAreaView className='bg-[#00ccbb] flex-1 justify-center items-center'>
      <Animatable.Image
        source={require("../assets/cooking-old.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      >

      </Animatable.Image>
    </SafeAreaView>
  )
}

export default PreparingOrderScreen