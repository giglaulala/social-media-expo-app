import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "../../components/ScreenWrapper";
import { useRouter } from "expo-router";
import Header from "../../components/Header";
import Button from "../../components/Button";

const Profile = () => {
  const router = useRouter();
  return (
    <ScreenWrapper bg={"white"}>
      <UserHeader router={router} />
      <Button title="Logout" onPress={() => router.push("login")} />
    </ScreenWrapper>
  );
};

const UserHeader = ({ router }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View>
        <Header title="Profile" />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
