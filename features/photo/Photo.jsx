import React from 'react';
import {View, Image, StyleSheet} from "react-native";

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
        width: '100%',
        height: '100%',
        resizeMode: "contain",
    }
});
