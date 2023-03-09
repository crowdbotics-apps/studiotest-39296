import { ImageBackground } from "react-native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }} style={styles.hzSbBdMr}><View style={styles.JWncHDQA}><Text style={styles.xzibjkPD}>Managers Add New</Text></View><Pressable onPress={{}}><Pressable onPress={{}}><View style={styles.BaDhAmNs}><Text style={styles.qnihsdRT}>Head Add New</Text></View></Pressable></Pressable><Text style={styles.LnMPEWTz}>KOMATSU</Text><ImageBackground style={styles.CDOpjCSG} source={require("./milos.PNG")} resizeMode="cover"></ImageBackground></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  kTYBYjYp: {
    width: 114,
    height: 59,
    lineHeight: 22,
    fontSize: 18,
    borderRadius: 0,
    textAlign: "center"
  },
  JWncHDQA: {
    height: 120,
    width: 140,
    backgroundColor: "#b0efbe",
    borderRadius: 2,
    color: "#777777",
    alignItems: "end",
    position: "absolute",
    left: 19,
    top: 76
  },
  HEQqbzRN: {
    flex: 1
  },
  YymgddQu: {
    flex: 1
  },
  xzibjkPD: {
    width: 102,
    height: 59,
    lineHeight: 25,
    fontSize: 19,
    borderRadius: 0,
    letterSpacing: 1,
    textAlign: "center",
    position: "absolute",
    top: 31,
    left: 21
  },
  hzSbBdMr: {
    backgroundColor: "#e3e3e3",
    borderRadius: 40
  },
  BaDhAmNs: {
    height: 114,
    width: 150,
    backgroundColor: "#b0efbe",
    borderRadius: 2,
    color: "#777777",
    position: "absolute",
    left: 172,
    top: 69
  },
  LmuFztZq: {
    backgroundColor: "#b0efbe",
    borderColor: "#cccccc",
    width: 150,
    height: 30,
    flexDirection: "row",
    flex: "1"
  },
  PvDdFNhX: {
    position: "absolute",
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 30
  },
  NQNyYppm: {
    position: "absolute",
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 55,
    left: 181,
    top: 79
  },
  yQebPCTR: {
    width: 250,
    height: 52,
    lineHeight: 20,
    fontSize: 23,
    borderRadius: 0,
    textAlign: "center"
  },
  LnMPEWTz: {
    width: 348,
    height: 26,
    lineHeight: 18,
    fontSize: 30,
    borderRadius: 0,
    textAlign: "center",
    color: "#1837f3",
    flexDirection: "row",
    flex: "1",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 5,
    top: 13
  },
  vDqTqIcR: {
    width: 107,
    height: 62
  },
  lOrtoPOD: {
    backgroundColor: "#ffffff",
    borderColor: "#cccccc",
    width: 150,
    height: 51
  },
  ZzOgePNp: {
    width: 100,
    height: 42,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  qnihsdRT: {
    width: 87,
    height: 57,
    lineHeight: 25,
    fontSize: 19,
    borderRadius: 0,
    textAlign: "center",
    letterSpacing: 1,
    position: "absolute",
    left: 25,
    top: 27,
    color: "#000000"
  },
  CDOpjCSG: {
    width: 107,
    height: 62,
    position: "absolute",
    top: 256
  }
});
export default Untitled1;