import { Button, StyleSheet, TextInput } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"black",
      alignItems:"flex-start"
    },
    textName:{
      color: 'white',
      fontSize: 24,
      marginTop: 40,
      marginLeft:10
    },
    textInput:{
       backgroundColor:"white",
       marginLeft:10,
       marginTop:15,
       marginRight:10,
       height:"10%",
       borderRadius:5, 
       padding:10,
    },
    textButton: {
      color: 'white',    
    },
    button:{
      backgroundColor:'blue',
      height:"10%",
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:15,
      marginHorizontal:10,
    },
    form:{
      flex:1,
      width:'100%',
    },
  });