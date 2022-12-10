import React from 'react';
import {View, Image, Dimensions, StyleSheet} from "react-native";

const {width} = Dimensions.get('screen')

const WIDTH = width
const PADDING = 5

export const Photo = ({route, navigation}) => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={{uri: route.params.image}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 5,
    },
    image: {
        backgroundColor: 'white',
        width: (WIDTH - PADDING),
        height: (WIDTH - PADDING),
        borderRadius: 15,
        resizeMode: "contain"
    }
});
