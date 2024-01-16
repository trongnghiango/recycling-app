import React from 'react';
import { StyleSheet } from 'react-native';

import Colors from '../constants/Colors';
import { ExternalLink } from './ExternalLink';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';
import { FlatList } from 'react-native-gesture-handler';
import DayListItem from './core/DayListItem';

const days = [...Array(24)].map((val, index) => (index + 1))

export default function EditScreenInfo({ path }: { path: string }) {
  return (

    <FlatList
      data={days}
      numColumns={3}
      contentContainerStyle={styles.content}
      columnWrapperStyle={styles.column}
      renderItem={({ item }) => (
        <DayListItem day={item} />
      )}
    />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    gap: 10,
    padding: 10,
  },
  column: {
    gap: 10,
  },
});