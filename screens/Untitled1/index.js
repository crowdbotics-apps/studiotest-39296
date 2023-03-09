import { FlatList } from "react-native";
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
    }} style={styles.hzSbBdMr}><View style={styles.JWncHDQA}><Text style={styles.xzibjkPD}>Managers Add New</Text></View><Pressable onPress={{}}><Pressable onPress={{}}><View style={styles.BaDhAmNs}><Text style={styles.qnihsdRT}>Head Add New</Text></View></Pressable></Pressable><Text style={styles.LnMPEWTz}>KOMATSU</Text><View style={styles.DrVwJCdX}></View><FlatList style={styles.AIdGXWwy} renderItem={({
        item
      }) => <View style={styles.DXYhPFHF}></View>} ItemSeparatorComponent={() => <View style={styles.eMtusiMA} />} data={[1, 2, 3]} keyExtractor={(item, index) => index}></FlatList></ScrollView>
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
    backgroundColor: "#1e3be5",
    borderRadius: 80,
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
    height: 121,
    width: 150,
    backgroundColor: "#fe7e00",
    borderRadius: 0,
    color: "#777777",
    position: "absolute",
    left: 171,
    top: 65
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
    left: 30,
    top: 28,
    color: "#000000"
  },
  CDOpjCSG: {
    width: 107,
    height: 62,
    position: "absolute",
    top: 256
  },
  ftzHSorU: {
    width: 107,
    height: 62,
    position: "relative"
  },
  DrVwJCdX: {
    height: 51,
    width: 162,
    backgroundColor: "#51b8e3",
    borderRadius: 0,
    color: "#777777"
  },
  qVMOsuMr: {
    height: 164,
    width: 126,
    backgroundColor: "#E4E4E4",
    borderRadius: 0,
    color: "#777777"
  },
  AIdGXWwy: {
    position: "absolute",
    width: 100,
    height: 150,
    left: 26,
    top: 236
  },
  DXYhPFHF: {
    width: "100%",
    height: 60,
    backgroundColor: "#dcf732"
  },
  eMtusiMA: {
    backgroundColor: "#000000",
    height: 1
  }
});
export default Untitled1;