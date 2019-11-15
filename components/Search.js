import React from 'react'
import { View, Image, TextInput, StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get('window')

const Search = props => {
    return(
        <View style={styles.container}>
            <Image source={require('../assets/icons/search.png')} style={styles.iconSearch} />
            <TextInput placeholder="Search here.." style={styles.textInputSearch} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: 'white',
        marginHorizontal: width/30,
        flexDirection: 'row',
        marginVertical: 10,
        alignItems: 'center'
    },
    iconSearch: {
        height: 20,
        width: 20,
        marginHorizontal: 8
    },
    textInputSearch: {
        flex: 1
    }
})

export default Search