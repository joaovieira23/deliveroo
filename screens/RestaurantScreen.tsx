import { View, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import { urlFor } from '../sanity';
import { ArrowLeftIcon } from 'react-native-heroicons/outline';

interface PropsRestaurantScreen {
    id: number;
    imgUrl: string;
    title: string,
    rating: number;
    genre: string;
    address: string;
    short_description: string;
    dishes: string;
    long: string;
    lati: string;
};

const RestaurantScreen = () => {
    const navigation = useNavigation();
    const { params: {
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lati
    } } = useRoute<RouteProp<Record<string, PropsRestaurantScreen>, string>>();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])
  return (
    <ScrollView>
      <View className="relative">
          <Image 
            source={{
                uri: urlFor(imgUrl).url(),
            }}
            className='w-full h-56 bg-gray-300 p-4'
          />
          <TouchableOpacity onPress={() => navigation.goBack()} className='absolute top-14 left-5 p-2 bg-gray-100 rounded-full'>
              <ArrowLeftIcon size={20} color='#00ccbb' />
          </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default RestaurantScreen