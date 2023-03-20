import React from 'react'
import { View } from 'react-native'
import Card from '../../components/Card'


export default function NewYork(props) {


    return (
        <View>
            <Card imageSource={require('../../../assets/newyork.jpg')} title={'New York'}></Card>
        </View>

    )
}