import React from 'react'
import { View } from 'react-native'
import Card from '../../components/Card'


export default function SanFranscisco(props) {


    return (
        <View>
            <Card imageSource={require('../../../assets/sanran.jpeg')} title={'San Francisco'}></Card>
        </View>

    )
}