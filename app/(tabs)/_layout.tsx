import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Platform, Pressable, useColorScheme, Text, View } from 'react-native';

import Colors from '../../constants/Colors';
import LogoIcon from '../../components/icons/Logo';
// import { View } from '../../components/Themed';
import { Image } from 'expo-image';
import Icons from '../../constants/Icons';
import { COLORS } from '../../constants/theme';

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
        // headerShown: false,
        headerBackgroundContainerStyle: { flex: 1, backgroundColor: COLORS.primary },
        tabBarStyle: {
          position: 'absolute',
          zIndex: 100,
          bottom: 0,
          left: 0,
          right: 0,
          height: 60,

          backgroundColor: 'white',
          paddingBottom: 8,
          shadowColor: "#000000",
          shadowOffset: {
            width: 7,
            height: -8,
          },
          shadowOpacity: 1,
          shadowRadius: 12,
          elevation: 3,

        },
        tabBarItemStyle: { backgroundColor: 'transparent' },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          // headerTitleAlign: 'center',
          // headerLeftContainerStyle: { flex: 1, justifyContent: 'center' },
          headerLeft: () => (
            <View style={{ padding: 8 }}>
              <LogoIcon />
            </View>

          ),

          headerStyle: {
            backgroundColor: COLORS.primary,
          },

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
          // header: () => {
          //   return <View
          //     style={{
          //       backgroundColor: COLORS.primary
          //     }}
          //   ></View>

          // },
          headerBackgroundContainerStyle: { backgroundColor: "transparent" },
          tabBarIcon: ({ focused, color }) => <View style={{
            flex: 1,
            aspectRatio: 1,
            backgroundColor: 'transparent',
            alignItems: 'center',
            paddingTop: 10,
            borderTopWidth: 2,
            borderTopColor: focused ? "orange" : "transparent"
          }}>

            <Image
              source={focused ? Icons.home : Icons.homeOutline}
              contentFit='contain'
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? "orange" : "gray",
              }}
            />
            <Text style={{
              fontSize: 13,
              paddingVertical: 4,
              color: focused ? "orange" : "black",
            }}>Home</Text>
            {/* <TabBarIcon name="home" color={color} />, */}

          </View>
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: '',
          headerTitleStyle: { fontSize: 32 },
          headerTitleAlign: 'center',
          // tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
          tabBarIcon: ({ focused, color }) => <View style={{
            flex: 1,
            aspectRatio: 1,
            backgroundColor: 'transparent',
            alignItems: 'center',
            paddingTop: 10,
            borderTopWidth: 2,
            borderTopColor: focused ? "orange" : "white"
          }}>

            <Image
              source={focused ? Icons.chat : Icons.chatOutline}
              contentFit='contain'
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? "orange" : "gray",
              }}
            />
            <Text style={{
              fontSize: 13,
              paddingVertical: 4,
              color: focused ? "orange" : "gray",
            }}>Article</Text>
            {/* <TabBarIcon name="home" color={color} />, */}

          </View>
        }}
      />

      <Tabs.Screen
        name="plus"
        options={{
          title: '',
          headerTitleStyle: { fontSize: 32 },
          headerTitleAlign: 'center',
          tabBarIcon: () => (
            <Link href="/add" asChild>
              <Pressable
                unstable_pressDelay={3000}
                android_ripple={{ color: 'green', foreground: true, radius: 20 }}
              >
                {(pressed) => (

                  <View style={{
                    opacity: pressed ? 1 : 0.5,
                    backgroundColor: COLORS.primary,
                    width: Platform.OS === 'ios' ? 60 : 70,
                    height: Platform.OS === 'ios' ? 60 : 70,
                    borderRadius: Platform.OS === 'ios' ? 30 : 35,
                    paddingBottom: 8,
                    shadowColor: "#000000",
                    shadowOffset: {
                      width: 7,
                      height: -8,
                    },
                    shadowOpacity: 1,
                    shadowRadius: 12,
                    elevation: 3,
                    marginBottom: 16,
                  }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                      <Image
                        source={Icons.maps}
                        contentFit='contain'
                        style={{
                          width: 28,
                          height: 28,
                          tintColor: "black",
                        }}
                      />
                    </View>

                  </View>

                )
                }
              </Pressable>
            </Link>
          ),

        }}
      />

      <Tabs.Screen
        name="(notification)"
        options={{
          // headerShown: false,
          title: '',
          // tabBarIcon: ({ color }) => <TabBarIcon name="bell" color={color} />,
          tabBarIcon: ({ focused, color }) => <View style={{
            flex: 1,
            minWidth: 50,
            backgroundColor: 'transparent',
            alignItems: 'center',
            paddingTop: 10,
            borderTopWidth: 2,
            borderTopColor: focused ? "orange" : "transparent"
          }}>

            <Image
              source={focused ? Icons.bell : Icons.bellOutline}
              contentFit='contain'
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? "orange" : "gray",
              }}
            />
            <Text style={{
              fontSize: 13,
              paddingVertical: 4,
              color: focused ? "orange" : "gray",
            }}>z</Text>
            {/* <TabBarIcon name="home" color={color} />, */}

          </View>
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: '',
          // tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
          tabBarIcon: ({ focused, color }) => <View style={{
            flex: 1,
            minWidth: 50,
            backgroundColor: 'transparent',
            alignItems: 'center',
            paddingTop: 10,
            borderTopWidth: 2,
            borderTopColor: focused ? "orange" : "white"
          }}>

            <Image
              source={focused ? Icons.user : Icons.userOutline}
              contentFit='contain'
              style={{
                width: 24,
                height: 24,
                tintColor: focused ? "orange" : "gray",
              }}
            />
            <Text style={{
              fontSize: 13,
              paddingVertical: 4,
              color: focused ? "orange" : "gray",
            }}>Profile</Text>
            {/* <TabBarIcon name="home" color={color} />, */}

          </View>
        }}
      />
    </Tabs>
  );
}
