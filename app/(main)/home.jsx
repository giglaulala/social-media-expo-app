import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "../../components/ScreenWrapper";
import Button from "../../components/Button";
import { router } from "expo-router";

const Home = () => {
  return (
    <ScreenWrapper>
      <Text>Home</Text>
      <Button title="Logout" onPress={() => router.back()} />
    </ScreenWrapper>
  );
};

export default Home;

const styles = StyleSheet.create({});
