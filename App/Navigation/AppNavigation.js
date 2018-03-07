import { StackNavigator } from 'react-navigation'
import UserListScreen from '../Containers/UserListScreen'
import New from '../Containers/New'
import SignupScreen from '../Containers/SignupScreen'
import LoginScreen from '../Containers/LoginScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  UserListScreen: { screen: UserListScreen },
  New: { screen: New },
  SignupScreen: { screen: SignupScreen },
  LoginScreen: { screen: LoginScreen },
  LaunchScreen: { screen: LaunchScreen }
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'UserListScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
