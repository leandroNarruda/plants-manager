import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, TextInput,
   KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { Button } from '../components/Button';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/core';

export function UserIdentification() {

   const [isFocused, setIsFocused] = useState(false)
   const [isFilled, setIsFilled] = useState(false)

   function handleInputBlur() {
      setIsFocused(false)
   }

   function handleInputFocus() {
      setIsFocused(true)
   }

   function handleInputChange(value: string) {
      setIsFilled(!!value)
   }

  const navigation = useNavigation()

  function handleStart() {

    return navigation.navigate('Confirmation')
  }

   return (
      <SafeAreaView style={styles.container}>
         <KeyboardAvoidingView 
            behavior = {Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
         >

            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

               <View style={styles.content}>
                  <View style={styles.form}>
                     <View style={styles.header}>

                        <Text style={styles.emoji}>
                           {isFilled ? '😄' : '😃' }
                        </Text>

                        <Text style={styles.title}>
                           Como podemos {'\n'} chamar você ? 
                        </Text>

                     </View>
                     

                     <TextInput 
                        placeholder='Digite um nome'
                        style={[styles.input, (isFilled || isFocused) && {borderColor: colors.green}]}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        onChangeText={handleInputChange}
                     />

                     <View style={styles.footer}>

                        <Button title='Confirmar' onPress={handleStart}/>  

                     </View>

                  </View>


               </View>
            </TouchableWithoutFeedback>
         </KeyboardAvoidingView>
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'space-around'
   },
   content: {
      flex: 1,
      width: '100%',
   },
   form: {
      flex:1,
      justifyContent:'center',
      paddingHorizontal:54,
      alignItems:'center'
   },
   header: {
      alignItems: 'center',

   },
   emoji: {
      fontSize:44
   },
   input: {
      borderBottomWidth: 1,
      borderColor: colors.gray,
      color:colors.heading,
      width:'100%',
      fontSize:18,
      marginTop:50,
      padding:10,
      textAlign:'center'
   },
   title: {
      fontSize: 24,
      lineHeight: 32,
      textAlign: 'center',
      color: colors.heading,
      fontFamily: fonts.heading,
      marginTop: 20
   },
   footer: {
      width: '100%',
      marginTop: 40
   }
})