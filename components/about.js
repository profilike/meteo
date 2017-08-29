import React from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';
import style from '../Style';

export default class About extends React.Component {

    static navigationOptions = {
        tabBarIcon: () => {
            return <Image source={require('./icons/user.png')} style={{width:20, height:20}} />
        }
    }
    search() {
        this.props.navigation.navigate('Search');  
    }
    render() {
        return (
            <View style={style.container}>
                <Text style={style.title}>О нас</Text>         
                <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu massa neque.
                    Pellentesque dolor velit, dignissim at tempus ut, ornare viverra arcu.
                </Text>
                <Button color={style.color} onPress={() => this.search()} title='Поиск по городу' />
            </View>            
        );
    }
}