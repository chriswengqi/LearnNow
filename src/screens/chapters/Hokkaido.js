import React, { useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, StyleSheet } from 'react-native'
import Card from '../../components/Card'



export default function Hokkaido(props) {


    return (
        <View>
            <Card imageSource={require('../../../assets/hokkaido.jpeg')} title={'Hokkaido'}></Card>
        </View>

    )
}