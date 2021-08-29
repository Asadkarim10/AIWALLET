import { StatusBar } from 'expo-status-bar';
//import React from 'react';
 import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Entypo from 'react-native-vector-icons/Entypo';




export default function BackUp() {

    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
    <View style={styles.container}>
      

      <View style = {styles.logo}>
        <View style = {{
            paddingLeft: 15
        }}>
            <Entypo name="arrow-long-left" size={30} color="white"/>
        </View>
        <Text style = {{fontSize:20, marginTop:15, color:"white", textAlign:'center'}}>Before We Continue.</Text>
        <Text style = {{fontSize:20, color:"white", textAlign:'center'}}>Please Back Up Your Wallet</Text>
        <View style = {{
            width:"80%",
            marginTop:20,
            alignSelf:'center'
        }} >

        <Text style = {{
            color:'white',
            fontSize:10,
            textAlign:'center'
        }}>
            Security is very important in crypto world. We are going to show your 12 words backup phrasethat you must save outside this device.you will need these 12 words to recover access to your wallet.
        </Text>
        </View>



      </View>
      <View style = {styles.welcome}>

      <Image
            style={{
                height:150,
                width:150,
                alignSelf:'center'
            }}
        source={require('../assets/em.png')}
      />

      </View>

    <View style = {styles.create}>

     <View style = {{
         flexDirection:'row',
         justifyContent:'space-around'
     }}>       
    <View>
        
  <CheckBox
    disabled={false}
    style={{ marginTop:6 , color:'#a8a8a8'}}
    value={toggleCheckBox}
    onValueChange={(newValue) => setToggleCheckBox(newValue)}
  />
    </View>
    <View style = {{
        width:"90%",
        justifyContent:'center',
        marginLeft:10,
        marginTop:5
    }}> 
        <Text style= {{fontSize:10 , color:'#8d8d8d'}}>I will make sure i save the 12 words backup phrase. i wont be able to recover my wallet if i lose acces of my recovery phase</Text>
    </View>
    </View>
    </View>

    <View style = {styles.button}>
    <TouchableOpacity style = {{
        height:50,
        borderRadius:30,
        width:"80%",
        backgroundColor:'#ff9612',
        alignSelf:'center',
        justifyContent:'center'
    }}>
    <Text style = {{
        textAlign:'center',
        fontSize:20,
        color:"white",
    }}>Continue</Text>
    </TouchableOpacity>
    </View>
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:'100%',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo : {
      flex:2,
      justifyContent:'center',
      width:'100%',
      backgroundColor:'#ff9000',
      borderBottomRightRadius:30,
      borderBottomLeftRadius:30,
  },
  welcome : {
    flex:2,
    justifyContent:'flex-end',
    width:'100%'
},
create : {
    flex:.6,
    width:'90%',
    alignSelf:'center',
    justifyContent:'center',
  
},
button : {
    flex:1,
    width:'100%',
}

});