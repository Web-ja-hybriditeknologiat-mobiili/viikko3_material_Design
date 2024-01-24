import React, { useState } from "react";
import { Appbar, Button, TextInput } from "react-native-paper";
import { StyleSheet, View } from "react-native";
import MainAppbar from "../components/MainAppbar";

export default function Login() {
    const [formData, SetFormData] = useState({ username:" ", password: " "})
    return ( 
     <>
     <MainAppbar title="Login"></MainAppbar>
     <View style = {styles.container}>
        <TextInput label="Username"style={styles.input_field}
        value={FormData.username}
        onChange={text =>SetFormData({...formData, username: text})}
        />
        <TextInput label = "Password" style = {styles.input_field} keyboardType="visible-password"
        value={FormData.password}
        onChange={text =>SetFormData({...formData, password: text})}/>
        <Button mode = "contained" style= {styles.button}>Submit</Button>
     </View>
     
     </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundcolor: '#ffff',
        justifyContent: 'center',

    },
    input_field:{
        backgroundColor: 'fcfcfc',
        margin: (16,8,16,8)
    },
    button: {
        margin:(16,8,0,8)
    }
});