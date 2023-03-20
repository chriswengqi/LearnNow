import React from 'react';
import { StyleSheet, ScrollView, View, Image, Text, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const description = 'Wandering down the path to the pond had become a daily routine. Even when the weather wasn\'t cooperating like today with the wind and rain, Jerry still took the morning stroll down the path until he reached the pond. Although there didn\'t seem to be a particular reason Jerry did this to anyone looking in from the outside, those who knew him well knew exactly what was going on. It could all be traced back to a specific incident that happened exactly 5 years previously.'

const Card = ({ imageSource, title }) => {
  return (
    <ScrollView style={styles.container}>
      <Image source={ imageSource } style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20,
  },
  image: {
    width: windowWidth,
    height: windowHeight * 0.4,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  textContainer: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default Card;