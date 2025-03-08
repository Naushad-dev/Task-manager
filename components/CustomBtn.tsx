import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

interface CustomBtnProps{
    title:string;
    onPress:()=>void;
}

const CustomBtn:React.FC<CustomBtnProps> = ({title,onPress}) => {
  return (
   <TouchableOpacity style={styles.btn} onPress={onPress} activeOpacity={0.5}>
   <Text style={styles.btn_title_style}>{title}</Text>
   </TouchableOpacity>
  )
}

export default CustomBtn

const styles = StyleSheet.create({
    btn:{
        backgroundColor:"#0090B0",
        alignSelf:"center",
        paddingVertical:10,
        paddingHorizontal:14,
        marginTop:10,
        borderRadius:18,

    },
    btn_title_style:{
        color:"white"
    }

})