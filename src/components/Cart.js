import React from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cartItems, voucherCode, setVoucherCode, removeFromCart, updateQuantity, cartTotals } = useCart();

  return (
    <View className="flex-1 bg-gray-50">
      <View className="bg-blue-600 p-4">
        <Text className="text-white text-2xl font-bold text-center">
          Shopping Cart ({cartTotals.itemCount} items)
        </Text>
      </View>

      <View className="bg-white p-4 mb-4 mx-4 rounded-lg shadow-sm">
        <Text className="text-lg font-semibold mb-2">Apply Voucher</Text>
        <View className="flex-row">
          <TextInput
            value={voucherCode}
            onChangeText={setVoucherCode}
            placeholder="Enter voucher code"
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 mr-2"
          />
          <TouchableOpacity className="bg-green-500 px-4 py-2 rounded-lg">
            <Text className="text-white font-semibold">Apply</Text>
          </TouchableOpacity>
        </View>
        {voucherCode === 'discount10' && (
          <Text className="text-green-600 font-semibold mt-2">
            ✅ 10% discount applied!
          </Text>
        )}
      </View>

      <ScrollView className="flex-1 px-4">
        {cartItems.length === 0 ? (
          <View className="bg-white p-8 rounded-lg shadow-sm">
            <Text className="text-gray-500 text-center text-lg">
              Your cart is empty
            </Text>
            <Text className="text-gray-400 text-center mt-2">
              Add some products to get started!
            </Text>
          </View>
        ) : (
          cartItems.map((item) => (
            <View key={item.id} className="bg-white p-4 mb-3 rounded-lg shadow-sm">
              <View className="flex-row justify-between items-start mb-2">
                <View className="flex-1">
                  <Text className="text-lg font-semibold text-gray-800">
                    {item.productName}
                  </Text>
                  <Text className="text-gray-600">₱{item.price}</Text>
                </View>
                <TouchableOpacity
                  onPress={() => removeFromCart(item.id)}
                  className="bg-red-500 px-3 py-1 rounded"
                >
                  <Text className="text-white text-sm">Remove</Text>
                </TouchableOpacity>
              </View>
              
              <View className="flex-row justify-between items-center">
                <View className="flex-row items-center">
                  <TouchableOpacity
                    onPress={() => updateQuantity(item.id, item.quantity - 1)}
                    className="bg-gray-200 w-8 h-8 rounded-full items-center justify-center"
                  >
                    <Text className="text-gray-600 font-bold">-</Text>
                  </TouchableOpacity>
                  <Text className="mx-4 text-lg font-semibold">{item.quantity}</Text>
                  <TouchableOpacity
                    onPress={() => updateQuantity(item.id, item.quantity + 1)}
                    className="bg-gray-200 w-8 h-8 rounded-full items-center justify-center"
                  >
                    <Text className="text-gray-600 font-bold">+</Text>
                  </TouchableOpacity>
                </View>
                <Text className="text-lg font-bold text-blue-600">
                  ₱{(item.price * item.quantity).toFixed(2)}
                </Text>
              </View>
            </View>
          ))
        )}
      </ScrollView>

      {cartItems.length > 0 && (
        <View className="bg-white p-4 mx-4 mb-4 rounded-lg shadow-sm">
          <View className="flex-row justify-between mb-2">
            <Text className="text-gray-600">Subtotal:</Text>
            <Text className="text-gray-800">₱{cartTotals.subtotal.toFixed(2)}</Text>
          </View>
          
          {cartTotals.isDiscountApplied && (
            <View className="flex-row justify-between mb-2">
              <Text className="text-green-600">Discount (10%):</Text>
              <Text className="text-green-600">-₱{cartTotals.discount.toFixed(2)}</Text>
            </View>
          )}
          
          <View className="border-t border-gray-200 pt-2">
            <View className="flex-row justify-between">
              <Text className="text-xl font-bold text-gray-800">Total:</Text>
              <Text className="text-xl font-bold text-blue-600">
                ₱{cartTotals.total.toFixed(2)}
              </Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default Cart;
