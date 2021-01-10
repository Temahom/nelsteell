import React,{useState} from 'react'
import {  View } from 'react-native';
import { Container, Content, Form,Item, Input, Label,Text,Button,} from 'native-base';
import axios from 'axios'
 

export default function Myform({navigation}) {
     const [nom,setNom]=useState('');
     const [email,setEmail]=useState('');
     const [tel,setTel]=useState('');
     const [entre,setEntre]=useState('');
    
     const envoyer=()=>{
     
       axios.post('http://localhost/Api/Api/', {
        name: nom,
        email: email,
        msg:tel +' '+entre

      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
      console.log(nom)
     }
 return (
            <Container>

            <Content>

            <Form>
                <Item floatingLabel style={{borderColor:'coral'}}>
              <Label>Nom</Label>
              <Input 
              value={nom}
              onChangeText={(val)=>setNom(val)} />
            </Item>
            <Item floatingLabel style={{borderColor:'coral'}} >
              <Label>Email</Label>
              <Input 
              value={email}
              keyboardType='email-address'
              onChangeText={(val)=>setEmail(val)}
              />
            </Item>
            <Item floatingLabel style={{borderColor:'coral'}} >
              <Label>Telephone</Label>
              <Input 
              value={tel}
              onChangeText={(val)=>setTel(val)}
                keyboardType='phone-pad'
              />
            </Item>
            <Item floatingLabel style={{borderColor:'coral',marginBottom:10}} >
              <Label>Entreprise</Label>
              <Input 
              value={entre}
              onChangeText={(val)=>setEntre(val)}
              />
            </Item>
            <View  style={{paddingLeft:20,marginTop:15}}>
            <Button rounded style={{backgroundColor:'#202626',width:300,justifyContent:'center',}} 
                onPress={envoyer}
                >
                <Text style={{fontSize:18, fontWeight:'bold'}}>Envoyer</Text>
              </Button>
              </View>
      </Form>
    </Content>
  </Container>
  )

}
