import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  Text,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import Line from '../components/Line';
import Search from '../components/Search';
import Card from '../components/Card';
import Colors from '../constants/Colors';

import * as transactionActions from '../store/actions/transactions';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const [isRefresh, setIsRefresh] = useState(false);
  const transactions = useSelector(state => state.transactions.transactions);
  const nullSearch = useSelector(state => state.transactions.nullSearch, []);

  useEffect(() => {
    fetchTransactionLists();
  }, []);

  const fetchTransactionLists = async () => {
    setIsRefresh(true);
    try {
      await dispatch(transactionActions.fetchTransactions());
      setIsRefresh(false);
    } catch (err) {
      setIsRefresh(false);
    }
  };

  const handleSearchTransactions = async name => {
    await dispatch(transactionActions.searchTransactions(name));
  };

  return (
    <View style={styles.container}>
      <Line colors={Colors.primary} />
      <Search onSearch={handleSearchTransactions} />
      {nullSearch ? (
        <View style={styles.center}>
          <Text style={{ color: Colors.primary }}>Data not found</Text>
        </View>
      ) : transactions.length ? (
        <FlatList
          onRefresh={fetchTransactionLists}
          refreshing={isRefresh}
          keyExtractor={item => item.id.id}
          data={transactions}
          renderItem={transaction => <Card transaction={transaction.item} />}
        />
      ) : (
        <View style={styles.center}>
          <ActivityIndicator size="large" color={Colors.primary} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
