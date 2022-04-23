/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import colors from '../styles/colors';
import Header from '../components/headerComponent';
import TableList from '../components/contractTableList';

const contractExpire = props => {
  return (
    <View style={styles.listPercentageContainer}>
      <Header icon={props.icon} title={props.title} color={props.title} />
      {props.list &&
        props.list.length > 0 &&
        props.list.map((item, index) => {
          return <TableList key={index} data={item} />;
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  listPercentageContainer: {
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 2,
    backgroundColor: colors.white,
    marginTop: 20,
    marginHorizontal: 5,
    borderTopWidth: 0,
    borderColor: colors.darkGey,
    marginBottom: 10,
  },
});

export default contractExpire;
