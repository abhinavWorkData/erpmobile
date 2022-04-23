/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../styles/colors';
import * as Progress from 'react-native-progress';
import { Dimensions } from 'react-native';
import Header from '../components/headerComponent';
import { convertClassNameIntoNative } from '../constants/constant';
import BootstrapStyleSheet from 'react-native-bootstrap-styles';

const ListPercentage = props => {
  const bootstrapStyleSheet = new BootstrapStyleSheet();
  const { s } = bootstrapStyleSheet;
  const windowWidth = Dimensions.get('window').width;
  return (
    <View style={styles.listPercentageContainer}>
      <Header icon={props.icon} title={props.title} color={props.title} />
      {props.list &&
        props.list.length > 0 &&
        props.list.map((item, index) => {
          if (item.color) {
            const color = convertClassNameIntoNative(item.color && item.color);
            var colorToDisplay = s[color].backgroundColor;
          }
          return (
            <View key={index}>
              <View key={index} style={styles.titleContainer}>
                <Text style={styles.titleText}>{item.status}</Text>
                <Text style={styles.titleText}>{item.total}</Text>
                <View style={styles.valueContainer}>
                  <Text style={styles.valueText}>{item.percentage} %</Text>
                </View>
              </View>
              <Progress.Bar
                color={colorToDisplay}
                style={styles.progress(item.percentage)}
                progress={item.percentage / 100}
                borderColor={colorToDisplay}
                borderWidth={0.6}
                width={windowWidth - 50}
                indeterminateAnimationDuration={3000}
              />
            </View>
          );
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
    borderRadius: 10,
  },
  progress: percentage => ({
    marginHorizontal: 20,
    marginBottom: 10,
    display: percentage > 0 ? 'flex' : 'flex',
  }),
  titleContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    fontSize: 16,
  },
  titleText: {
    marginLeft: 10,
    fontSize: 16,
    width: 'auto',
    color: colors.darkGey,
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
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
});

export default ListPercentage;
