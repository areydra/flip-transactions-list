import React from 'react'
import {View, Button, Image, StyleSheet, Text, Dimensions} from 'react-native';
import Colors from '../constants/Colors';

const {width} = Dimensions.get('window')

const Card = props => {
    return (
      <View style={styles.container}>
        <View style={styles.containerText}>
          <View style={styles.containerBank}>
            <Text style={styles.textBank}>BNI</Text>
            <Image
              source={require('../assets/icons/arrow_right.png')}
              style={styles.iconArrow}
            />
            <Text style={styles.textBank}>BRI</Text>
          </View>
          <Text style={styles.textInfoTransaction}>Salamah</Text>
          <View style={styles.containerTransaction}>
            <Text style={styles.textInfoTransaction}>Rp2.500.000</Text>
            <Image
              source={require('../assets/icons/dot.png')}
              style={styles.iconDot}
            />
            <Text style={styles.textInfoTransaction}>5 Agustus 2019</Text>
          </View>
        </View>
        <View style={styles.containerButton}>
          <Text style={styles.buttonText}>Berhasil</Text>
        </View>
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
  },
  containerButton: {
      width: 80,
      backgroundColor: Colors.success,
      borderRadius: 5,
      paddingVertical: 5
  },
  buttonText: {
      fontSize: 17,
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center'
  }
});

export default Card