import React from "react";
import {Button,Image,StatusBar,Dimensions} from 'react-native';
import { Container, Content, Accordion ,Text, View} from "native-base";
import Swiper from 'react-native-swiper'

const Home= ({navigation}) => {
 const {width,height}=Dimensions.get('window')
    return (
      <Container style={{justifyContent:"center"}}> 
       <StatusBar hidden={true}/>
      <Text 
      style={{fontWeight:'bold',fontSize:56,textAlign:"center",fontStyle:"italic"}}>
      <Text 
      style={{color:'coral',fontWeight:'bold',fontSize:60,textAlign:"center",fontStyle:"italic"}}
      >Nell</Text>
      Steell</Text>
        <Text style={{fontStyle:"italic",fontWeight:"bold",textAlign:'center',lineHeight:15,marginBottom:5}}>Construisez en toute sécurité !</Text>
        <Content padder>
        <Swiper 
        style={{height:430,justifyContent:'center'}} 
        autoplay={true}
        activeDotStyle={{ backgroundColor: 'transparent', borderWidth: 1, borderColor: 'coral' }}
        showsPagination={true}
        >
        <Image source={ require('../images/bg.png')} style={{width:width,height:400,position:'relative',}} />
        <Image source={ require('../images/s1.png')} style={{width:width,height:400,position:'relative',}} />
        <Image source={ require('../images/s2.png')} style={{width:width,height:400,position:'relative',}} />
        <Image source={ require('../images/s3.png')} style={{width:width,height:400,position:'relative',}} />
        
        </Swiper>
        
            <Button color='coral' title='Commencez' onPress={()=> navigation.navigate("presentation")} />
        </Content>
      </Container>
      )
 
  
}
export default Home;