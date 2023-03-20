import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import ProgressBar from '../components/ProgressBar';
import ListItem from '../components/ListItem';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function HomeScreen(props) {

  const userId = props["extraData"]["email"]

  const items1 = [
      { id: 1, name: 'Osaka' },
      { id: 2, name: 'Tokyo' },
      { id: 3, name: 'Hokkaido' }   
    ];

    const items2 = [   
      { id: 4, name: 'San Francisco' },
      { id: 5, name: 'Los Angeles' },
      { id: 6, name: 'New York' }
    ];

    const items3 = [
      { id: 7, name: 'Stockholm' },
      { id: 8, name: 'Kiruna' }
    ];

    const [selectedItems, setSelectedItems] = useState([]);

    useEffect(() => {
      // Load saved progress on component mount
      loadProgress();
    }, []);
  
    useEffect(() => {
      // Save progress whenever it changes
      saveProgress();
    }, [selectedItems]);
  
    const handleItemPress = (itemId) => {
  
      if (!selectedItems.includes(itemId)) {
        setSelectedItems([...selectedItems, itemId]);
      }
  
  
  
    };
  
    const saveProgress = async () => {
      try {
        await AsyncStorage.setItem(JSON.stringify(userId), JSON.stringify(selectedItems));
      } catch (error) {
        console.error(error);
      }
    };
  
    const loadProgress = async () => {
      try {
        const value = await AsyncStorage.getItem(JSON.stringify(userId));
        if (value !== null) {
          setSelectedItems(JSON.parse(value));
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    var fraction = 100 / (items1.length + items2.length + items3.length)

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#fff'
      },
      item: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5
      },
      selectedItem: {
        backgroundColor: '#00c0ff',
        borderColor: '#00c0ff'
      },
      itemText: {
        fontSize: 16,
        color: '#333'
      },
      progressBarContainer: {
        marginTop: 20,
        padding: 10
      }
    });

        



        return (
            <ScrollView>
              <View style={styles.progressBarContainer}>
              <ProgressBar progress={selectedItems.length * fraction} barColor='#ccc' fillColor='#00c0ff' />
            </View>
            <Text>Chapter Asia</Text>
              {items1.map((item) => (
                      <ListItem key={item.id} item={item} onPress={handleItemPress} selectedItems={selectedItems} />
                    ))}

            <Text>Chapter America</Text>

              {items2.map((item) => (
                      <ListItem key={item.id} item={item} onPress={handleItemPress} selectedItems={selectedItems} />
                    ))}

            <Text>Chapter Europe</Text>

              {items3.map((item) => (
                      <ListItem key={item.id} item={item} onPress={handleItemPress} selectedItems={selectedItems} />
                    ))}
    
            </ScrollView>
            
          );
    
}