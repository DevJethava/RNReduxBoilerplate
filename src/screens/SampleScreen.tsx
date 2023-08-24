import React from 'react'
import { View, Text, SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const SampleScreen = () => {
    return (
        <SafeAreaView className="flex">
            <StatusBar
                barStyle={'dark-content'}
            />
            <View className="p-2 h-full justify-center items-center bg-slate-300">
                <View className="flex-row">
                    <Text className="text-2xl text-center">Hello </Text>
                    <Text className="text-center" style={styles.fontSize}>World!</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    fontSize: {
        fontSize: hp(3)
    }
});

export default SampleScreen