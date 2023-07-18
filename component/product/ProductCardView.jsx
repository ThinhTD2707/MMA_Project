import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from "./productCardView.style"
import { Ionicons } from "@expo/vector-icons"
import { COLORS } from '../../constant'
import { useNavigation } from '@react-navigation/native'
const ProductCardView = () => {
  const navigation = useNavigation();
  
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ProductDetails")}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: "https://phucminhan.com/wp-content/uploads/2021/05/product_12077_1.jpg" }}
            style={styles.image}
          />
        </View>
        <View style={styles.detail}>
          <Text style={styles.title} numberOfLines={1} >
            Product
          </Text>
          <Text style={styles.supplier} numberOfLines={1}>
            Product
          </Text>
          <Text style={styles.price}>$96.69</Text>
        </View>
        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name="add-circle" size={35} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  )
}

export default ProductCardView;