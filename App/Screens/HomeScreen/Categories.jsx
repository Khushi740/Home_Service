import { View,TouchableOpacity, Text,StyleSheet,FlatList,Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi'
import Heading from '../../Components/Heading';
import Colors from '../../Utils/Colors';
import {useNavigation } from '@react-navigation/native';


export default function Categories() {
  const navigation = useNavigation();
  return (
    <View style={{marginTop:10}}>
      <Heading text={'Categories'} isViewAll={true} />
    <FlatList  data={[
          { id: 1, name: 'Painting', icon: require('../../../assets/images/paintbrush.png') },
          { id: 2, name: 'Repairing', icon: require('../../../assets/images/support.png') },
          { id: 3, name: 'Shifting', icon: require('../../../assets/images/cargo-truck.png') },
          { id: 4, name: 'Cleaning', icon: require('../../../assets/images/mop (1).png') },
        ]}
    numColumns={4}
    renderItem={({item,index})=>index<=3&&(
      <TouchableOpacity style={styles.container}
      onPress={()=>navigation.push('business-list',{ categoryName: item.name })}>
        <View style={styles.iconContainer}>
          <Image  source={item.icon}
          style={{width:30,height:30}}
          />
        </View>
        <Text style={{marginTop:5,fontSize:12,fontWeight:'bold'}}>{item.name}</Text>
      </TouchableOpacity>
  )} />
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center'

  },
  iconContainer:{
    backgroundColor:Colors.lightGrey,
    padding:17,
    borderRadius:99,
    

  }
})