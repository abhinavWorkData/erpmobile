/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import colors from '../styles/colors';
import { Dimensions } from 'react-native';
import { convertClassNameIntoNative } from '../constants/constant';
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from 'galio-framework';
import { getIconName } from '../constants/constant';

const cardComponent = props => {
  const data = getIconName(props.item.card_title);
  if (
    props.item &&
    props.item.icon_bg &&
    convertClassNameIntoNative(props.item.icon_bg).includes('#')
  ) {
    return (
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 5, y: 5 }}
        style={styles.systemOverViewItemStyleSecond}
        colors={[convertClassNameIntoNative(props.item.icon_bg), colors.white]}>
        <View styles={styles.projectContainer}>
          <Text style={styles.configTitle}>{props.item.card_title}</Text>
          <Text style={styles.configValue}>{props.item.value}</Text>
        </View>
        <View style={styles.cardImage}>
          <Icon
            family={data.fontFamily}
            name={data.iconName}
            color={data.color}
            size={15}
          />
        </View>
      </LinearGradient>
    );
  }
  return (
    <View
      key={props.index}
      style={styles.systemOverViewItemStyleFirst(props.item.color)}>
      <View styles={styles.projectContainer}>
        <Text style={styles.configTitle}>{props.item.card_title}</Text>
        <Text style={styles.configValue}>{props.item.value}</Text>
      </View>
      <Image
        resizeMode="cover"
        source={props.item.icon}
        style={styles.cardImage}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardImage: {
    height: 30,
    width: 30,
    position: 'absolute',
    right: 10,
    backgroundColor: colors.white,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  configTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginLeft: 10,
    color: colors.white,
    justifyContent: 'center',
    alignSelf: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  configValue: {
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 20,
    marginTop: 10,
    color: colors.white,
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    alignContent: 'flex-start',
    alignItems: 'flex-start',
  },
  projectContainer: {
    flexDirection: 'column',
    backgroundColor: colors.redPink,
  },
  systemOverViewItemStyleSecond: {
    width: Dimensions.get('window').width / 2 - 10,
    height: 80,
    alignSelf: 'center',
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
  },
  systemOverViewItemStyleFirst: color => ({
    width: Dimensions.get('window').width / 2 - 10,
    height: 80,
    alignSelf: 'center',
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: color,
  }),
});

export default cardComponent;
