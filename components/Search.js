import React,{useState} from 'react'
import { View, Image, TextInput, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'

const { width } = Dimensions.get('window')

const Search = props => {
    const [search, setSearch] = useState('')
    const handleSearch = () => {
        props.onSearch(search)
    }

    return(
        <View style={styles.container}>
            <TouchableOpacity onPress={handleSearch}>
                <Image source={require('../assets/icons/search.png')} style={styles.iconSearch} />
            </TouchableOpacity>
            <TextInput placeholder="Search here.." style={styles.textInputSearch} onChangeText={text => setSearch(text)} onSubmitEditing={handleSearch} returnKeyType="search" />
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