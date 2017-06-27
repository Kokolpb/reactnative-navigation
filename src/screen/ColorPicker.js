/**
 * Author: enqtran
 * Uri: enqtran.com
 */ 
import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput, Slider, Dimensions, ScrollView } from 'react-native';

const { height, width } = Dimensions.get('window');

export default class ColorPicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val_r: 0,
            val_g: 0,
            val_b: 0,
            val_a: 1,
            width: width - 60
        }
    }

    render() {
        const { wrapper, btn, btn_touch, bg_show, code_color, controll_color } = styles;
        return (
            <ScrollView>
                <View style={wrapper}>
                    <View style={controll_color}>
                        <PickerItem
                            nameItem="R"
                            widthItem={this.state.width}
                            valueItem={this.state.val_r}
                            minValue={0}
                            maxValue={255}
                            stepItem={1}
                            onValueChange={(val) => {
                                this.setState({ val_r: val });
                            }}
                        />

                        <PickerItem
                            nameItem="G"
                            widthItem={this.state.width}
                            valueItem={this.state.val_g}
                            minValue={0}
                            maxValue={255}
                            stepItem={1}
                            onValueChange={(val) => {
                                this.setState({ val_g: val });
                            }}
                        />

                        <PickerItem
                            nameItem="B"
                            widthItem={this.state.width}
                            valueItem={this.state.val_b}
                            minValue={0}
                            maxValue={255}
                            stepItem={1}
                            onValueChange={(val) => {
                                this.setState({ val_b: val });
                            }}
                        />

                        <PickerItem
                            nameItem="A"
                            widthItem={this.state.width}
                            valueItem={this.state.val_a}
                            minValue={0}
                            maxValue={1}
                            stepItem={0}
                            onValueChange={(val) => {
                                this.setState({ val_a: val });
                            }}
                        />
                    </View>

                    <View style={bg_show}>
                        <Text style={code_color}>RGBA({this.state.val_r}, {this.state.val_g}, {this.state.val_b}, {this.state.val_a.toFixed(1)})</Text>
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: 'rgba(' + this.state.val_r + ',' + this.state.val_g + ',' + this.state.val_b + ',' + this.state.val_a + ')',
                                width: this.state.width,
                                height: 180
                            }}>
                        </View>
                    </View>

                </View>
            </ScrollView>
        );
    }
}

class PickerItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            val: this.props.valueItem
        }
    }

    render() {
        const { wrapper_item, width_item, input_item } = styles;
        return (
            <View style={wrapper_item}>
                <Text>{this.props.nameItem}</Text>
                <Slider
                    step={this.props.stepItem}
                    value={this.props.valueItem}
                    minimumValue={this.props.minValue}
                    maximumValue={this.props.maxValue}
                    style={{ width: this.props.widthItem - 60 }}
                    onValueChange={(val) => {
                        this.onValueChange = this.props.onValueChange(val);
                        this.setState({ val });
                    }}
                />
                <TextInput
                    value={(this.props.nameItem !== 'A') ? this.state.val.toString() : this.state.val.toFixed(1)}
                    style={input_item}
                    underlineColorAndroid="transparent"
                    editable={false}
                />
            </View>
        )
    }
}

const styles = {
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20,
        paddingBottom: 20
    },
    btn: {
        color: '#fff',
        backgroundColor: '#333',
        padding: 10,
        fontSize: 18,
        borderRadius: 5,
        alignItems: 'center'
    },
    btn_touch: {
        marginTop: 20,
        justifyContent: 'center'
    },
    wrapper_item: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    },
    input_item: {
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#333',
        padding: 5,
        color: '#333'
    },
    bg_show: {
        flex: 1,
        justifyContent: 'center'
    },
    code_color: {
        color: '#333',
        textAlign: 'center',
        marginBottom: 10
    },
    controll_color: {
        backgroundColor: '#fff',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30
    },
}
