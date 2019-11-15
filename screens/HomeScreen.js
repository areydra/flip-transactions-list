import React, { useState } from 'react';
import { View, StyleSheet, ActivityIndicator} from 'react-native';

import Line from '../components/Line';
import Search from '../components/Search';
import Card from '../components/Card';
import Colors from '../constants/Colors';

const HomeScreen = () => {
  const [listTransaction, setListTransaction] = useState([]);
  return (
    <View style={styles.container}>
      <Line colors={Colors.primary} />
      <Search />
      <Card />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});

export default HomeScreen;
