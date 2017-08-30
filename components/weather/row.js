import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import moment from 'moment'
import 'moment/locale/uk'
import FadeInView from '../animation/fadeInView'
moment.locale('uk')

export default class Row extends React.Component {
    
    static propTypes = {
        day: React.PropTypes.object,
        index: React.PropTypes.number
    }
    hour() {
        let day = moment(this.props.day.dt * 1000).format('HH')
        return (
            <Text style={[style.white, style.bold]}>{ day}:00</Text>
        )
    }
    day() {
        let day = moment(this.props.day.dt * 1000).format('ddd')
        return (
            <Text style={[style.white]}>{ day.toUpperCase() } </Text>
        )
    }
    date() {
        let day = moment(this.props.day.dt * 1000).format('DD/MM')
        return (
            <Text>{ day }</Text>  
        )
    }   
    icon(size = 50) {
        const type = this.props.day.weather[0].main.toLowerCase()
        let image
        switch (type) {
            case 'clouds':
                image = require('./icons/cloudy.png')
                break;
            case 'rain':
                image = require('./icons/rain.png')
                break;
            default:
                image = require('./icons/sun.png')
        }
        return <Image source={image} style={{width: size, height: size}} />
    }

    render() {
        
            if (this.props.index === 0) {
                return (
                    <FadeInView delay={this.props.index * 50}>
                        <View style={[style.view, style.flex, style.firstView]}>
                            <View>                          
                                <Text style={{color: '#FFF'}}>{this.hour()} {this.day()} {this.date()}</Text> 
                                { this.icon(90) } 
                            </View>                 
                            <Text style={[style.temp, {fontSize: 35}]}>{Math.round(this.props.day.main.temp)}°C</Text>      
                        </View>
                    </FadeInView>
                );
            }else{
                return (
                    <FadeInView delay={this.props.index * 50}>
                        <View style={[style.view, style.flex]}>
                            <View style={style.flex}>
                                { this.icon() }
                                <Text style={{marginLeft: 10}}>{this.hour()} {this.day()} {this.date()}</Text>  
                            </View>                 
                            <Text style={style.temp}>{Math.round(this.props.day.main.temp)}°C</Text>      
                        </View>
                    </FadeInView>
                );
            }   
    }
}
const style = StyleSheet.create({
    white: {
        color: '#fff'
    },
    bold: {
        fontWeight: 'bold'
    },
    flex: {
        flex: 1,
        flexDirection: 'row',       
        alignItems: 'center'
    },
    firstView: {
        backgroundColor: '#e54b65'
    },
    view: {
        backgroundColor: '#394163',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#202340',
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        paddingVertical: 10    
    },
    temp: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 22
    }
})