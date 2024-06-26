import { View, Text,StyleSheet ,FlatList,Image} from 'react-native'
import React, { useEffect,useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi'
import Colors from '../../Utils/Colors';
import Heading from '../../Components/Heading';

export default function Slider() {
    const [slider,setSlider] = useState([]);
    useEffect(()=>{
        getSliders();

    },[])

    
    const getSliders=()=>{
        GlobalApi.getSlider().then(resp=>{
            
            setSlider(resp?.sliders)
        })
    }
  return (
    <View>
      <Heading text={"Offers For You"}/>
      <FlatList data={slider} 
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item,index})=>(
        <View style={{marginRight:12}}>
            <Image source={{uri:item?.image?.url}} 
            style={styles.sliderImage} />
        </View>
      )}/>
    </View>
  )
}

const styles = StyleSheet.create({
    
     sliderImage:{
        width:270,
        height:120,
        borderRadius:30,
        objectFit:'contain'
     }
})