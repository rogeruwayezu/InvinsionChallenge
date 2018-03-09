import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native'

const imageWidth = Dimensions.get('window').width / 2;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff8080',
    height: imageWidth/4,
    width: imageWidth/4,
    borderRadius: 30,
    position: 'absolute',
    alignItems:'flex-end' , 
    alignContent: 'center',
    paddingHorizontal: imageWidth/20,
    paddingVertical: imageWidth/40,
    marginLeft: 290,
    
  
  },
  icon: {
    width: imageWidth/7,
  }
})
