import React, { useState } from 'react';
import { View, TouchableOpacity, Text, SafeAreaView, StatusBar } from 'react-native';
import { CartProvider, useCart } from './src/context/CartContext';
import ProductList from './src/components/ProductList';
import Cart from './src/components/Cart';
import Toast from './src/components/Toast';

const AppContent = () => {
  const [activeTab, setActiveTab] = useState('products');
  const { toast } = useCart();

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <SafeAreaView className="flex-1 bg-white">
        <Toast visible={toast.visible} message={toast.message} />
        
        <View className="flex-1" style={{ paddingBottom: 110 }}>
          {activeTab === 'products' ? <ProductList /> : <Cart />}
        </View>

        <View className="absolute bottom-0 left-0 right-0 flex-row bg-gray-100" style={{ paddingBottom: 50 }}>
          <TouchableOpacity
            onPress={() => setActiveTab('products')}
            className={`flex-1 py-4 ${
              activeTab === 'products' ? 'bg-blue-600' : 'bg-gray-200'
            }`}
          >
            <Text
              className={`text-center font-semibold ${
                activeTab === 'products' ? 'text-white' : 'text-gray-600'
              }`}
            >
              Products
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            onPress={() => setActiveTab('cart')}
            className={`flex-1 py-4 ${
              activeTab === 'cart' ? 'bg-blue-600' : 'bg-gray-200'
            }`}
          >
            <Text
              className={`text-center font-semibold ${
                activeTab === 'cart' ? 'text-white' : 'text-gray-600'
              }`}
            >
              Cart
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default function App() {
  return (
    <CartProvider>
      <AppContent />
    </CartProvider>
  );
}
