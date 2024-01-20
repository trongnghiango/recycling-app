import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../../components/EditScreenInfo';
import { Text, View } from '../../../components/Themed';
import { useEffect, useState } from 'react';
import { LoadingDisplay } from '../../../components/core/ArticleBody';

export default function TabOneScreen() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false);
  }, [])

  if (loading) {
    return <LoadingDisplay />
  }

  return (

    <View>
      <Text>Hello</Text>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
