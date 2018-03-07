import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, ImageBackground, Image } from 'react-native'
import styles from './Styles/BackgroundImageStyle'

export default class BackgroundImage extends Component {
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
      <View style={styles.container}>
        <ImageBackground resizeMode='cover' source={require('../Images/background.jpg')}
            style={styles.backgroundImage}>
            {this.props.children}  
        </ImageBackground>

      </View>
    )
  }
}
