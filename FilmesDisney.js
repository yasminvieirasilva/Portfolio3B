import React from 'react'
import {
    View,
    Text, 
    StyleSheet, 
    Image, 
    TouchableOpacity
   } from 'react-native'

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native'

export default function IrmaoUrso(){
  const navigation = useNavigation()
  return(
    <View style={styles.container} >
      <View style={styles.containerLogo}>
        <Animatable.Image 
          animation='flipInY'
          source={require('../../assets/casa.png')}
          style= {{ width: '100%' }}
          resizeMode='contain'
        />
      </View>

      <Animatable.View delay={600} animation='fadeInUp' style={styles.containerForm}>
        <Text style={styles.title}> Uma menina colombiana pode ser a última esperança de sua família quando descobre que a magia que envolve o Encanto, um lugar que abençoa crianças com dons únicos, está em perigo </Text>
        

        <TouchableOpacity 
          style={ styles.button}
          onPress={ () => navigation.navigate('Welcome')}
        >
          <Text style={styles.buttonText}>Proximo</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  containerLogo: {
    flex: 2,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerForm: {
    flex: 1,
    backgroundColor: '#7B68EE',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12
  },
  text: {
    color: '#a1a1a1'
  },
  button: {
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: '#7B68EE',
    fontWeight: 'bold'
  }
})