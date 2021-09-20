import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'

const items = [
    {
        image: require('../assets/images/shopping-bag.png'),
        title: 'Pedido'
    },
    {
        image: require('../assets/images/bread.png'),
        title: 'Padaria'
    },
    {
        image: require('../assets/images/fast-food.png'),
        title: 'Lanches'
    },
    {
        image: require('../assets/images/deals.png'),
        title: 'Promoção'
    },
    {
        image: require('../assets/images/coffee.png'),
        title: 'Café'
    },
]

export default function Categories() {
    return (
        <View
            style={{
                marginTop: 5,
                backgroundColor: '#fff',
                paddingVertical: 10,
                paddingLeft: 20
            }}
        >
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {/* begin loop */}
                {items.map((item, index) => (
                    <View key={index} style={{ alignItems: 'center', marginRight: 30 }}>
                        <Image source={item.image}
                            style={{
                                width: 50,
                                height: 40,
                                resizeMode: 'contain'
                            }}
                        />
                        <Text style={{ fontSize: 13, fontWeight: '900' }}>{item.title}</Text>
                    </View>
                ))}
                {/* and loop */}
            </ScrollView>
        </View>
    )
}
