import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { router } from 'expo-router';

interface HeaderProps{
    title:string,
    isBackButton:boolean

}
const Header:React.FC<HeaderProps> = ({title,isBackButton}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.titleText}>{title}</Text>
      {isBackButton && <TouchableOpacity style={styles.backButton} onPress={()=>router.back()}>
        <Ionicons name="arrow-back-circle" size={36} color="white" />
        
        </TouchableOpacity>}
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerContainer:{
        backgroundColor:"#0090B0",
        paddingVertical:10,
        justifyContent:"center",
        
    },
    titleText:{
        color:"white",
        textAlign:"center",
        fontFamily:"SpaceMono",
        fontSize:25
    },
    backButton:{
        position:"absolute",
        bottom:10,
        left:10,
        top:10
    }
})