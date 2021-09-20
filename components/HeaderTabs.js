import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function HeaderTabs() {
    return (
        <View>
            <HeaderButtons text="Delivery" />
            <HeaderButtons text="Pedido"/>
        </View>
    )
}

const HeaderButtons = (props) => (
    <View>
        <TouchableOpacity>
            <Text>{props.text}</Text>
        </TouchableOpacity>
    </View>
)   
