import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from 'react-native';
import React, { useMemo, useState } from 'react';
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../features/restaurantSlice';
import { removeFromBasket, selectBasketItems } from '../features/basketSlice';
import { XCircleIcon } from 'react-native-heroicons/outline';
import Currency from "react-currency-formatter";
import { urlFor } from '../sanity';

const BasketScreen = () => {
    const navigation = useNavigation();
    const restaurant = useSelector(selectRestaurant);
    const items = useSelector(selectBasketItems);
    const [groupedItemsInBasket, setGroupItemsInBasket] = useState([]);
    const dispatch = useDispatch();

    useMemo(() => {
      const groupedItems = items.reduce((results, item) => {
        (results[item.id] = results[items.id] || []).push(item);
        return results;
      }, {});

      setGroupItemsInBasket(groupedItems);
    }, [items]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100">
        <View className="p-5 border-b border-[#00ccbb] bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">
              {restaurant.title}
            </Text>
          </View>

          <TouchableOpacity
            onPress={navigation.goBack}
            className="rounded-full bg-gray-100 absolute top-3 right-5">
              <XCircleIcon color="#00ccbb" height={50} width={50} />
            </TouchableOpacity>
        </View>

        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
            source={{
              uri: "https://links.papareact.com/wru",
            }} />
            <Text className="flex-1">Deliver in 50-75 min</Text>
            <TouchableOpacity>
              <Text className="text-[#00ccbb]">Change</Text>
            </TouchableOpacity>
        </View>

        <ScrollView className='divide-y divide-gray-200'>
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View 
              key={key}
              className="flex-row items-center space-x-3 bg-white py-2 px-5"
            >
              <Text className='text-[#00ccbb]'>{items.length} x</Text>
              <Image
                source={{ uri: urlFor(items[0]?.image).url() }}
                className="h-12 w-12 rounded-full" />
                <Text className="flex-1">{items[0]?.name}</Text>

                <Text className="text-gray-600">
                  <Currency quantity={items[0]?.price} currency="GBP"/>
                </Text>

                <TouchableOpacity>
                  <Text
                    className="text-[#00ccbb] text-xs"
                    onPress={() => dispatch(removeFromBasket({ id: key }))}
                  >
                    Remove
                  </Text>
                </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        
      </View>
    </SafeAreaView>
  )
}

export default BasketScreen;