import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Button,
  Image,
  TouchableOpacity,
} from "react-native";
import { v4 as uuidv4 } from "uuid";
import "react-native-get-random-values";
import { stylesLight } from "../../styles/styles";
import ModalAddProduct from "../../components/ModalWindow";

interface Product {
  id: string;
  name: string;
  category: string;
  amount: number;
  price: number;
  bought: boolean;
}

const shopping = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [editProduct, setEditProduct] = useState<Product | null>(null);

  const renderProduct = ({ item }) => {
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

    return (
      <View style={stylesLight.product}>
        <Image
          source={getImageCategory(item.category)}
          style={stylesLight.image}
        />
        <View style={stylesLight.details}>
          <Text style={stylesLight.name}>{item.name}</Text>
          <Text>Categoría: {item.category}</Text>
          <Text>Cantidad: {item.amount}</Text>
          <Text>Precio: ${item.price.toFixed(2)}</Text>
        </View>
        <View style={stylesLight.buttons}>
          <TouchableOpacity
            onPress={() => isBought(item.id)}
            style={[
              stylesLight.butonCart,
              item.bought ? stylesLight.inCart : {},
            ]}
          >
            <Text style={stylesLight.textButtonCart}>
              {item.bought ? "Eliminar del carrito" : "Añadir al carrito"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handleEditProduct(item)}
            style={stylesLight.butonEdit}
          >
            <Text style={stylesLight.textButtonCart}>Editar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => deleteProduct(item.id)}
            style={stylesLight.deleteButton}
          >
            <Text style={stylesLight.textButtonDelete}>Eliminar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const AddProduct = (product: Product) => {
    if (editProduct) {
      setProducts((products) =>
        products.map((prod) =>
          prod.id === editProduct.id ? { ...prod, ...product } : prod
        )
      );
    } else {
      setProducts([...products, { id: uuidv4(), ...product, bought: false }]);
    }
    setModalVisible(false);
    setEditProduct(null);
  };

  const calculateTotalPrice = () => {
    return products
      .filter((product) => product.bought)
      .reduce((total, product) => total + product.amount * product.price, 0);
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

  const handleEditProduct = (product: Product) => {
    setEditProduct(product);
    setModalVisible(true);
  };

  const deleteAllProducts = () => {
    setProducts([]);
  };

  return (
    <View style={stylesLight.shoppingContainer}>
      <Text style={stylesLight.total}>Lista de la compra</Text>
      <Button title="Añadir Producto" onPress={() => setModalVisible(true)} />
      <ModalAddProduct
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onAddProduct={AddProduct}
        product={editProduct}
      />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={renderProduct}
        ListEmptyComponent={
          <Text style={stylesLight.emptyText}>No hay productos</Text>
        }
      />
      <Text style={stylesLight.total}>
        Precio Total: ${calculateTotalPrice().toFixed(2)}
      </Text>
      <Button
        title="Borrar todos los productos"
        color="red"
        onPress={deleteAllProducts}
        disabled={products.length === 0}
      />
    </View>
  );
};

export default shopping;
