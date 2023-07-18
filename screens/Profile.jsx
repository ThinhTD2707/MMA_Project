import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import styles from "./home.style"

const Profile = () => {
  return (
    <SafeAreaView>
      <Text styles={styles.textStyle}>Profile</Text>
    </SafeAreaView>
  )
}

export default Profile;