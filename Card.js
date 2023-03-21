import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

const Card = props => {
  const {name, bio, image} = props.users;
  return (
    <View style={styles.card}>
      <ImageBackground
        source={{
          uri: image,
        }}
        style={styles.image}>
        <View style={styles.info}>
          <Text style={styles.name}> {name} </Text>
          <Text style={styles.bio}>{bio}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '85%',
    width: '95%',
    //flex: 1,
    backgroundColor: 'red',
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },

  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
    backgroundColor: 'purple',
    borderRadius: 20,
  },

  name: {
    color: 'white',
    fontWeight: 600,
    fontSize: 25,
  },
  bio: {
    color: 'white',
    fontWeight: 400,
    fontSize: 15,
    lineHeight: 25,
  },
  info: {
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 35,
    //backgroundColor: 'red',
  },
});

export default Card;
