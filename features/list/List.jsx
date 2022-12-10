import React from 'react';
import {View, StyleSheet, Dimensions, Text, FlatList, Image, TouchableWithoutFeedback} from "react-native";
import {useNavigation} from "@react-navigation/native";

const {width} = Dimensions.get('screen')

const WIDTH = width
const PADDING = 10

const authors = ['John', 'Lorem', 'John', 'Lorem', 'John']
const imgItems = [
    "https://outdoorgearlab-mvnab3pwrvp3t0.stackpathdns.com/photos/23/66/358121_9734_XXL.jpg",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/index-winter-hats-1663960249.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*",
    "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1572286952-1860071_522_f.jpg",
    "https://m.media-amazon.com/images/I/91XxeQfdVuL.jpg",
    "https://img.joomcdn.net/802c7e249f8ad2e0e20fdcfb72e939c9d89f22b9_original.jpeg"

]

const data = new Array(50).fill(null).map((_, index) => ({
    id: index + 1,
    imgItem: imgItems[index % 5],
    author:authors[index % 5]
}))

export const List = () => {

    const navigation = useNavigation()

    const renderItem = ({item}) => {
        return (
            <View style={styles.item}>
                    <TouchableWithoutFeedback onPress={() => {
                        navigation.navigate('Photo', {image: item.imgItem})
                    }}>
                        <Image
                            style={styles.img}
                            source={{uri: item.imgItem}}/>
                    </TouchableWithoutFeedback>

                <View style={styles.itemTextContainer}>
                 <Text style={styles.author}>Author: </Text><Text>{item.author}</Text>
                </View>
            </View>
        )
    }


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
        height: (WIDTH - PADDING * 2) / 1.5 - 5,
        borderRadius: 15
    },
    img: {
        width: '100%',
        height: '90%',
        resizeMode: "contain"
    },
    itemTextContainer: {
       flexDirection: "row",
        marginLeft: 5,
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
    }
});
