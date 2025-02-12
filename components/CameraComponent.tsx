import React, { useRef, useState } from "react";
import { Button, Pressable, StyleSheet, Text, View, Image } from "react-native";
import { CameraType, CameraView, useCameraPermissions } from "expo-camera";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";

type CameraProps = {
  setLastPicture: (imageData: {
    base64: string;
    width: number;
    height: number;
  }) => void;
  showCloseButton?: boolean;
};

const CameraComponent: React.FC<CameraProps> = ({
  setLastPicture,
  showCloseButton,
}) => {
  const cameraRef = useRef<CameraView>(null);
  const [permission, requestPermission] = useCameraPermissions();
  const [facing, setFacing] = useState<CameraType>(ImagePicker.CameraType.back);
  const [flash, setFlash] = useState<boolean>(false);
  const [lastPicture, setLastPictureLocal] = useState<{
    base64: string;
    width: number;
    height: number;
  } | null>(null);

  const toggleFacing = () =>
    setFacing((prevFacing) =>
      prevFacing === ImagePicker.CameraType.back
        ? ImagePicker.CameraType.front
        : ImagePicker.CameraType.back
    );

  const toggleFlash = () => setFlash((prevFlash) => !prevFlash);

  const takePicture = async () => {
    if (cameraRef.current) {
      try {
        let picture = await cameraRef.current.takePictureAsync({
          base64: true,
        });
        if (picture?.base64) {
          const manipResult = await ImageManipulator.manipulateAsync(
            picture.uri,
            [{ resize: { width: 600 } }],
            {
              compress: 0.7,
              base64: true,
              format: ImageManipulator.SaveFormat.JPEG,
            }
          );

          if (manipResult.base64) {
            const { width, height, base64 } = manipResult;
            setLastPicture({ base64, width, height });
          } else {
            alert("Failed to manipulate image");
          }
        } else {
          alert("Failed to capture image.  Base64 data missing.");
        }
      } catch (error) {
        alert("Error taking picture: " + (error as Error).message);
        console.error("Error taking picture:", error);
      }
    } else {
      alert("Camera ref is null.  Make sure the camera is ready.");
    }
  };

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.permissionContainer}>
        <Text style={styles.permissionText}>
          We need camera permissions to take pictures.
        </Text>
        <Button onPress={requestPermission} title="Grant Camera Permissions" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        {showCloseButton && (
          <Pressable
            onPress={() => setLastPicture({ base64: "", width: 0, height: 0 })}
            style={styles.closeButton}
          >
            <Ionicons name="close" size={20} color="black" />
          </Pressable>
        )}
      </View>
      <CameraView
        style={styles.camera}
        type={facing}
        flashMode={flash ? "torch" : "off"}
        ref={cameraRef}
        onCameraReady={() => console.log("Camera ready!")}
      >
        <View style={styles.buttonContainer}>
          <Pressable style={styles.iconButton} onPress={toggleFlash}>
            <Ionicons
              name={flash ? "flash-off" : "flash"}
              size={32}
              color="white"
            />
          </Pressable>
          <Pressable
            style={styles.captureButton}
            onPress={takePicture}
          ></Pressable>
          <Pressable style={styles.iconButton} onPress={toggleFacing}>
            <Ionicons name="camera-reverse" size={32} color="white" />
          </Pressable>
        </View>
      </CameraView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  camera: {
    flex: 1,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 16,
    backgroundColor: "lightgray",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    padding: 20,
  },
  iconButton: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  captureButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "white",
    borderColor: "lightgray",
    borderWidth: 5,
  },
  lastImageContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    width: 60,
    height: 60,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "white",
  },
  lastImage: {
    width: "100%",
    height: "100%",
    borderRadius: 3,
  },
  permissionContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  permissionText: {
    marginBottom: 20,
    textAlign: "center",
  },
  previewImage: {
    width: 300,
    height: 300,
    marginBottom: 20,
    resizeMode: "contain",
  },
  closeButton: {
    position: "absolute",
    right: 10,
    top: 10,
  },
});

export default CameraComponent;
