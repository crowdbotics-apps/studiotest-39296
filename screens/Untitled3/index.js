import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled3 = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      flex: 1,
      flexDirection: 'row',
      padding: 10,
      backgroundColor: '#f0f0f1'
    }}>     
          <View style={styles.row1}></View>
          <View style={styles.row2}></View>
          <View style={styles.row3}></View>  
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  row1: {
    flex: 1,
    borderRadius: 40,
    backgroundColor: "#be2cb6"
  },
  row2: {
    flex: 1,
    borderRadius: 40,
    backgroundColor: "#ef2d2d"
  },
  row3: {
    flex: 1,
    borderRadius: 40,
    backgroundColor: "#24daa3"
  }
});
export default Untitled3;