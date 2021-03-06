import React from 'react';
import DeviceInfo from 'react-native-device-info';
import { NativeModules } from 'react-native';

import { StyleSheet, Text, View , Button} from 'react-native';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isCharging: '',
            batteryLevel:''
        };
    };
    componentDidMount(){
        DeviceInfo.isBatteryCharging().
        then(isCharging => {
            if(!isCharging)
            {
                this.setState({
                    isCharging: "Şarj Olmuyor."
                })
            }
            else{
                this.setState({
                    isCharging: "Şarj Oluyor."
                })
            }});

        DeviceInfo.getBatteryLevel()
            .then(batteryLevel  => {
                this.setState({
                    batteryLevel: Math.round(batteryLevel*100)
                })
        });
    };
        render()
        {
            const {isCharging,batteryLevel} = this.state;
            return (
                <View style={styles.container}>
                    <Text style={styles.text} >Şarj Durum: {new String(isCharging).substr(0, 20)}</Text>
                    <Text style={styles.text} >Şarj Yüzdesi: %{new String(batteryLevel).substr(0, 2)}</Text>
                </View>
            );
        }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
    text: {
        margin: 10,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});