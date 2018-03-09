import React, { Component } from 'react'
// import PropTypes from 'prop-types';
import { View, Text, ImageBackground } from 'react-native'
import styles from './Styles/ProfileCardStyle'
import ProfileImage from '../Components/ProfileImage'
import ProfileLogo from '../Components/ProfileLogo'
import Separator from '../Components/Separator'

export default class ProfileCard extends Component {
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
        <View style={styles.firstContainer} >
         <ImageBackground style={styles.image} resizeMode="cover" source={require('../Images/girl.jpg')} >
          
            <View style={styles.textName}>
             <Text style={styles.text}>Andrea</Text>
             <Text style={styles.text}>Jameson</Text>
                                 
            </View>
      
         
        </ImageBackground>  
        </View>
       
        <View style={styles.secondContainer} >
          <View style={styles.secondCard}> 
            <ProfileLogo />   
            <Text style={styles.textCard}>Event Manager</Text>
            <Text style={styles.textCard}>San Francisco</Text>
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}>
          <Separator/>
          </View>
          
            
          
         
          <View style={{flex: 1, flexDirection: 'row',  marginLeft: 30, }}>
            <View style={{flex: 1, color: 'white',}}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>145K</Text>
              <Text style={{color: 'white', marginTop: 20, }}>Followers</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>56K</Text>
              <Text style={{color: 'white', marginTop: 20}}>Following</Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>1,690</Text>
              <Text style={{color: 'white', marginTop: 20}}>Likes</Text>
            </View>
          </View>
        </View>
        
      </View>
    )
  }
}
