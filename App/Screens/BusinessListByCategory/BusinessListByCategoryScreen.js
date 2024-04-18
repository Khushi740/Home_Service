import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import data from '../../Utils/data'; // Adjust the import path as needed

export default function BusinessListByCategoryScreen() {
  const { categoryName } = useRoute().params;
  const navigation = useNavigation();
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const category = data;
    console.log (data.tasks)
    if (category) {
      setFilteredData(category.tasks);
    } else {
      setFilteredData([]);
    }
  }, [categoryName]);

  return (
    <View style={{ flex: 1, padding: 20, paddingTop: 30 }}>
      <TouchableOpacity
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
        onPress={() => navigation.goBack()}>
        <Ionicons name='arrow-back-outline' size={30} color="black" />
        <Text style={{ fontSize: 25, fontWeight: 'bold' }}> {categoryName}</Text>
      </TouchableOpacity>
      <FlatList
        data={filteredData}
        renderItem={({ item }) => (
          <View>
            <Text>{item.task}</Text>
            <Text>{item.address}</Text>
            {data.map(dummy=>{
              dummy.name
            })}
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
