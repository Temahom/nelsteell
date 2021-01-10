import React from 'react'
import { View, Text ,StyleSheet,Dimensions, Button} from 'react-native'
import { Video } from 'expo-av';
const {width,height}=Dimensions.get('window')

export default function About() {
    return (
        <View>
       <Video
                source={require("./about.mp4")}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay
                isLooping
                style={{ width: width, height: height/2 ,marginBottom:10}}
                />

               
                <View>
                    <Text  style={styles.titre}>NELL-STEEL</Text>
                    <Text style={styles.tet}>Une des grandes forces de NELL STEEL S.A, est le respect des normes
                     du secteur imposé par le Gouvernement du Sénégal 
                     et ses exigences à l’international. </Text>
                     <View style={{margin:10,marginBottom:20}}>
                     <Button title='En Savooir Plus' color='coral' />
                     </View>
                </View>
                
            
        </View>
    )
}
var styles = StyleSheet.create({
    backgroundVideo: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    titre:{
        marginTop:10,
        fontSize:30,
        fontWeight:'bold',
        fontStyle:'italic',
        textAlign:'center',
        color:'coral',
       
    },
    tet:{
        fontSize:18,
        textAlign:'center'
    },
  });