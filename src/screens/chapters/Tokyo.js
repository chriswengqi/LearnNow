import React from 'react'
import { View } from 'react-native'
import Card from '../../components/Card'


export default function Tokyo(props) {

    return (
        <View>
            <Card imageSource={require('../../../assets/tokyo.jpg')} title={'Tokyo'}></Card>
        </View>

    )
}