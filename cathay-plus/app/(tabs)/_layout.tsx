import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="explore"
        options={{
          title: '計劃假期',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'airplane-sharp' : 'airplane-outline'} color={color}/>
          ),
        }}
      />
      <Tabs.Screen
        name="schedule"
        options={{
          title: '我的行程',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'calendar-sharp' : 'calendar-outline'} color={color}/>
          ),
        }}
      />
       <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
       <Tabs.Screen
        name="promote"
        options={{
          title: '推廣',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'gift' : 'gift-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: '個人中心',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'person' : 'person-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
