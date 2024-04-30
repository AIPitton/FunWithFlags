import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import FlagScreen from '../screens/FlagScreen'
const Tab = createMaterialTopTabNavigator()
function Router() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Fun  With  Flags" component={FlagScreen} />
    </Tab.Navigator>
  )
}

export default Router
