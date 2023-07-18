import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'react-native'
import { COLORS, SIZES } from "../../constant"
import ProductCardView from "./ProductCardView"
import styles from './productRow.style'

const ProductRow = () => {
    const products = [ 1, 2, 3, 4];
    return (
        <View style={styles.container}>
            <FlatList
                data={products}
                renderItem={({ item }) => <ProductCardView/>}
                // renderItem={({ item }) => <Text>Product</Text>}
                horizontal
                contentContainerStyle = {{columnGap: SIZES.medium}}
            />
        </View>
    );
}

export default ProductRow;