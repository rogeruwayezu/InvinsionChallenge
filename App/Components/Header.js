import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './Styles/HeaderStyle'

export default class Header extends Component {
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render () {
    return (
      <TouchableOpacity style={styles.container} >
      <View style={styles.wrapper}>
       <Image resizeMode="contain" style={styles.icon} source={require('../Images/Icons/arrow.png')} />
       <Text style={styles.text}>New Account</Text>
      </View>
     </TouchableOpacity >
    )
  }
}
