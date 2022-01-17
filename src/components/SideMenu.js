import React, {useState} from 'react';
import {
  Image,
  ScrollView,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {DrawerItem} from '@react-navigation/drawer';
import {compose} from 'recompose';
import {connect} from 'react-redux';
import Collapsible from 'react-native-collapsible';
import {sideMenu} from '../constants/DEFAULT_SIDE_MENU';
import colors from '../styles/colors';

const SideMenu = props => {
  const [subMenuId, setSubMenuId] = useState(0);
  const showSubMenuOption = subMenu => {
    return subMenu.map((item, index) => (
      <TouchableOpacity
        key={index}
        onPress={() => {
          props.navigation.closeDrawer();
          props.navigation.replace(item.subComponentName);
        }}
        style={styles.subMenuText}>
        <Image style={styles.componentImage} source={item.icon} />
        <Text style={{alignSelf: 'center', marginLeft: 5}}>
          {item.subComponentName}
        </Text>
      </TouchableOpacity>
    ));
  };
  return (
    <SafeAreaView style={styles.safeAreaViewContainer}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Image
            resizeMode="contain"
            source={require('../../images/drawerImage.jpeg')}
            style={styles.image}
          />
        </View>
        <View style={styles.sideMenuContainer}>
          {sideMenu.map((menu, index) => {
            if (menu.subMenu) {
              return (
                <View key={index}>
                  <DrawerItem
                    onPress={() => {
                      if (menu.componentId === subMenuId) {
                        setSubMenuId(0);
                      } else {
                        setSubMenuId(menu.componentId);
                      }
                    }}
                    label={() => (
                      <>
                        <View style={styles.componentContainer}>
                          <View style={styles.imageTextContent}>
                            <Image
                              style={styles.componentImage}
                              source={menu.icon}
                            />
                            <Text style={styles.componentName}>
                              {menu.componentName}
                            </Text>
                          </View>
                          <View>
                            <Image
                              style={styles.dropImage}
                              source={
                                subMenuId !== menu.componentId
                                  ? require('../../images/downArrow.png')
                                  : require('../../images/up-arrow.png')
                              }
                            />
                          </View>
                        </View>
                      </>
                    )}
                  />
                  <Collapsible collapsed={subMenuId !== menu.componentId}>
                    {showSubMenuOption(menu.subMenu)}
                  </Collapsible>
                </View>
              );
            } else {
              return (
                <DrawerItem
                  style={{marginVertical: 0}}
                  key={index}
                  onPress={() => {
                    if (menu.componentName === 'Logout') {
                      props.logoutUser(props.navigation);
                      props.navigation.closeDrawer();
                    } else {
                      props.navigation.closeDrawer();
                      props.navigation.replace(menu.componentName);
                    }
                  }}
                  label={() => (
                    <TouchableOpacity
                      onPress={() => {
                        if (menu.componentName === 'Logout') {
                          props.logoutUser(props.navigation);
                          props.navigation.closeDrawer();
                        } else {
                          props.navigation.closeDrawer();
                          props.navigation.replace(menu.componentName);
                        }
                      }}
                      style={styles.drawerContainer}>
                      <Image style={styles.drawerImages} source={menu.icon} />
                      <Text style={styles.drawerName}>
                        {menu.componentName}
                      </Text>
                    </TouchableOpacity>
                  )}
                />
              );
            }
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  imageContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subMenuText: {
    paddingLeft: 70,
    paddingTop: 5,
    marginBottom: 10,
    flexDirection: 'row',
  },
  image: {
    height: 50,
    width: 200,
  },
  dropImage: {
    tintColor: colors.greyBlack,
    height: 20,
    width: 20,
  },
  sideMenuContainer: {
    marginTop: 10,
  },
  componentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  componentImage: {
    width: 20,
    height: 20,
  },
  componentName: {
    fontSize: 16,
    color: 'black',
    marginLeft: 10,
  },
  drawerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  drawerImages: {
    width: 20,
    height: 20,
  },
  drawerName: {
    fontSize: 16,
    color: 'black',
    marginLeft: 10,
  },
  imageTextContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default compose(
  connect(
    state => ({}),
    dispatch => ({
      logoutUser: navigation => dispatch(logoutUser(navigation)),
    }),
  ),
)(SideMenu);
