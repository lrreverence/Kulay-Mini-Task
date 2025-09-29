import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import ProductCard from './ProductCard';
import { products } from '../data/products';

const ProductList = () => {
  return (
    <View className="flex-1 bg-gray-50">
      <View className="bg-blue-600 p-4">
        <Text className="text-white text-2xl font-bold text-center">
          Products
        </Text>
      </View>
      
      <ScrollView className="flex-1 pt-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ScrollView>
    </View>
  );
};

export default ProductList;
