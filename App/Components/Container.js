import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, ImageBackground } from 'react-native'
import styles from './Styles/ContainerStyle'
import Card from '../Components/Card'

export default class Container extends Component {
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
      <View  style={styles.container}>
             {this.props.children}
       
      </View>
    )
  }
}
