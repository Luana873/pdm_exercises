import React, { useState, useEffect } from "react";
import { View, Button, Image, ScrollView, TouchableOpacity, Text, Alert, Dimensions } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialIcons } from "@expo/vector-icons";
import Constants from "expo-constants";
import styles from "../styles";

/* Exercícios seis, sete e oito juntos */ 
export default function MediaGallery() {
  const [images, setImages] = useState<string[]>([]);
  const [hasGalleryPermission, setHasGalleryPermission] = useState<boolean | null>(null);
  const [hasCameraPermission, setHasCameraPermission] = useState<boolean | null>(null);

  useEffect(() => {
    (async () => {
      const lib = await ImagePicker.requestMediaLibraryPermissionsAsync();
      setHasGalleryPermission(lib.status === "granted");
      const cam = await ImagePicker.requestCameraPermissionsAsync();
      setHasCameraPermission(cam.status === "granted");
    })();
  }, []);

  const pickImage = async () => {
    if (hasGalleryPermission === false) {
      Alert.alert("Sem permissão para acessar a galeria");
      return;
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 0.8,
    } as any); // permite multi-select dependendo da plataforma

    if (!result.canceled) {
      // expo v14 retorna result.assets array
      const uris = result.assets.map((a: any) => a.uri);
      setImages((prev) => [...uris, ...prev]);
    }
  };

  const takePhoto = async () => {
    if (hasCameraPermission === false) {
      Alert.alert("Sem permissão para acessar a câmera");
      return;
    }
    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: false,
      quality: 1,
    });

    if (!result.canceled) {
      setImages((prev) => [result.assets[0].uri, ...prev]);
    }
  };

  const removeImage = (uri: string) => {
    setImages((prev) => prev.filter((u) => u !== uri));
  };

  return (
    <View style={[styles.container, { paddingTop: Constants.statusBarHeight }]}>
      {/* Top-right buttons */}
      <View style={{ position: "absolute", right: 10, top: Constants.statusBarHeight + 8, zIndex: 10, flexDirection: "row" }}>
        <TouchableOpacity onPress={pickImage} style={{ marginRight: 12 }}>
          <MaterialIcons name="photo" size={28} color="deepskyblue" />
        </TouchableOpacity>
        <TouchableOpacity onPress={takePhoto}>
          <MaterialIcons name="photocamera" size={28} color="deepskyblue" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ paddingTop: 60, alignItems: "center" }}>
        {images.length === 0 && <Text>Nenhuma imagem. Use os botões no canto superior direito.</Text>}
        {images.map((uri) => (
          <View key={uri} style={{ marginVertical: 10 }}>
            <View style={{ position: "absolute", right: 4, zIndex: 20 }}>
              <TouchableOpacity onPress={() => removeImage(uri)}>
                <MaterialIcons name="close" size={28} color="#fff" style={{ backgroundColor: "rgba(0,0,0,0.5)", borderRadius: 20 }} />
              </TouchableOpacity>
            </View>
            <Image source={{ uri }} style={{ width: Dimensions.get("window").width - 40, height: 250, borderRadius: 8 }} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
