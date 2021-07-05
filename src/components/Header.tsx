import React from "react";
import { StyleSheet, Image, View, Text} from "react-native"
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import userImage from '../assets/perfil.png';
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function Header() {
    return (
        <View style={styles.container}>

            <View>
                <Text style={styles.greeting}>Olá, </Text>
                <Text style={styles.userName}>Leandro</Text>
            </View>

            <Image source={userImage} style={styles.image} />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: getStatusBarHeight()
    },
    greeting: {
        fontSize: 32,
        fontFamily: fonts.text,
        color: colors.heading,
    },
    userName: {
        fontSize: 32,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 30
        
    },
    image: {
        height: 70,
        width: 70,
        borderRadius: 35
    }


})