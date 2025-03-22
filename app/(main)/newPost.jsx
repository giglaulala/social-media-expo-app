import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Pressable,
  Alert,
} from "react-native";
import React, { useRef, useState } from "react";
import ScreenWrapper from "../../components/ScreenWrapper";
import Header from "../../components/Header";
import { hp, wp } from "../../helpers/common";
import { theme } from "../../constants/theme";
import Avatar from "../../components/Avatar";
import RichTextEditor from "../../components/RichTextEditor";
import BackButton from "../../components/BackButton";
import { useRouter } from "expo-router";
import Icon from "../../assets/icons";
import Button from "../../components/Button";
import * as ImagePicker from "expo-image-picker";

const NewPost = () => {
  const router = useRouter();
  const bodyRef = useRef("");
  const editorRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(file);

  const onPick = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (status !== "granted") {
      alert("Sorry, we need media library permissions to make this work!");
      return;
    }

    let mediaConfig = {
      mediaType: "any",
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.7,
    };

    let result = await ImagePicker.launchImageLibraryAsync(mediaConfig);

    if (!result.canceled) {
      setFile(result.assets[0]);
      console.log("Selected File:", result.assets[0]);
    } else {
      console.log("Image/Video selection was canceled.");
    }
  };

  const getFileUri = (file) => {
    if (!file) return null;
    return file.uri;
  };

  const onSubmit = async () => {
    if (!bodyRef.current && !file) {
      Alert.alert("Post", "please choose an image or add post body");
    }
    let data = {
      file,
      body: bodyRef.current,
      userId: 1,
    };

    setLoading(true);
    setFile(null);
    bodyRef.current = "";
    editorRef.current?.setContentHTML("");
    router.back();
    setLoading(false);
  };

  return (
    <ScreenWrapper bg="white">
      <BackButton router={router} />
      <View style={{ flex: 1 }}>
        <Header title="Create Post" />

        <ScrollView contentContainerStyle={{ gap: 20, paddingBottom: 100 }}>
          <View style={styles.header}>
            <Avatar
              uri={require("../../assets/images/defaultUser.png")}
              size={hp(6.5)}
              rounded={theme.fonts.radius.xl}
            />
            <View style={{ gap: 2 }}>
              <Text style={styles.username}>Drake</Text>
              <Text style={styles.publicText}>Certified loverboy</Text>
            </View>
          </View>
          <View style={styles.textEditor}>
            <RichTextEditor
              editorRef={editorRef}
              onChange={(body) => (bodyRef.current = body)}
            />
          </View>

          {file && (
            <View style={styles.file}>
              <Image
                source={{ uri: getFileUri(file) }}
                resizeMode="cover"
                style={{ flex: 1 }}
              />
              <Pressable style={styles.closeIcon} onPress={() => setFile(null)}>
                <Icon name="delete" size={20} color="white" />
              </Pressable>
            </View>
          )}

          <View style={styles.media}>
            <Text style={styles.addImageText}>Add to your post</Text>
            <View style={styles.mediaIcons}>
              <TouchableOpacity onPress={onPick}>
                <Icon name="image" size={30} color={theme.colors.dark} />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>

        <View style={styles.buttonContainer}>
          <Button
            buttonStyle={{ height: hp(6.2) }}
            title="Post"
            loading={loading}
            hasShadow={false}
            onPress={onSubmit}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default NewPost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 30,
    paddingHorizontal: wp(4),
    gap: 15,
  },
  title: {
    fontSize: hp(2.5),
    fontWeight: theme.fonts.semibold,
    color: theme.colors.text,
    textAlign: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  username: {
    fontSize: hp(2.2),
    fontWeight: theme.fonts.semibold,
    color: theme.colors.text,
  },
  avatar: {
    height: hp(6.5),
    width: hp(6.5),
    borderRadius: theme.fonts.radius.xl,
    borderCurve: "continuous",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.1)",
  },
  publicText: {
    fontSize: hp(1.7),
    fontWeight: theme.fonts.medium,
    color: theme.colors.textLight,
  },
  textEditor: {
    //marginTop: 10
  },
  media: {
    borderWidth: 1.5,
    padding: 12,
    paddingHorizontal: 18,
    borderRadius: theme.fonts.radius.xl,
    borderCurve: "continuous",
    borderColor: theme.colors.gray,
  },
  mediaIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  addImageText: {
    fontSize: hp(1.9),
    fontWeight: theme.fonts.semibold,
    color: theme.colors.text,
  },
  imageIcon: {
    borderRadius: theme.fonts.radius.md,
  },
  file: {
    height: hp(30),
    width: "100%",
    borderRadius: theme.fonts.radius.xl,
    overflow: "hidden",
    borderCurve: "continuous",
  },
  video: {},

  closeIcon: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 5,
    borderRadius: 50,
    backgroundColor: "rgba(255,0,0,0.6)",
  },

  buttonContainer: {
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0,
    paddingHorizontal: wp(4),
    zIndex: 10,
  },
});
