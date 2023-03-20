import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as RootNavigation from '../navigation/RootNavigation';

const ListItem = ({ item, onPress, selectedItems }) => {
    const [selected, setSelected] = useState(false);
  
    useEffect(() => {
      setSelected(selectedItems.includes(item.id));
    }, [selectedItems]);
  
    const handlePress = () => {
      setSelected(true);
      onPress(item.id);
      RootNavigation.navigate(item);
    };
  
    return (
      <TouchableOpacity onPress={handlePress}>
        <View style={[styles.item, selected && styles.selectedItem]}>
          <Text style={styles.itemText}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

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
  
  export default ListItem;