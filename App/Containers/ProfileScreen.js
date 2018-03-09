import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView, View} from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/ProfileScreenStyle'
import ProfileBackground from '../Components/ProfileBackground'
import ProfileLogo from '../Components/ProfileLogo'
import ProfileImage from '../Components/ProfileImage'
import ProfileCard from '../Components/ProfileCard'

class ProfileScreen extends Component {
  render () {
    return (
      <ProfileCard />
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


export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)
