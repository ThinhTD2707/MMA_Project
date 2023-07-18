import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, SIZES } from "../../constant"
import { Ionicons } from "@expo/vector-icons"
import styles from "./headings.style"

const Headings = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Rival</Text>
        <TouchableOpacity>
          <Ionicons name="ios-grid" size={24} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Headings