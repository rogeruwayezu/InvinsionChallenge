import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text } from 'react-native'
import styles from './Styles/CardStyle'
import { FormLabel, FormInput,  Button, Icon } from 'react-native-elements'

export default class Card extends Component {
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
      <View style={styles.card}>
        <FormLabel> User Name</FormLabel>
        <FormInput />
        <FormLabel> Password </FormLabel>
        <FormInput />
      </View>
    )
  }
}
