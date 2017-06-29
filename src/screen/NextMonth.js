/**
 * Author: enqtran
 * Uri: enqtran.com
 */
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput, ToastAndroid } from 'react-native';
import DatePicker from 'react-native-datepicker';

export default class NextMonth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "2017-06-29",
            result: ""
        }
    }

    getDate = (y_in, m_in, d_in) => {
        m_in = parseInt(m_in);
        for (let index = 1; index < 8; index++) {
            let d_out = new Date(y_in, m_in, index);
            if (d_out.getDay() == 1) {
                let month = (m_in+1 > 12) ? 1 : m_in+1;
                let year = (m_in+1 > 12) ? parseInt(y_in)+1 : y_in;
                this.setState({
                    result: 'Mon next: '+d_out.getDate() + ' ' + month + ' ' + year
                });
                break;
            }
        }
    }

    render() {
        const { wrapper } = styles;
        return (
            <View style={wrapper}>

                <View>
                    <DatePicker
                        style={{width: 200,marginBottom:15, marginTop:15}}
                        date={this.state.date}
                        mode="date"
                        placeholder="select date"
                        format="YYYY-MM-DD"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        is24Hour={true}
                        showIcon={false}
                        onDateChange={(date) => {
                            this.setState({date: date});
                        }}
                    />

                    <TouchableOpacity
                        onPress={() => {
                            let format_date = this.state.date.split('-');
                            this.getDate(format_date[0], format_date[1], format_date[2]);
                        }}
                    >
                        <Text style={{textAlign:'center', padding:10, backgroundColor:'green', borderRadius:50, color: '#fff'}}>Check</Text>
                    </TouchableOpacity>

                    <Text style={{textAlign:'center', marginTop:15}}>{ (this.state.result != "") ? this.state.result : null }</Text>
                    
                </View>
                
            </View>
        );
    }
}

const styles = {
    wrapper: { flex: 1, justifyContent: 'center', alignItems: 'center' },
}
