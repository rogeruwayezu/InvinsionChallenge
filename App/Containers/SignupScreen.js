import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, ImageBackground, StatusBar  } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/SignupScreenStyle'
import BackgroundImage from '../Components/BackgroundImage'
import Header from '../Components/Header'
import SignupForm from '../Components/SignupForm'
import Button from '../Components/Button'

class SignupScreen extends Component {
  render () {
    return (
    <BackgroundImage source={require('../Images/background.jpg')} >
       <Header />    
      <ScrollView style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <SignupForm />
          <Button />
        </KeyboardAvoidingView>
      </ScrollView>
    </BackgroundImage>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignupScreen)
