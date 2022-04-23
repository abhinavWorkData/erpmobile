/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import colors from '../styles/colors';
import Header from '../components/headerComponent';

const ChartPresentation = props => {
  const chartConfig = {
    backgroundGradientFrom: colors.white,
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: colors.white,
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => colors.black,
    propsForLabels: {
      fontSize: '9px',
    },
  };
  return (
    <View style={styles.childContainer}>
      <Header title={props.title} color={props.color} />
      <BarChart
        style={styles.barChart}
        data={props.data}
        width={Dimensions.get('window').width - 30}
        height={400}
        chartConfig={chartConfig}
        yAxisLabel="%"
        withCustomBarColorFromData={true}
        borderColor={colors.primary}
        flatColor={true}
        withInnerLines={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  childContainer: {
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 2,
    backgroundColor: colors.white,
    marginTop: 20,
    marginHorizontal: 5,
    borderTopWidth: 0.5,
    borderColor: colors.darkGey,
    borderRadius: 10,
  },
  barChart: {
    marginHorizontal: 10,
  },
});

export default ChartPresentation;
