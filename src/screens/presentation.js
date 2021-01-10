import React,{useState} from 'react'
import {  View ,Image,Dimensions,ScrollView,TouchableOpacity} from 'react-native';
import { Container,  Content, Card, CardItem, Body, Text,Button,Icon} from 'native-base';
const {width,height}=Dimensions.get('window')
export default function Presentation({navigation}) {
    
    return (
        <Container>
    <Content style={{ flexDirection:'row' ,}}>
    <ScrollView>
        <Card>
              <CardItem>
                  <Body>
                  <Image source={ require('../images/Fer4.jpg')} style={{width:width-30,height:200,marginRight:10}} />
                <View  style={{paddingLeft:20,marginTop:15}}>
                  <Button rounded bordered style={{backgroundColor:'transparent',borderColor:'coral',width:300,justifyContent:'center',}} 
                      onPress={()=> navigation.navigate("produit")}
                      >
                      <Text style={{fontSize:18, fontWeight:'bold',color:'coral'}}>Fer FE400</Text>
                    </Button>
          </View>
                  </Body>
                </CardItem>
                
          </Card>
          <Card>
          
                <CardItem>
                  <Body>
                  <Image source={ require('../images/fer5.jpeg')} style={{width:width-30,height:200,marginRight:10}} />
                 <View  style={{paddingLeft:20,marginTop:15}}>
                  <Button rounded bordered  style={{backgroundColor:'transparent',borderColor:'coral',width:300,justifyContent:'center',}}
                    onPress={()=> navigation.navigate("fer5")}
                  >
                <Text style={{fontSize:18, fontWeight:'bold',color:'coral'}}>Fer FE500A</Text>
                  </Button>
                  </View>
                      </Body>
                    </CardItem>
                    </Card>
                    <Card>
                <CardItem>
                  <Body>
                  <Image source={ require('../images/fer5b.jpg')} style={{width:width-30,height:200,marginRight:10}} />
                 <View  style={{paddingLeft:20,marginTop:15}}>
                  <Button rounded bordered  style={{backgroundColor:'transparent',borderColor:'coral',width:300,justifyContent:'center',}}
                    onPress={()=> navigation.navigate("fer5")}
                  >
                        <Text style={{fontSize:18, fontWeight:'bold',color:'coral'}}>Fer FE500B</Text>
                      </Button>
                      </View>
               </Body>
                </CardItem>
                
          </Card>
         
          <Card>
                <CardItem>
                  <Body>
                  <Image source={ require('../images/pointes.png')} style={{width:width-30,height:200,marginRight:10}} />
                     
                <View  style={{paddingLeft:20,marginTop:15}}>
                        <Button rounded bordered  style={{backgroundColor:'transparent',borderColor:'coral',width:300,justifyContent:'center',}}
                        onPress={()=> navigation.navigate("point")}
                        >
                    <Text style={{fontSize:18, fontWeight:'bold',color:'coral'}}>Pointes</Text>
                  </Button>
                  </View>
                  </Body>
                </CardItem>
                
          </Card>
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
                onPress={()=> navigation.navigate("Apropos")}
    >
        <Icon name="plus" style={{color:'white'}} size={30}  />
  </TouchableOpacity>
        
       
          
        
       
     
    </Content>
  </Container>
)
}
