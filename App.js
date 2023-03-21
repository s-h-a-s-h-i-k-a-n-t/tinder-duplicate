import React from 'react';
import {Text, View, StyleSheet, Image, ImageBackground} from 'react-native';
import users from './users';
import Card from './Card';

const user1 = {
  name: 'Randi',
  bio: 'Beautiful Girl',
  Image:
    'https://images.unsplash.com/photo-1536063211352-0b94219f6212?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwZ2lybHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60',
};
const App = () => {
  return (
    <View style={styles.pageContainer}>
      <Text style={styles.topHeader}>Love Finder</Text>
      <Card users={users[3]} />
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'purple',
  },
  topHeader: {
    color: '#FFFF00',
    fontFamily: 'cursive',
    fontSize: 40,
    marginBottom: 15,
  },
});

export default App;
