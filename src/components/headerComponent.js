/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../styles/colors';
import { Icon } from 'galio-framework';
import { getIconName } from '../constants/constant';

const headerComponent = props => {
  const data = getIconName(props.title);
  return (
    <View style={styles.HeaderContainer(data)}>
      <View style={styles.employeeImage}>
        <Icon
          family={data.fontFamily}
          name={data.iconName}
          color={data.color}
          size={15}
        />
      </View>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  employeeImage: {
    height: 25,
    width: 25,
    backgroundColor: colors.white,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  HeaderContainer: data => ({
    flexDirection: 'row',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 2,
    height: 'auto',
    padding: 10,
    borderBottomLeftRadius: 100,
    borderTopLeftRadius: 15,
    marginBottom: 20,
    backgroundColor: data.backgroundColor,
  }),
  text: {
    marginTop: 5,
    fontSize: 25,
    marginLeft: 10,
    marginBottom: 5,
    color: colors.white,
  },
});

export default headerComponent;
