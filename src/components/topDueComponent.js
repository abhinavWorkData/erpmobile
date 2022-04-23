/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../styles/colors';
import Header from '../components/headerComponent';

const topDue = props => {
  return (
    <View style={styles.listPercentageContainer}>
      <Header title={props.title} color={props.title} />
      {props.list &&
        props.list.length > 0 &&
        props.list.map((item, index) => {
          return (
            <View key={index} style={styles.topDueContainer}>
              <View key={index} style={styles.titleContainer}>
                <Text style={styles.titleText}>{item.name}</Text>
                <Text style={styles.dateText}>{item.date}</Text>
                <View style={styles.valueContainer}>
                  <Text style={styles.valueText}>
                    {' '}
                    {item.name.includes('#') ? 'Due Amount' : ''}{' '}
                    <Text style={styles.infoText}> {item.info1}</Text>
                    {item.name.includes('#') ? '' : ' Task Remain'}
                  </Text>
                </View>
              </View>
            </View>
          );
        })}
    </View>
  );
};

const styles = StyleSheet.create({
  topDueContainer: {
    borderBottomWidth: 0.3,
    borderColor: colors.black,
  },
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
    borderRadius: 10,
  },
  titleContainer: {
    flexDirection: 'column',
    marginVertical: 10,
    fontSize: 16,
  },
  titleText: {
    marginLeft: 10,
    fontSize: 18,
    width: 'auto',
    fontWeight: 'bold',
    color: colors.darkGey,
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
  },
  dateText: {
    marginLeft: 10,
    width: 'auto',
    color: colors.darkGey,
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    fontSize: 12,
    fontWeight: 'normal',
    marginTop: 5,
  },
  valueContainer: {
    position: 'absolute',
    right: 10,
  },
  valueText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.darkGey,
    position: 'absolute',
    right: 1,
  },
  infoText: {
    fontSize: 16,
    fontWeight: 'bold',
    position: 'absolute',
    right: 1,
    color: colors.black,
  },
});

export default topDue;
