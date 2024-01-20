import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs, withLayoutContext } from 'expo-router';
import { Platform, Pressable, useColorScheme, Text, View } from 'react-native';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
  MaterialTopTabNavigationEventMap,
} from '@react-navigation/material-top-tabs';

import Colors from '../../../constants/Colors';
import LogoIcon from '../../../components/icons/Logo';
import { COLORS } from '../../../constants/theme';
import { ParamListBase, TabNavigationState } from '@react-navigation/native';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

const { Navigator } = createMaterialTopTabNavigator()

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

export default function TopTabLayout() {
  const tabBarOptions = {
    activeTintColor: 'white',
    inactiveTintColor: 'black',
    indicatorStyle: { backgroundColor: 'red', height: '100%' },
    pressOpacity: 1,
  }

  return (
    <MaterialTopTabs
      screenOptions={({ route }) => ({
        tabBarLabel: route.name,
        tabBarActiveTintColor: 'orange',
        tabBarInactiveTintColor: 'gray',
        tabBarIndicatorStyle: {
          width: 100,
          backgroundColor: 'orange',
          height: 4,
          shadowColor: 'black',
        },
        tabBarScrollEnabled: true,
        tabBarLabelStyle: { fontSize: 16 },
        // tabBarItemStyle: { width: 150, },
        tabBarStyle: {
          // backgroundColor: '#c21a0c',
        },
        tabBarItemStyle: {
          width: 100,
        }

      })}


    >
      <MaterialTopTabs.Screen name="index" options={{
        title: "Notify"

      }} />
      <MaterialTopTabs.Screen
        name="two"
        options={{
          title: 'Two',

        }}
      />
    </MaterialTopTabs>
  );
}

