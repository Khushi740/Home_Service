import { View, Text, Image ,StyleSheet,TextInput} from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import Colors from '../../Utils/Colors';
import { FontAwesome } from '@expo/vector-icons';


export default function Header() {
    const{user, isLoading} = useUser();
  return user&& (
    <View style={styles.container}>
        <View style={styles.profileMainContainer}>
      <View  style={styles.profileContainer}>
        <Image source={{uri: user?.imageUrl}}
        style={styles.userImage}/>
        <View>
            <Text style={{color:Colors.white}} >Welcome,</Text>
            <Text style={{color:Colors.white,fontSize:20,fontFamily:'outfit'}}>{user?.fullName}</Text>
        </View>
      </View>
      <FontAwesome name='bookmark-o' size={27} color="white" />
      </View>
     {/*searchbar */}
     <View style={styles.searchBarContainer}>
        <TextInput placeholder='Search' style={styles.textInput} />
        <FontAwesome name='search'
         size={24} color={Colors.primary}
         style={styles.searchbtn} />
     </View>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding:20,
        paddingTop:45,
        backgroundColor:Colors.primary,
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25

    },
    userImage:{
        width:45,
        height:45,
        borderRadius:99
    },
    profileMainContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'

    },
    profileContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:10
    },
    textInput:{
        padding:7,
        paddingHorizontal:16,
        backgroundColor:Colors.white,
        width:"85%",
        borderRadius:8,
        fontSize:16

    },
    searchBarContainer:{
        marginTop:15,
        display:'flex',
        flexDirection:'row',
        gap:10,
        marginBottom:10
    },
    searchbtn:{
        backgroundColor:Colors.white,
        padding:10,
        borderRadius:8,
    }

})