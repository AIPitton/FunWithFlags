import React from 'react'
import { ImageBackground, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
interface Props {
  children: any
  isTransparent?: boolean
  backgroundColor?: string
}

const AppScreen = ({
  children,
  isTransparent = true,
  backgroundColor,
}: Props) => {
  return (
    <>
      <ImageBackground source={require('../assets/bg.jpg')} className="flex">
        <StatusBar
          // translucent={true}
          // backgroundColor="bg-white"
          barStyle="dark-content"
        />
        {/* <StatusBar
          translucent={true}
          animated={true}
          backgroundColor={COLORS.primary}
        /> */}
        <SafeAreaView className="h-full">{children}</SafeAreaView>
      </ImageBackground>
    </>
  )
}
export default AppScreen
