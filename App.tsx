/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
    StyleSheet,
} from "react-native";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AppNavigation from './src/navigation/AppNavigation';
import { Provider, useSelector } from 'react-redux';
import store from './src/redux/store';

const App = () => {
    return (
        <Provider store={store}>
            <AppNavigation />
        </Provider>
    );
}

const styles = StyleSheet.create({
    fontSize: {
        fontSize: hp(3)
    }
});

export default App;