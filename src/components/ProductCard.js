import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <View className="bg-white rounded-lg shadow-md p-4 mb-4 mx-4">
      <Text className="text-xl font-bold text-gray-800 mb-2">
        {product.productName}
      </Text>
      <Text className="text-gray-600 mb-3 text-sm">
        {product.description}
      </Text>
      <View className="flex-row justify-between items-center">
        <Text className="text-2xl font-bold text-blue-600">
          ₱{product.price}
        </Text>
        <TouchableOpacity
          onPress={() => addToCart(product)}
          className="bg-blue-500 px-6 py-2 rounded-lg"
        >
          <Text className="text-white font-semibold">Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductCard;
