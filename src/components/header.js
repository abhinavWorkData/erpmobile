/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native';
import colors from '../styles/colors';

const Header = props => {
  const { title, showPlus, filter } = props;
  return (
    <View style={styles.headerContainer}>
      <View style={styles.inside}>
        {/* <View style={styles.headerRight}>
          <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
            <Image
              source={require('../../images/menu.png')}
              resizeMode="contain"
              style={styles.image}
            />
          </TouchableOpacity>
        </View> */}
        <View style={styles.equalWidth}>
          <Text style={styles.text}>{title}</Text>
        </View>
        <TouchableOpacity onPress={props.onPress} style={styles.equalWidth}>
          {showPlus && (
            <Image
              source={require('../../images/plus.png')}
              resizeMode="contain"
              style={styles.image}
            />
          )}
          {filter && (
            <Image
              source={require('../../images/filter.png')}
              resizeMode="contain"
              style={styles.image}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: Platform.OS === 'android' ? 60 : 100,
    backgroundColor: colors.white,
    padding: Platform.OS === 'android' ? 0 : 15,
    paddingTop: Platform.OS === 'android' ? 0 : 50,
    paddingHorizontal: 10,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  inside: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
  headerRight: {
    flexDirection: 'row',
    width: '33.33%',
  },
  image: {
    width: 20,
    tintColor: colors.primary,
    alignSelf: 'flex-end',
  },
  text: {
    color: colors.primary,
    fontSize: 17,
    fontWeight: 'bold',
    lineHeight: 20,
    letterSpacing: 0.6,
    textAlign: 'center',
  },
  equalWidth: {
    width: '33.33%',
  },
});

export default Header;
