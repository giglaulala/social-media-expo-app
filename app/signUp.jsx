import {
  Alert,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import Icon from "../assets/icons";
import BackButton from "../components/BackButton";
import { useRouter } from "expo-router";
import { theme } from "../constants/theme";
import { hp, wp } from "../helpers/common";
import Input from "../components/Input";
import Button from "../components/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";
const SignUp = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    if (!name || !email || !password) {
      Alert.alert("Sign Up", "Please fill all fields!");
      return;
    }

    setLoading(true);

    setTimeout(async () => {
      try {
        await AsyncStorage.setItem("user", JSON.stringify({ name, email }));

        Alert.alert("Success", "Account created successfully!");
        router.push("/home");
      } catch (error) {
        console.error("Error saving data", error);
        Alert.alert("Error", "Something went wrong!");
      } finally {
        setLoading(false);
      }
    }, 1500);
  };

  return (
    <ScreenWrapper bg="white">
      <StatusBar style="dark" />
      <View style={styles.container}>
        <Text style={styles.welcomeText}>Let's</Text>
        <Text style={styles.welcomeText}>Get Started</Text>

        <View style={styles.form}>
          <Text style={{ fontSize: 14, color: "#555" }}>
            Please fill the details to create an account
          </Text>

          <Input
            icon={<Icon name="user" size={26} />}
            placeholder="Enter your username"
            value={name}
            onChangeText={setName}
          />
          <Input
            icon={<Icon name="mail" size={26} />}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
          />
          <Input
            icon={<Icon name="lock" size={26} />}
            placeholder="Enter your password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <Button title="Sign up" loading={loading} onPress={onSubmit} />
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account?</Text>
          <Pressable onPress={() => router.push("/login")}>
            <Text style={styles.footerLink}>Login</Text>
          </Pressable>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 45,
    paddingHorizontal: wp(5),
  },
  welcomeText: {
    fontSize: hp(4),
    fontWeight: theme.fonts.bold,
    color: theme.colors.text,
  },
  form: {
    gap: 25,
  },
  forgotPassword: {
    textAlign: "right",
    fontWeight: theme.fonts.semibold,
    color: theme.colors.text,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  footerText: {
    textAlign: "center",
    color: theme.colors.text,
    fontSize: hp(1.6),
  },
});
