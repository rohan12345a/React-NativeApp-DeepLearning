import { View, Text , TouchableOpacity, ScrollView, TextInput} from 'react-native'
import React,{useState} from 'react'
import colours from '../designs/colours';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Ionic from 'react-native-vector-icons/Ionicons';

const SignUp = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword]= useState('');
  const  [confirmPassword, setConfirmPassword]= useState('');

  const LoginWithIcon = ({iconName,onPress,buttonTitle})=>{
    return(
    <TouchableOpacity onPress={onPress}
    activeOpacity={0.8}
    style={{marginTop : -400, width:'40%', paddingVertical:12, paddingHorizontal:24
    ,backgroundColor:colours.transparent, borderWidth:2,borderColor:'white',
    borderRadius:10, alignItems:'center', justifyContent:'center'}}>
      <Ionic name={iconName} 
      style={{
        fontSize:26, color:'black',
        marginBottom:4,
      }}/>
      <Text style={{
        fontSize:14, color:'black', opacity:0.4,fontWeight:'bold'
      }}>{buttonTitle}</Text>
    </TouchableOpacity>
    );
  };

  return (
    <View style=
    {{backgroundColor:'#CCCCFF', width:'100%', height:'100%',
    paddingVertical:10, paddingHorizontal:20,}} >

      <TouchableOpacity 
      activeOpacity={0.8}
      onPress={()=> navigation.goBack()}
      style={{
        backgroundColor: colours.white,
        width: 40,
        aspectRatio: 1/1,
        alignItems:'center',
        justifyContent: 'center',
        borderRadius:100,
        elevation:4,
        position: 'absolute',
        top:20,
        left:20,
        zIndex:100,
      }}>

      </TouchableOpacity>


      <ScrollView>
        <Text style={{
          textAlign:'center',
          marginVertical:20,
          fontSize:30,
          marginBottom:80,
          color:'black',
          letterSpacing:2,
          fontWeight:'500',
        }}>
          Welcome
        </Text>

        <View style={{
          width:'100%',
        }}>
          <View style={{
            width:'100%',
            marginBottom:20,

          }}>
           <TextInput placeholder='Enter Email'
           placeholderTextColor= 'grey'
           keyboardType='email-address'
            value= {email}
            onChangeText={e=>setEmail(e)}
            style={{
            paddingVertical:10,
            paddingHorizontal:20,
            fontSize:14,
            color:'grey',
            borderRadius:10,
            backgroundColor:'white',
           }}></TextInput>
          </View>
          <View style={{
            width:'100%',
            marginBottom:20,

          }}>
           <TextInput placeholder='Password'
           placeholderTextColor= 'grey'
           keyboardType='visible-password'
            value= {password}
            onChangeText={e=>setPassword(e)}
            style={{
            paddingVertical:10,
            paddingHorizontal:20,
            fontSize:14,
            color:'grey',
            borderRadius:10,
            backgroundColor:'white',
           }}></TextInput>
          </View>

          <View style={{
            width:'100%',
            marginBottom:20,

          }}>
           <TextInput placeholder='Confirm Password'
           placeholderTextColor= 'grey'
           keyboardType='visible-password'
            value= {confirmPassword}
            onChangeText={e=>setConfirmPassword(e)}
            style={{
            paddingVertical:10,
            paddingHorizontal:20,
            fontSize:14,
            color:'grey',
            borderRadius:10,
            backgroundColor:'white',
           }}></TextInput>
          </View>

          <TouchableOpacity  
          activeOpacity={0.8}
          style={{
            width:'100%', 
            paddingVertical:14,
            paddingHorizontal:20,
            alignItems:'center', justifyContent:'center',
            backgroundColor: '#FF6F61',
            borderRadius:10,
            elevation: 8,
            shadowColor: '#FF6F61',
          }}>
            <Text style={{
              color:'white',
              fontSize:16,
            }}>Register</Text>
          </TouchableOpacity>
        </View>

        <View style={{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        paddingBottom:250,
      }}>
      <Text  style={{
        fontSize:15, color:'black',fontFamily:'Nunito',
        opacity:0.9, marginHorizontal:18, marginVertical:20,
      }}>_________      Or Continue With      _________ </Text>
      </View>

      <View style={{
  flexDirection:'row', 
  alignItems:'center',
  justifyContent:'space-evenly',
  marginTop:10,
  marginBottom:40,
  
}}>
  <LoginWithIcon buttonTitle="Google" onPress={() =>console.log("google")} iconName={"logo-google"} />
  <LoginWithIcon buttonTitle="Anonymous" onPress={() => console.log("Anonymous")} iconName={"person-outline"} />
</View>


      </ScrollView>
     
      
    </View>
  );
};

export default SignUp