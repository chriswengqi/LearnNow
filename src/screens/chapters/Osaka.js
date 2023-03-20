import React from 'react'
import {View} from 'react-native'
import Card from '../../components/Card'



export default function Osaka(props) {

    return (
        <View>
            <Card imageSource={require('../../../assets/osaka.png')} title={'Osaka'}></Card>
        </View>

    )
}