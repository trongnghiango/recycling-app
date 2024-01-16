import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Platform, Pressable, useColorScheme } from 'react-native';

import Colors from '../../constants/Colors';
import LogoIcon from '../../components/icons/Logo';
import { View } from '../../components/Themed';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarStyle: {
          height: 60,
          backgroundColor: 'orange',
          paddingBottom: 8,
          shadowColor: "#000000",
          shadowOffset: {
            width: 7,
            height: -8,
          },
          shadowOpacity: 1,
          shadowRadius: 12,
          elevation: -12,

        },
        tabBarItemStyle: { backgroundColor: 'transparent' },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerTitleAlign: 'center',
          headerLeftContainerStyle: { flex: 1, justifyContent: 'center', },
          headerLeft: () => (
            <View style={{ padding: 8 }}>
              <LogoIcon />
            </View>

          ),
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Article',
          headerTitleStyle: { fontSize: 32 },
          headerTitleAlign: 'center',
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />

      {/* <Tabs.Screen
        name="plus"
        options={{
          title: '',
          // headerTitleStyle: { fontSize: 32 },
          // headerTitleAlign: 'center',
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{
                alignContent: 'center',
                alignItems: 'center',
                backgroundColor: Colors.light.background,
                width: Platform.OS === 'ios' ? 50 : 60,
                height: Platform.OS === 'ios' ? 50 : 60,
                borderRadius: Platform.OS === 'ios' ? 25 : 30,
              }}>

              </View>
            );
          },
        }}
      /> */}

      <Tabs.Screen
        name="notification"
        options={{
          title: 'Notification',
          tabBarIcon: ({ color }) => <TabBarIcon name="bell" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}
