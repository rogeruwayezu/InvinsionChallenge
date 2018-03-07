import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Image, Modal } from 'react-native'
import styles from './Styles/ButtonStyle'


export default class Button extends Component {
 

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal })
  }

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
      <View>
        <TouchableOpacity style={styles.container} >
       <View style={styles.wrapper}>
        <Image resizeMode="contain" style={styles.icon} source={require('../Images/Icons/play.png')} />
        <Text style={styles.text}>Get Started</Text>
       </View>
      </TouchableOpacity >
      </View>
    )
  }
}
