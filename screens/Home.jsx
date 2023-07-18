import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons, Fontisto } from "@expo/vector-icons"
import styles from "./home.style"
// import Headings from '../component/home/headings'
import { Welcome, Carousel, ProductRow, Headings } from "../component"
const Home = () => {
  return (
    <SafeAreaView >
      <View style={styles.appBarWarpper}>
        <View style={styles.appBar}>
          <Ionicons name="location-outline" size={24} />

          <Text style={styles.location}>Hoàng Sa Việt Nam</Text>

          <View style={{ alignItems: "flex-end" }}>
            <View style={styles.cartCount}>
              <Text style={styles.cartNumber}>8</Text>
            </View>
            <TouchableOpacity>
              <Fontisto name='shopping-bag' size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <ScrollView >
        <View style={{ paddingBottom: 120}}>
          <Welcome />
          <Carousel />
          <Headings />
          <ProductRow />
          <ProductRow />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
