import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import Heading from '../../Components/Heading';
import Colors from '../../Utils/Colors';


const sampleData = [
    {
      id: 1,
      employeeName: 'John Doe',
      workDone: 'Painting ',
      image: require('../../../assets/images/painting.jpg'),
    },
    {
      id: 2,
      employeeName: 'Jane Smith',
      workDone: 'Repairing ',
      image: require('../../../assets/images/Repairing.png'),
    },
    {
      id: 3,
      employeeName: 'Michael Johnson',
      workDone: 'Shifting ',
      image: require('../../../assets/images/Shifting.png'),
    },
    {
      id: 4,
      employeeName: 'Emily Brown',
      workDone: 'Cleaning ',
      image: require('../../../assets/images/HouseCleaning.png'),
    }
  ];
  
const BusinessList = () => {
  return (
    <View style={styles.container}>
        <Heading text={"Latest Businesses"} isViewAll={true}/>
      <FlatList
        data={sampleData}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={styles.employeeName}>{item.employeeName}</Text>
              <Text style={styles.workDone}>{item.workDone}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 5,
    padding: 10,
    elevation: 5,
    marginTop:10
  },
  image: {
    width: 180,
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardContent: {
    //alignItems: 'center',
  },
  employeeName: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingBottom:8
  },
  workDone: {
    fontSize: 14,
   color:Colors.primary,
   backgroundColor:Colors.lightPrimary,
   borderRadius:5,
   alignSelf:'flex-start',
   paddingHorizontal:7,
   paddingHorizontal:7
  },
});

export default BusinessList;
