import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FeedScreen from './feeds';
import {RecipeDetail} from './recipe_detail';

const Stack = createNativeStackNavigator();

const Home = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feeds" component={FeedScreen} />
      <Stack.Screen name="RecipeDetail" component={RecipeDetail} />
    </Stack.Navigator>
  );
};
export default Home;
