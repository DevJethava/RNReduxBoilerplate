/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const App = () => {
    return (
        <NavigationContainer>
            <SafeAreaView className="flex">
                <StatusBar
                    barStyle={'dark-content'}
                />
                <View className="bg-white p-2 h-full justify-center items-center">
                    <View className="flex-row">
                        <Text className="text-2xl text-center">Hello </Text>
                        <Text className="text-center" style={styles.fontSize}>World!</Text>
                    </View>
                </View>
            </SafeAreaView>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    fontSize: {
        fontSize: hp(3)
    }
});

export default App;