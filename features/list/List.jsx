import React, {useEffect} from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Text,
    FlatList,
    Image,
    TouchableWithoutFeedback,
    ActivityIndicator
} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {useDispatch, useSelector} from "react-redux";
import {fetchDataTC} from "../../state/dataReducer";

const {width} = Dimensions.get('screen')

const WIDTH = width
const PADDING = 10

export const List = () => {

    const data = useSelector(state => state.data)
    const {loader, error} = useSelector(state => state.app)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchDataTC());
    }, [dispatch]);

    const navigation = useNavigation()

    const renderItem = ({item}) => {
        return (
            <View style={styles.item}>
                <TouchableWithoutFeedback onPress={() => {
                    navigation.navigate('Photo', {image: item.urlToImage})
                }}>
                    <Image
                        style={styles.img}
                        source={{uri: item.urlToImage}}/>
                </TouchableWithoutFeedback>
                <View style={styles.itemTextContainer}>
                    <Text style={styles.author}>Author: </Text><Text>{item.author}</Text>
                </View>
            </View>
        )
    }

    if (error) return <View style={styles.container} ><Text style={styles.error}>Error: {error}</Text></View>

    if (!loader) return <View style={styles.container}><ActivityIndicator size="large" color='purple'/></View>

    return (
        <View style={styles.container}>
            <Text style={styles.forYouText}>SELECTED FOR YOU</Text>
            <FlatList
                ListHeaderComponent={() =>
                    <View style={styles.textContainer}>
                        <Text style={styles.touchText}>Touch a photo to ZOOM it</Text>
                    </View>}
                data={data}
                renderItem={renderItem}
                numColumns={2}
                ListEmptyComponent={() => <View><Text>List Empty</Text></View>}
                columnWrapperStyle={{justifyContent: 'space-between'}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginTop: 10,
    },
    item: {
        backgroundColor: 'white',
        marginVertical: 5,
        width: (WIDTH - PADDING * 2) / 2 - 5,
        height: (WIDTH - PADDING * 2) / 2 - 5,
        paddingBottom: 10,
        justifyContent: 'space-around'
    },
    img: {
        width: '100%',
        height: '60%',
        resizeMode: "contain",
    },
    itemTextContainer: {
        flexDirection: "row",
        marginLeft: 5,
        flexWrap: "wrap"
    },
    textContainer: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 15,
        marginVertical: 10,
        paddingVertical: 10,
    },
    touchText: {
        fontSize: 12,
        fontWeight: 'bold',
        letterSpacing: 5
    },
    forYouText: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 5,
        color: 'purple'
    },
    author: {
        color: 'purple'
    },
    error: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30
    }
});
