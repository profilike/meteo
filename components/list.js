import React from 'react'
import style from '../Style.js'
import axios from 'axios'
import WeatherRow from './weather/row'

import { Image, Text, ActivityIndicator, ListView } from 'react-native'

export default class List extends React.Component{   

    static navigationOptions = ({navigation}) => {
        //console.log('params',params)  
        return {
            title: `Погода / ${navigation.state.params.city}`,
            tabBarIcon: () => {
                return <Image source={require('./icons/home.png')} style={{width:20, height:20}}/>
            }
        }
    }
            
    constructor(props){
        super(props)
        //console.log('state', this.props.navigation.state) 
        this.state={
            city: this.props.navigation.state.params.city,
            report: null
        }
        setTimeout(() => {
            this.fetchWeather()
        }, 1000)
    }

    fetchWeather() {
        
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&mode=json&units=metric&cnt=10&appid=c86eb8e536e7dd9ccf28256a613bf777`)
            .then((response) => { 
                          
             this.setState({report: response.data})  
            })
    }

    render() {
        if( this.state.report === null ) {
            return (
                <ActivityIndicator color={style.color} size="large" />
            )
        }else{
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            return(
                <ListView 
                    dataSource={ds.cloneWithRows(this.state.report.list)}
                    renderRow={(row, j, k) => <WeatherRow day={row} index={parseInt(k, 10)} />}
                />
            )
        }
        
    }

}