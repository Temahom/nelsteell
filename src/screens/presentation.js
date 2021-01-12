import React,{useState} from 'react'
import {  View ,Image,Dimensions,ScrollView,TouchableOpacity,StyleSheet} from 'react-native';
import { Container,  Content, Card, CardItem, Body, Text,Button,Icon , Footer, FooterTab} from 'native-base';
const {width,height}=Dimensions.get('window')
export default function Presentation({navigation}) {
    
    return (
        <Container>
    <Content style={{ flexDirection:'row' ,}}>
    <ScrollView>
    <TouchableOpacity
    onPress={()=> navigation.navigate("produit")}
    >
        <Card>
              <CardItem>
                  <Body>
                  <Image source={ require('../images/Fer4.jpg')} style={{width:width-30,height:200,marginRight:10}} />
                <View  style={{paddingLeft:20,marginTop:15}}>
                  
                      <Text style={{fontSize:18, fontWeight:'bold',color:'coral'}}>Fer FE400</Text>
                  
          </View>
                  </Body>
                </CardItem>
                
          </Card>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=> navigation.navigate("fer5")}
          >
          <Card>
          
                <CardItem>
                  <Body>
                  <Image source={ require('../images/fer5.jpeg')} style={{width:width-30,height:200,marginRight:10}} />
                 <View  style={{paddingLeft:20,marginTop:15}}>
                  
                <Text style={{fontSize:18, fontWeight:'bold',color:'coral'}}>Fer FE500A</Text>
               
                
              
                  </View>
                      </Body>
                    </CardItem>
                    </Card>
                    </TouchableOpacity>
                    <TouchableOpacity
                     onPress={()=> navigation.navigate("fer5")}
                    >
                    <Card>
                <CardItem>
                  <Body>
                  <Image source={ require('../images/fer5b.jpg')} style={{width:width-30,height:200,marginRight:10}} />
                 <View  style={{paddingLeft:20,marginTop:15}}>
                  
                        <Text style={{fontSize:18, fontWeight:'bold',color:'coral'}}>Fer FE500B</Text>
                      
                      </View>
               </Body>
                </CardItem>
                
          </Card>
          </TouchableOpacity>
          <TouchableOpacity
          onPress={()=> navigation.navigate("point")}
          >
          <Card>
                <CardItem>
                  <Body>
                  <Image source={ require('../images/pointes.png')} style={{width:width-30,height:200,marginRight:10}} />
                     
                <View  style={{paddingLeft:20,marginTop:15}}>
                       
                    <Text style={{fontSize:18, fontWeight:'bold',color:'coral'}}>Pointes</Text>
    
                  </View>
                  </Body>
                </CardItem>
                
          </Card>
          </TouchableOpacity>
          </ScrollView>
          <TouchableOpacity
              style={{
                  borderWidth:1,
                  borderColor:'coral',
                  alignItems:'center',
                  justifyContent:'center',
                  width:70,
                  position: 'absolute',                                          
                  bottom: 10,                                                    
                  right: 22,
                  height:70,
                  backgroundColor:'coral',
                  borderRadius:100,
                }}
                onPress={()=> navigation.navigate("myform")}
    >
        <Icon name="arrow-forward" style={{color:'white'}} size={30}  />
  </TouchableOpacity>
        
       
          
        
       
     
    </Content>
    <Footer style={{backgroundColor:'coral'}}>
          <FooterTab style={{backgroundColor:'coral'}}>
            <Button
             onPress={()=> navigation.navigate("Accueil")}
            >
              <Icon style={{color:'white'}} name="home" />
            </Button>
            <Button 
            onPress={()=> navigation.navigate("myform")}
            >
              <Icon style={{color:'white'}} name="cart" />
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

 