import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';


const image = { uri: "https://reactjs.org/logo-og.png" };

export default function Initial() {
  return (
    <View style={styles.container}>
      

      <View style = {styles.logo}>
        
        <View style = {{
            alignSelf:'center',
            justifyContent:'center',
            backgroundColor:'#f7f7f7',
            width: 120,
            height: 120,
            borderRadius: 120/2
        }}>


        <Image
            style={{
                height:98,
                width:80,
                borderRadius:20,
                alignSelf:'center'
            }}
        source={require('../assets/wallet.jpg')}
      />

        </View>


      </View>
      <View style = {styles.welcome}>
      <Text style = {{ fontSize:21, textAlign:'center', fontWeight:"500" , color:'#504f50'}}>Welcome to <Text style = {{ color:'#ff9612', fontWeight:'700', fontSize:24}}>AIWALLET</Text></Text>
      <Text style = {{ fontSize:17, textAlign:'center', color:'#504f50', fontWeight:'500'}}>The gatway to your crypto world</Text>
      </View>

    <View style = {styles.create}>
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
        color:"white",
    }}>Create New Wallet</Text>
    </TouchableOpacity>
    </View>

    <View style = {{flex:1}}>
    <Text style = {{
        color:'#ff9612',
        textAlign:'right'
    }}>Restore Existing Wallet</Text>
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
      width:'100%'
  },
  welcome : {
    flex:1,
    justifyContent:'center',
    width:'100%',
},
create : {
    flex:.4,
    width:'100%',
  
},

});