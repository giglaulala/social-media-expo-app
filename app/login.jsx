import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import Icon from "../assets/icons";
import BackButton from "../components/BackButton";
import { useRouter } from "expo-router";
const Login = () => {
  const router = useRouter();
  return (
    <ScreenWrapper>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <BackButton router={router} />
      </View>
    </ScreenWrapper>
  );
};

export default Login;

const styles = StyleSheet.create({});
