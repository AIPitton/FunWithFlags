/**
 * @format
 */

import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'
import { store } from './src/app/store'
import { Provider } from 'react-redux'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
AppRegistry.registerComponent(appName, () => () => (
  <React.StrictMode>
    <NavigationContainer>
      <Provider store={store}>
        <App />
      </Provider>
    </NavigationContainer>
  </React.StrictMode>
))
