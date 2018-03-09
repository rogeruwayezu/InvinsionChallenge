import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, Image} from 'react-native'
import styles from './Styles/ProfileImageStyle'

export default class ProfileImage extends Component {
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
        <Image style={styles.image} resizeMode="contain" source={require('../Images/girl.jpg')} />
      </View>
    )
  }
}
