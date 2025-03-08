import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { router, useRouter } from 'expo-router';
const AddButton = () => {
  const navigate= useRouter()
  return (
    <TouchableOpacity style={styles.floatingBtn} onPress={()=>navigate.navigate("/addTask")} >
    <Ionicons name="add" size={38} color="white" />
    </TouchableOpacity>
  )
}

export default AddButton

const styles = StyleSheet.create({
    floatingBtn:{
        height:55,
        width:55,
        borderRadius:120,
        backgroundColor:"#0090B0",
        justifyContent:"center",
        alignItems:"center",
        position:"absolute",
        bottom:"10%",
        right:25
    }
})