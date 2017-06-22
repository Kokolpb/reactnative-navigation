import React, { Component } from 'react';
import { Text, View, TouchableOpacity, FlatList, Image, Dimensions } from 'react-native';

export default class MainGif extends Component {
    constructor(props) {
        super(props);

        const { height, width } = Dimensions.get('window');

        this.state = {
            loading: false,
            data: [],
            page: 1,
            seed: 1,
            error: null,
            refreshing: false,
            width: width,
            height: height,
            page_history:[]
        };
    }

    componentDidMount() {
        this.load_data(10);
    }

    load_data = (pageSize) => {
        let query = 'dog';
        let pageNumber = this.randomNumber(2,100) + this.randomNumber(2,100);

        let url = 'https://api.flickr.com/v2/media/search?query=' + query + '&orderBy=interestingness&pageNumber=' + pageNumber + '&pageSize=' + pageSize + '&format=json';

        fetch(url)
            .then(res => res.json())
            .then((respons) => {
                let clear_data = [];
                respons.map((content, index) => {
                    if(content.sizes[7] !== undefined) {
                        content.sizes[7].id = content.id;
                        clear_data.push(content.sizes[7]);
                    }
                })

                this.setState({
                    data: [...this.state.data, ...clear_data],
                    error: respons || '',
                    loading: false,
                    refreshing: false
                });
            })
            .catch(error => {
                console.log(error);
                this.setState({ error, loading: false, refreshing: false });
            });

        this.setState({ loading: true });
        
    }

    randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    handleRefresh = () => {
        this.setState({
            page: 1,
            refreshing: true,
            seed: this.state.seed + 1,
            data: []
        }, () => {
            this.load_data(10);
        });
    }

    handleLoadMore = () => {
        this.setState({
            page: this.state.page + 1
        }, () => {
            this.load_data(10);
        });
    }

    render() {
        const { wrapper, btn, btn_touch, title_screen, title_name } = styles;
        const width = this.state.width;
        const height = this.state.height;

        return (
            <View style={wrapper}>
                <View style={title_screen}>
                    <Text style={title_name}>PET IDOL</Text>
                </View>
                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => <Image source={{ uri: item.location }} style={{ width: width, height: (width / item.width) * item.height, marginBottom: 20, backgroundColor: '#ccc' }} /> }
                    keyExtractor={item => this.randomNumber(0,1000000000)}
                    refreshing={this.state.refreshing}
                    onRefresh={this.handleRefresh}
                    onEndReached={this.handleLoadMore}
                    onEndThreshold={0}
                />
            </View>
        );
    }
}

const styles = {
    wrapper: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    title_screen: { justifyContent: 'center', alignItems: 'center', paddingTop: 10, paddingBottom: 10 },
    title_name: { textAlign: 'center', fontSize: 24, fontWeight: 'bold', color: '#333' }
}
