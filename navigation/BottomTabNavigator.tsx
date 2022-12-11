import { AntDesign as Icon } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'
import { StyleSheet } from 'react-native'

import Colors from '../constants/Colors'
import useColorScheme from '../hooks/useColorScheme'
import HomeScreen from '../screens/Home'
import PlayScreen from '../screens/Play'
import SettingsScreen from '../screens/Settings'
import CartoesScreen from '../screens/Cartoes'
import StatsScreen from '../screens/Stats'
import { BottomTabParamList, HomeParamList, SettingsParamList, StatsParamList } from '../types'

const BottomTab = createBottomTabNavigator<BottomTabParamList>()

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme()

  return (
    <BottomTab.Navigator
      initialRouteName="Início"
      screenOptions={{ tabBarActiveTintColor: Colors[colorScheme].tint, headerShown: false }}
    >
      <BottomTab.Screen
        name="Início"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Categorias"
        component={StatsNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="filter" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Sobre"
        component={SettingsNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="phone" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Cartões"
        component={CartoesNavigator}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="idcard" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  )
}

function TabBarIcon(props: { name: React.ComponentProps<typeof Icon>['name']; color: string }) {
  return <Icon size={25} style={styles.tabBarIcon} {...props} />
}

const HomeStack = createStackNavigator<HomeParamList>()

function TabOneNavigator() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Group
        screenOptions={{
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
          headerTintColor: Colors.light.white,
        }}
      >
        <HomeStack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            headerTitle: 'Início',
          }}
        />
        <HomeStack.Screen
          name="PlayScreen"
          component={PlayScreen}
          options={{
            headerBackTitle: 'Back',
            headerTitle: 'Produto',
          }}
        />
      </HomeStack.Group>
    </HomeStack.Navigator>
  )
}

const StatsStack = createStackNavigator<StatsParamList>()

function StatsNavigator() {
  return (
    <StatsStack.Navigator>
      <StatsStack.Screen
        name="StatsScreen"
        component={StatsScreen}
        options={{
          headerTitle: 'Categorias',
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
        }}
      />
    </StatsStack.Navigator>
  )
}

const SettingsStack = createStackNavigator()

function SettingsNavigator() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{
          headerTitle: 'Sobre',
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
        }}
      />
    </SettingsStack.Navigator>
  )
}

const CartoesStack = createStackNavigator()

function CartoesNavigator() {
  return (
    <CartoesStack.Navigator>
      <CartoesStack.Screen
        name="CartoesScreen"
        component={CartoesScreen}
        options={{
          headerTitle: 'Sobre',
          headerStyle: styles.header,
          headerTitleStyle: styles.headerTitle,
        }}
      />
    </CartoesStack.Navigator>
  )
}

const styles = StyleSheet.create({
  headerTitle: {
    fontWeight: '600',
    color: Colors.light.white,
    fontSize: 16,
  },
  header: {
    backgroundColor: Colors.light.primary,
  },
  tabBarIcon: {
    marginBottom: -3,
  },
})
