/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView, RefreshControl } from 'react-native';
import ListPercentage from '../../components/ListPercentage';
import ChartPresentation from '../../components/chartPresentation';
import CardComponent from '../../components/cardComponent';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getUserProfile } from './dashboard.state';
import Loader from '../../components/loader';
import colors from '../../styles/colors';
import TopDue from '../../components/topDueComponent';
import Table from '../../components/contractExpireComponent';
import Header from '../../components/header';
import LinearGradient from 'react-native-linear-gradient';

const DashBoard = props => {
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    props.getUserProfile();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const onRefresh = () => {
    setRefreshing(true);
    props.getUserProfile();
    setRefreshing(false);
  };
  const getLabels = () => {
    let labels = [];
    props.userData &&
      props.userData?.charts &&
      props.userData?.charts.length > 0 &&
      props.userData?.charts[0]?.index &&
      props.userData?.charts[0]?.index.length > 0 &&
      props.userData?.charts[0]?.index.map(item => {
        labels.push(item.key);
      });
    return labels;
  };
  const getData = () => {
    let labels = [];
    props.userData &&
      props.userData?.charts &&
      props.userData?.charts.length > 0 &&
      props.userData?.charts[0]?.index &&
      props.userData?.charts[0]?.index.length > 0 &&
      props.userData?.charts[0]?.index.map(item => {
        labels.push(item.value);
      });
    return labels;
  };
  const data = {
    labels: getLabels(),
    datasets: [
      {
        data: getData(),
        colors: [
          (opacity = 1) => '#11CEEF',
          (opacity = 1) => '#5E72E4',
          (opacity = 1) => '#172B4D',
          (opacity = 1) => '#1174EE',
          (opacity = 1) => '#1196EF',
        ],
      },
    ],
  };
  if (props.loading) {
    return <Loader size="large" color={colors.primary} style={styles.loader} />;
  }
  return (
    <LinearGradient
      style={{ height: '100%' }}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      colors={[colors.primary, colors.white]}>
      <Header showPlus={false} title="Dashboard" {...props} />
      <ScrollView
        refreshControl={
          <RefreshControl
            tintColor={colors.primary}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        style={styles.safeAreaView}>
        <View style={styles.configContainer}>
          {props.userData.cards &&
            props.userData.cards.length > 0 &&
            props.userData.cards.map((item, index) => {
              if (item.display) {
                return <CardComponent key={index} item={item} />;
              }
            })}
        </View>
        {props.userData.overview &&
          props.userData.overview.length > 0 &&
          props.userData.overview.map((item, index) => {
            return (
              <ListPercentage
                key={index}
                icon={item.icon}
                color={item.color}
                title={item.title}
                list={item.status}
              />
            );
          })}

        {props.userData.top_dues &&
          props.userData.top_dues.length > 0 &&
          props.userData.top_dues.map((item, index) => {
            if (item.display) {
              return <TopDue key={index} title={item.title} list={item.data} />;
            }
          })}

        <ChartPresentation
          color={colors.project}
          title="Project Status"
          data={data}
        />
        {props.userData.tables &&
          props.userData.tables.length > 0 &&
          props.userData.tables.map((item, index) => {
            if (item.display) {
              if (item.data.length > 0) {
                return (
                  <Table key={index} title={item.title} list={item.data} />
                );
              }
            }
          })}
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    paddingBottom: 20,

    height: '100%',
  },
  loader: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  configContainer: {
    paddingTop: 10,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default compose(
  connect(
    state => ({
      loading: state.dashboard.loading,
      userData: state.dashboard.userData,
    }),
    dispatch => ({
      getUserProfile: () => dispatch(getUserProfile()),
    }),
  ),
)(DashBoard);
