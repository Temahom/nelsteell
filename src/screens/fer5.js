import React, { useState } from "react";
import {ScrollView ,StyleSheet,Button,TouchableOpacity, TouchableOpacityBase} from 'react-native';
import { Container, Header, Content,CheckBox,ListItem,Body, Accordionm,Text, View ,Input} from "native-base";

export default function Fer5({navigation}) {
 
const [check6,setCheck6]=useState(false)
const [check8,setCheck8]=useState(false)
const [check10,setCheck10]=useState(false)
const[ inp,setInp]=useState('none')
 const changeChecke6=()=>{
        
        
        setCheck6(!check6)
         }
         const changeChecke8=()=>{
          setCheck8(!check8)
           }
           const changeChecke10=()=>{
            setCheck10(!check10)
             }
    return (
      <Container>
        <Content padder>
        <View>
        <Text style={{fontSize:26, fontWeight:'bold', textAlign:"center",marginBottom:10}}>
            Fer FE500B
        </Text></View>
          <ScrollView>
        
           <ListItem style={styles.list}  >
  
                <CheckBox checked={check6} style={styles.chex} color='coral' onPress={changeChecke6}  />
                <Body style={{justifyContent:"space-around",flexDirection:"row"}}>
                <TouchableOpacity onPress={changeChecke6} >
                <Text style={styles.text}>6 mm</Text>
                </TouchableOpacity>
                  <Input  
                  style={{display:check6 ? 'flex': 'none',
                  textAlign:"center",
                   borderColor:'coral',borderWidth:1,borderRadius:30,padding:5}}  
                    placeholder='Qte'
                    keyboardType="numeric"
                    placeholderTextColor='coral'
                  />
                </Body>
                
          </ListItem>
          <ListItem style={styles.list}  >
                <CheckBox checked={check8} style={styles.chex} color='coral'  onPress={changeChecke8}/>
                <Body style={{justifyContent:"space-around",flexDirection:"row"}}>
                <TouchableOpacity onPress={changeChecke8} >
                <Text style={styles.text}>8 mm</Text>
                </TouchableOpacity>
                <Input  
                  style={{display:check8 ? 'flex': 'none', borderColor:'coral',textAlign:"center",
                  borderWidth:1,borderRadius:30,padding:5}}  
                    placeholder='Qte'
                    placeholderTextColor='coral'
                    keyboardType="numeric"
                  />
                </Body>
          </ListItem>
          <ListItem style={styles.list}  >
                <CheckBox checked={check10} style={styles.chex} color='coral'  onPress={changeChecke10}/>
                <Body style={{justifyContent:"space-around",flexDirection:"row"}}>
                <TouchableOpacity onPress={changeChecke10} >
                <Text style={styles.text}>10 mm</Text>
                </TouchableOpacity>
                <Input  
                  style={{display:check10 ? 'flex': 'none',
                   borderColor:'coral',borderWidth:1,
                   textAlign:"center",
                   borderRadius:30,padding:5
                   }}  
                    placeholder='Qte'
                    keyboardType="numeric"
                    placeholderTextColor='coral'
                  />
                </Body>
          </ListItem>
      
          </ScrollView>
          <Button color='coral' title='Valider' onPress={()=> navigation.navigate("presentation")} />
        </Content>
      </Container>
    );

}
const styles=StyleSheet.create({
    list:{
        borderRadius:30,
        borderWidth:1,
        borderColor:'#202626',
        marginBottom:10,
        padding:10,
        paddingLeft:30,
        opacity:0.9
    },
    chex:{
        color:'coral',
        borderRadius:10,
        borderWidth:1,
        borderColor:'coral',
        
    },
    text:{
        fontWeight:"bold",
        fontSize:17,
       
    }
})