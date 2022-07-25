/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from 'react-native';
import {recipes} from './data/mock_data';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const FeedScreen = ({navigation}) => {
  const renderRecipe = ({item}) => (
    <TouchableWithoutFeedback
      onPress={() =>
        navigation.navigate('RecipeDetail', {
          recipeId: item.recipeId,
          title: item.title,
          image: item.photo_url,
          description: item.description,
        })
      }>
      <View style={style.container}>
        <ImageBackground
          source={{uri: item.photo_url}}
          style={style.image}
          imageStyle={{
            borderRadius: 30,
            borderColor: '#ECECEC',
            borderWidth: 1,
          }}>
          <View style={{alignItems: 'flex-end'}}>
            <TouchableHighlight>
              <MaterialCommunityIcons name="heart" color={'#fff'} size={34} />
            </TouchableHighlight>
          </View>
          <Text style={style.text}>{item.title}</Text>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <FlatList
        data={recipes}
        renderItem={renderRecipe}
        keyExtractor={item => `${item.recipeId}`}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
  image: {
    width: 350,
    height: 250,
    justifyContent: 'flex-end',
  },
  text: {
    color: 'white',
    fontSize: 30,
    backgroundColor: '#000000a0',
  },
});
export default FeedScreen;
