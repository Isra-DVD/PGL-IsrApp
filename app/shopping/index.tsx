import React, { useState } from "react";
import { View, Text, FlatList, Button, Image } from "react-native";
import { v4 as uuidv4 } from "uuid";
import "react-native-get-random-values";
import { stylesLight } from "../../styles/styles";

interface Product {
  id: string;
  name: string;
  category: string;
  amount: number;
  price: number;
  bought: boolean;
}

const shopping = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: uuidv4(),
      name: "Manzana",
      category: "Frutas",
      amount: 3,
      price: 0.5,
      bought: true,
    },
    {
      id: uuidv4(),
      name: "Coca-Cola",
      category: "Bebidas",
      amount: 2,
      price: 1.2,
      bought: false,
    },
    {
      id: uuidv4(),
      name: "Atún",
      category: "Pescados",
      amount: 1,
      price: 15.0,
      bought: true,
    },
  ]);

  const getImageCategory = (category: string) => {
    switch (category) {
      case "Panaderia":
        return require("../../assets/panaderia.png");
      case "Bebidas":
        return require("../../assets/bebidas.png");
      case "Enlatados":
        return require("../../assets/enlatados.png");
      case "Carnes":
        return require("../../assets/carnes.png");
      case "Pescados":
        return require("../../assets/pescados.png");
      case "Frutas":
        return require("../../assets/frutas.png");
      case "Otros":
        return require("../../assets/otros.png");
      default:
        return require("../../assets/default.png");
    }
  };

  const calculateTotalPrice = () => {
    return products
      .filter((product) => product.bought)
      .reduce((total, product) => total + product.price * product.amount, 0)
      .toFixed(2);
  };

  const isBought = (id: string) => {
    setProducts((products) =>
      products.map((product) =>
        product.id === id ? { ...product, bought: !product.bought } : product
      )
    );
  };

  const deleteProduct = (id: string) => {
    setProducts((products) => products.filter((product) => product.id !== id));
  };

  return (
    <View style={stylesLight.shoppingContainer}>
      <Text style={stylesLight.total}>Lista de la compra</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={stylesLight.product}>
            <Image
              style={stylesLight.productImage}
              source={getImageCategory(item.category)}
            />
            <View style={stylesLight.productInfo}>
              <Text style={stylesLight.productName}>{item.name}</Text>
              <Text>Categoría: {item.category}</Text>
              <Text>Cantidad: {item.amount}</Text>
              <Text>Precio: {item.price}€</Text>
              <Text>En Carrito: {item.bought ? "Sí" : "No"}</Text>
            </View>
            <View style={stylesLight.buttons}>
              <Button
                title={item.bought ? "Quitar del carrito" : "Añadir al carrito"}
                onPress={() => isBought(item.id)}
              />
              <Button
                title="Eliminar"
                color="red"
                onPress={() => deleteProduct(item.id)}
              />
            </View>
          </View>
        )}
      />
      <Text style={stylesLight.total}>
        Precio Total: ${calculateTotalPrice()}
      </Text>
    </View>
  );
};

export default shopping;
