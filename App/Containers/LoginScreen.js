import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
import Card from '../Components/Card'
import Container from '../Components/Container'
import Button from '../Components/Button'
import Footer from '../Components/Footer'
import Icon from '../Components/Icon'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/LoginScreenStyle'

class LoginScreen extends Component {
  render () {
    return (
    <Container >
      <Icon />
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
        <Card/>
        <Button />
        </KeyboardAvoidingView>
      </ScrollView>
      <Footer />
    </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)
