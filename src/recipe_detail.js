import React from 'react';
import {View, Image, Text, ScrollView, StyleSheet} from 'react-native';

export const RecipeDetail = ({route, navigation}) => {
  const {recipeId, title, image, description} = route.params;
  return (
    <View>
      <Image source={{uri: `${image}`}} style={styles.image} />
      <Text style={styles.titleText}>{title}</Text>
      <ScrollView style={styles.textContainer}>
        <Text style={styles.desText}>{description}</Text>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 250,
    justifyContent: 'flex-end',
  },
  titleText: {
    color: 'white',
    fontSize: 30,
    backgroundColor: '#000000a0',
    paddingStart: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
  textContainer: {
    paddingTop: 20,
    paddingStart: 20,
    paddingEnd: 20,
    height: 360,
  },
  desText: {
    fontSize: 15,
    textAlign: 'justify',
    fontWeight: '300',
  },
});
