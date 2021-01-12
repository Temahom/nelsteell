import React,{useState} from 'react'
import {  View } from 'react-native';
import { Container, Content, Form,Item, Input, Label,Text,Button, Footer, FooterTab,Icon } from 'native-base';
import axios from 'axios'
 

export default function Myform({navigation}) {
     const [nom,setNom]=useState('');
     const [email,setEmail]=useState('');
     const [tel,setTel]=useState('');
     const [entre,setEntre]=useState('');
     let _data = {
      name: nom,
      email: email,
      msg:tel +' '+entre
    }
     const envoyer=()=>{
      
      axios({
        method: 'post',
        url: 'http://192.168.1.13/Api/Api/',
        data: {       
      "name": nom,
      "email": email,
      "msg":tel +' '+entre
        }
      }).then(response=>{
        console.log(response)
      });

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
    <Footer>
          <FooterTab style={{backgroundColor:'coral'}}>
            <Button
             onPress={()=> navigation.navigate("Accueil")}
            >
              <Icon style={{color:'white'}} name="home" />
            </Button>
            <Button active style={{backgroundColor:'coral'}}
            onPress={()=> navigation.navigate("myform")}
            >
              <Icon style={{color:'white'}} active name="cart" />
            </Button>
            
            <Button
            onPress={()=> navigation.navigate("Apropos")}
            >
              <Icon style={{color:'white'}} name="person" />
            </Button>
          </FooterTab>
        </Footer>
  </Container>
  )

}
