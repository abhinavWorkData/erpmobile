/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../styles/colors';

const contractTable = props => {
  return (
    <View style={styles.listPercentageContainer}>
      <View style={styles.fieldContainer}>
        <Text style={styles.optionText}>Subject :</Text>
        <Text style={styles.titleText}>{props.data.subject}</Text>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.optionText}>Client : </Text>
        <Text style={styles.titleText}>{props.data.client}</Text>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.optionText}>Contract type : </Text>
        <Text style={styles.titleText}>{props.data['contract type']} </Text>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.optionText}>Start Date : </Text>
        <Text style={styles.titleText}>{props.data['start date']}</Text>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.optionText}>End Date : </Text>
        <Text style={styles.endDateText}>{props.data['end date']} </Text>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.optionText}>Contract Value : </Text>
        <Text style={styles.contractValueText}>
          {props.data['contract value']}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  fieldContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.black,
    width: '40%',
  },
  listPercentageContainer: {
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 1,
    backgroundColor: colors.white,
    padding: 10,
    borderTopWidth: 0,
    borderColor: colors.darkGey,
  },
  titleText: {
    marginVertical: 5,
    fontSize: 14,
    width: 'auto',
    color: colors.darkGey,
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
  },
  endDateText: {
    marginVertical: 5,
    fontSize: 14,
    width: 'auto',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    color: colors.redPink,
    fontWeight: 'bold',
  },
  contractValueText: {
    marginVertical: 5,
    fontSize: 14,
    width: 'auto',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
    color: colors.darkGreen,
    fontWeight: 'bold',
  },
});

export default contractTable;
