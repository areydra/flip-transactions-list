import React from 'react'
import {View} from 'react-native'

const Line = props => {
    return(
        <View style={{ backgroundColor: props.colors, height: 15 }}></View>
    )
}

export default Line