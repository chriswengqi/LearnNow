import React from 'react'
import { View } from 'react-native'
import Card from '../../components/Card'

export default function LosAngeles(props) {

    return (
        <View>
            <Card imageSource={require('../../../assets/losangeles.jpg')} title={'Los Angeles'}></Card>
        </View>

    )
}