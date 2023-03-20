import React from 'react'
import {View} from 'react-native'
import Card from '../../components/Card'


export default function Stockholm(props) {

    return (
        <View>
            <Card imageSource={require('../../../assets/stockholm.jpeg')} title={'Stockholm'}></Card>
        </View>

    )
}