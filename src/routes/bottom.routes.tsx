import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import { themes } from '../global/themes';
import NovoProduto from '../pages/NovoProduto';
import SaidaProduto from '../pages/SaidaProduto';
import ControleEstoque from '../pages/ControleEstoque';

const Tab = createBottomTabNavigator();

export default function BottomRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: themes.colors.primary,
        tabBarInactiveTintColor: themes.colors.textLight,
        tabBarStyle: {
          backgroundColor: themes.colors.surface,
          borderTopColor: themes.colors.border,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}
    >
      <Tab.Screen
        name="Novo Produto"
        component={NovoProduto}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="storefront" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Saída de Produto"
        component={SaidaProduto}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="exit-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Controle de Estoque"
        component={ControleEstoque}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="file-tray-full-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}