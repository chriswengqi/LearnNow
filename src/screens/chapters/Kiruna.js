import React from 'react'
import { View } from 'react-native'
import Card from '../../components/Card'


export default function Kiruna(props) {


    return (
        <View>
            <Card imageSource={require('../../../assets/kiruna.jpeg')} title={'Kiruna'}></Card>
        </View>

    )
}