import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity, Image, Modal } from 'react-native'
import styles from './Styles/ButtonStyle'
import LoginScreen from '../Containers/LoginScreen'

export default class Button extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showModal: false
    }
  }

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
        <TouchableOpacity style={styles.container} onPress={this.toggleModal}>
       <View style={styles.wrapper}>
        <Image resizeMode="contain" style={styles.icon} source={require('../Images/Icons/play.png')} />
        <Text style={styles.text}>Get Started</Text>
       </View>
      </TouchableOpacity >
      <Modal
      visible={this.state.showModal}
      onRequestClose={this.toggleModal}>
      <LoginScreen screenProps={{ toggle: this.toggleModal }} />
    </Modal>
      </View>
    )
  }
}
