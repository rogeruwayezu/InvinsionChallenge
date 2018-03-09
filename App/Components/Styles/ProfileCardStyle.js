import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  firstContainer: {
    flex: 2,
    backgroundColor: 'powderblue',
    
  },
  secondContainer: {
    flex: 2,
    backgroundColor: 'steelblue',
    
  },
  image: {
    width: 390,
    height: 430,
    position: 'absolute',
  },
  textDiv: {
    flex: 1,
   
  },
  textName: {  
    color: '#f0f0f0',
    marginBottom: 160,
    alignItems: 'center',
    marginTop: 220
  },
  textContainer: {
    flex:1, 
    
   
    
  },
  text: {
    color: '#f0f0f0',
    fontSize: 25,
    marginRight: 270,
    
    
  },
  textCard : {
    color: '#f0f0f0',
  },

  secondCard: {
    flex: 0.2,
    justifyContent: 'space-between',
    marginLeft: 20,
    marginTop: 20
  }


})
