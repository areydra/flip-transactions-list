import React from 'react'
import {View, Image, StyleSheet, Text, Dimensions} from 'react-native';
import moment from 'moment';

import Button from './Button'
import Colors from '../constants/Colors';

const {width} = Dimensions.get('window')

const Card = props => {
    const {
      amount,
      status,
      sender_bank,
      beneficiary_name,
      beneficiary_bank,
      completed_at,
    } = props.transaction.id;
    return (
      <View style={styles.container}>
        <View style={styles.containerText}>
          <View style={styles.containerBank}>
            <Text style={styles.textBank}>{sender_bank.toUpperCase()}</Text>
            <Image
              source={require('../assets/icons/arrow_right.png')}
              style={styles.iconArrow}
            />
            <Text style={styles.textBank}>
              {beneficiary_bank.toUpperCase()}
            </Text>
          </View>
          <Text style={styles.textInfoTransaction}>{beneficiary_name}</Text>
          <View style={styles.containerTransaction}>
            <Text style={styles.textInfoTransaction}>
              Rp{amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
            </Text>
            <Image
              source={require('../assets/icons/dot.png')}
              style={styles.iconDot}
            />
            <Text style={styles.textInfoTransaction}>
              {moment(completed_at)
                .local('id')
                .format('DD MMMM YYYY')}
            </Text>
          </View>
        </View>
        {status === 'SUCCESS' ? (
          <Button title="Berhasil" style={{backgroundColor: Colors.success}} />
        ) : (
          <Button title="Pending" style={{backgroundColor: Colors.primary}} />
        )}
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    borderLeftColor: Colors.success,
    borderLeftWidth: 5,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginHorizontal: width / 30,
    marginBottom: 10
  },
  containerText: {
    flex: 1,
    marginVertical: 20
  },
  containerBank: {
      flexDirection: 'row',
      alignItems: 'center',
  },
  textBank: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  iconArrow: {
      height: 12,
      width: 15,
      marginHorizontal: 5
  },
  containerTransaction: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInfoTransaction: {
    marginTop: 2,
    fontSize: 17
  },
  iconDot:{
    height: 8,
    width: 8,
    alignSelf: 'flex-end',
    marginBottom: width/60,
    marginHorizontal: 5
  }
});

export default Card