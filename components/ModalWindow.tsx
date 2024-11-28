import React, { useState } from "react";
import { Modal, View, Text, TextInput, Button, Alert } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { stylesLight } from "../styles/styles";

interface ModalAddProductProps {
  visible: boolean;
  onClose: () => void;
  onAddProduct: (product: {
    name: string;
    category: string;
    amount: number;
    price: number;
  }) => void;
}

const ModalAgregarProducto = ({
  visible,
  onClose,
  onAddProduct,
}: ModalAddProductProps) => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");

  const handleAdd = () => {
    if (!name || !amount || !price) {
      Alert.alert("Debes rellenar todos los campos");
      return;
    }

    onAddProduct({
      name,
      category,
      amount: parseInt(amount, 10),
      price: parseFloat(price),
    });

    setName("");
    setCategory("Otros");
    setAmount("");
    setPrice("");
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={stylesLight.modalOverlay}>
        <View style={stylesLight.modalContent}>
          <Text style={stylesLight.label}>Nombre producto:</Text>
          <TextInput
            style={stylesLight.input}
            value={name}
            onChangeText={setName}
            placeholder="Introduce el nombre"
          />

          <Text style={stylesLight.label}>Categoría:</Text>
          <Picker
            selectedValue={category}
            style={stylesLight.input}
            onValueChange={(itemValue) => setCategory(itemValue)}
          >
            <Picker.Item label="Panaderia" value="Panaderia" />
            <Picker.Item label="Bebidas" value="Bebidas" />
            <Picker.Item label="Enlatados" value="Enlatados" />
            <Picker.Item label="Carnes" value="Carnes" />
            <Picker.Item label="Pescados" value="Pescados" />
            <Picker.Item label="Frutas" value="Frutas" />
            <Picker.Item label="Otros" value="Otros" />
          </Picker>

          <Text style={stylesLight.label}>Cantidad:</Text>
          <TextInput
            style={stylesLight.input}
            value={amount}
            onChangeText={setAmount}
            keyboardType="numeric"
            placeholder="Introduce la cantidad"
          />

          <Text style={stylesLight.label}>Precio unitario:</Text>
          <TextInput
            style={stylesLight.input}
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
            placeholder="Introduce el precio"
          />

          <View style={stylesLight.buttonRow}>
            <Button title="Cancelar" color="red" onPress={onClose} />
            <Button title="Agregar" onPress={handleAdd} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalAgregarProducto;
