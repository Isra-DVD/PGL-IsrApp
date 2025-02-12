import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  Pressable,
  Modal,
  Animated,
  Dimensions,
} from "react-native";
import CameraComponent from "../../components/CameraComponent";
import ImageService from "../../services/ImageService";
import LoadingIndicator from "../../components/LoadingIndicator";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useFocusEffect } from "@react-navigation/native";
import { ImageResponseDto } from "../../types/types";
import { ApiResponse } from "../../types/types";
import { Easing } from "react-native-reanimated";

const { width, height } = Dimensions.get("window");

const MyPicturesPage = () => {
  const [images, setImages] = useState<ImageResponseDto[]>([]);
  const [loading, setLoading] = useState(false);
  const [cameraVisible, setCameraVisible] = useState(false);
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [scaleValue] = useState(new Animated.Value(0));

  const startAnimation = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      friction: 5,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };
  const closeAnimation = (callback?: () => void) => {
    Animated.timing(scaleValue, {
      toValue: 0,
      duration: 300,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    }).start(() => {
      if (callback) {
        callback();
      }
    });
  };

  const handleImagePress = (imageData: string) => {
    setFullScreenImage(imageData);
    startAnimation();
  };

  const handleCloseFullScreen = () => {
    closeAnimation(() => setFullScreenImage(null));
  };

  useFocusEffect(
    React.useCallback(() => {
      const loadImages = async () => {
        setLoading(true);
        setError(null);
        try {
          const response: ApiResponse<ImageResponseDto[]> =
            await ImageService.getAllUserImages();
          if (response.object) {
            setImages(response.object);
          } else {
            setImages([]);
          }
        } catch (err) {
          const theError = err as Error;
          setError(theError.message || "An unexpected error occurred");
          console.error("Error en load image ", theError);
        } finally {
          setLoading(false);
        }
      };

      loadImages();

      return () => {};
    }, [])
  );

  const handleImageSaved = async (imageData: {
    base64: string;
    width: number;
    height: number;
  }) => {
    setLoading(true);
    setError(null);

    try {
      const { base64, width, height } = imageData;
      if (base64) {
        await ImageService.saveNewImage({
          width,
          height,
          encodedData: base64,
        });

        const response = await ImageService.getAllUserImages();
        if (response.object !== null) {
          setImages(response.object);
        } else {
          setImages([]);
        }
      }
    } catch (error) {
      const theError = error as Error;
      setError(theError.message);
    } finally {
      setLoading(false);
      setCameraVisible(false);
    }
  };

  const renderItem = ({ item }: { item: ImageResponseDto }) => (
    <Pressable onPress={() => handleImagePress(item.encodedData)}>
      <Image
        style={styles.thumbnail}
        source={{ uri: `data:image/jpeg;base64,${item.encodedData}` }}
      />
    </Pressable>
  );

  return (
    <View style={styles.container}>
      {loading && <LoadingIndicator />}
      <Modal
        visible={cameraVisible}
        animationType="slide"
        onRequestClose={() => setCameraVisible(false)}
      >
        <CameraComponent
          setLastPicture={handleImageSaved}
          showCloseButton={true}
        />
      </Modal>
      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : images.length === 0 ? (
        <Text style={styles.noImagesText}>No images found.</Text>
      ) : (
        <FlatList
          data={images}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
          contentContainerStyle={styles.listContainer}
        />
      )}

      <Animated.View
        style={[
          styles.fullScreenContainer,
          {
            transform: [{ scale: scaleValue }],
            opacity: scaleValue,
          },
        ]}
        pointerEvents={fullScreenImage ? "auto" : "none"}
      >
        {fullScreenImage && (
          <>
            <Pressable
              style={styles.closeButton}
              onPress={handleCloseFullScreen}
            >
              <Ionicons name="close-circle" size={45} color="white" />
            </Pressable>
            <Image
              style={styles.fullScreenImage}
              source={{ uri: `data:image/jpeg;base64,${fullScreenImage}` }}
              resizeMode="contain"
            />
          </>
        )}
      </Animated.View>

      <Pressable
        style={styles.openCameraButton}
        onPress={() => setCameraVisible(true)}
      >
        <Ionicons name="camera" size={32} color="white" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20,
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  thumbnail: {
    width: width / 3 - 10,
    height: width / 3 - 10,
    margin: 5,
    borderRadius: 5,
  },
  noImagesText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
  },
  errorText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "red",
  },
  openCameraButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#007bff",
    borderRadius: 30,
    padding: 15,
    elevation: 5,
  },
  fullScreenContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  fullScreenImage: {
    width: width,
    height: height,
  },
  closeButton: {
    position: "absolute",
    top: 40,
    right: 20,
    zIndex: 1001,
  },
});

export default MyPicturesPage;
