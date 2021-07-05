import React from 'react';
import { SafeAreaView, Text, Image, TouchableOpacity, StyleSheet, Dimensions, View } from 'react-native';
import colors from '../styles/colors';
import wateringImg from '../assets/watering.png';
import { Feather } from '@expo/vector-icons';
import fonts from '../styles/fonts'
import { useNavigation } from '@react-navigation/core';

export function Welcome(){
  
  const navigation = useNavigation()

  function handleStart() {

    return navigation.navigate('UserIdentification')
  }

  return(
    <SafeAreaView style={styles.container}>

      <View style={styles.wrapper}>

        <Text style={styles.title}>
            Gerencie {'\n'} suas plantas de {'\n'} forma mais fácil
        </Text>
        
        <Image 
            source={wateringImg} 
            style={styles.image}
            resizeMode='contain' 
        />

        <Text style={styles.subTitle}>
            Não esqueça mais de regar suas plantas. 
            Nós cuidamos de lembrar você sempre que precisar.
        </Text>


        <TouchableOpacity style={styles.button} activeOpacity={0.7}  onPress={handleStart}>
            <Text style={styles.buttonIcon}>
                <Feather name="chevron-right" />
            </Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'space-around',
    paddingHorizontal: 20
  },
  title: {
    fontSize:28,
    fontWeight:'bold',
    textAlign:'center',
    color:colors.heading,
    marginTop:38,
    fontFamily: fonts.heading,
    lineHeight: 34
  },
  subTitle: {
    textAlign:'center',
    fontSize:18,
    paddingHorizontal:20,
    color:colors.heading,
    fontFamily:fonts.heading
  },
  button: {
    backgroundColor:colors.green,
    justifyContent:'center',
    alignItems:"center",
    borderRadius:16,
    marginBottom:10,
    height: 56,
    width: 56
  },
  image: {
    height: Dimensions.get('window').width * 0.7
  },
  buttonIcon: {
    fontSize: 24,
    color: colors.white
  }
})