import { ActivityIndicator, View } from "react-native"
import React from "react"
import { theme } from "@src/config/ThemeContext"
import { styles } from "./Loader.styles";

export const Loader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.indicatorWrapper}>
        <ActivityIndicator size="large" color={theme.colors.lightText}/>
      </View>
    </View>
  )
}
