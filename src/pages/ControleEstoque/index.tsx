import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { styles } from './styles';
import { themes } from '../../global/themes';
import { Produto, obterStatus, produtosExemplo } from '../../models/Produto';

function Cabecalho() {
  return (
    <View style={styles.header}>
      <View style={styles.iconCircle}>
        <Ionicons name="file-tray-full-outline" size={40} color={themes.colors.white} />
      </View>
      <Text style={styles.title}>Controle de Estoque</Text>
      <Text style={styles.subtitle}>Veja a situação dos produtos disponíveis</Text>
    </View>
  );
}

function ItemProduto({ produto }: { produto: Produto }) {
  const status = obterStatus(produto.quantidade);
  const corDoStatus =
    status === 'Em Estoque' ? themes.colors.success : themes.colors.warning;

  return (
    <View style={styles.item}>
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{produto.nome}</Text>
        <Text style={styles.itemQuantity}>Quantidade: {produto.quantidade}</Text>
      </View>
      <View style={[styles.badge, { backgroundColor: corDoStatus }]}>
        <Text style={styles.badgeText}>{status}</Text>
      </View>
    </View>
  );
}

export default function ControleEstoque() {
  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.content}
      data={produtosExemplo}
      keyExtractor={(produto) => String(produto.id)}
      ListHeaderComponent={Cabecalho}
      renderItem={({ item }) => <ItemProduto produto={item} />}
    />
  );
}
