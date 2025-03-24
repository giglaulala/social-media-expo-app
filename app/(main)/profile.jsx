import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "../../components/ScreenWrapper";
import { useRouter } from "expo-router";
import Header from "../../components/Header";
import Button from "../../components/Button";
import BackButton from "../../components/BackButton";
import Avatar from "../../components/Avatar";
import { hp } from "../../helpers/common";
import { theme } from "../../constants/theme";

const Profile = () => {
  const router = useRouter();
  return (
    <ScreenWrapper bg={"white"}>
      <BackButton router={router} />
      <UserHeader router={router} />

      <Button title="Logout" onPress={() => router.push("welcome")} />
    </ScreenWrapper>
  );
};

const UserHeader = ({ router }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View>
        <Header title="Profile" />
      </View>
      <View>
        <Header title="Username" />
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Avatar
          uri={require("../../assets/images/defaultUser.png")}
          size={hp(20.3)}
          rounded={theme.fonts.radius.sm}
          style={{ borderWidth: 2 }}
        />
      </View>
      <View>
        <Header title="@mail" />
      </View>
      <View>
        <Header title="bio" />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
