import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "../../components/ScreenWrapper";
import { useRouter } from "expo-router";
import Header from "../../components/Header";
import Button from "../../components/Button";
import BackButton from "../../components/BackButton";

const Notifications = () => {
  const router = useRouter();
  return (
    <ScreenWrapper bg={"white"}>
      <BackButton router={router} />
      <UserNotifications router={router} />
    </ScreenWrapper>
  );
};

const UserNotifications = ({ router }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View>
        <Header title="Notifications" />
      </View>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({});
