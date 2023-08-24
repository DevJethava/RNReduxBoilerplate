import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, SafeAreaView, StatusBar, FlatList, Button } from 'react-native';
import { connect } from 'react-redux';
import { RootState } from '../redux/store';
import { DummyData, fetchDummyData } from '../redux/reducers/dummyReducer';
import { useNavigation, ParamListBase, NavigationProp } from '@react-navigation/native';
import Screens from '../utils/Screens';

interface DummyComponentProps {
    data: DummyData[];
    loading: boolean;
    error: string | null;
    fetchData: () => void;
}

const HomeScreen: React.FC<DummyComponentProps> = ({ data, loading, error, fetchData }) => {

    const navigation: NavigationProp<ParamListBase> = useNavigation();

    useEffect(() => {
        fetchData();
    }, []);

    const navigateToHome = () => {
        navigation.navigate(Screens.SampleScreen)
    }

    const Item = ({ id, title, body, userId }: DummyData) => (
        <View key={id} className="border-slate-900 border-[1px] my-1 p-1 rounded-lg">
            <Text className="text-lg text-slate-950">{title}</Text>
            <Text className="text-slate-600">{body}</Text>
        </View>
    );

    return (
        <SafeAreaView>
            <StatusBar
                barStyle={'dark-content'}
            />
            <View className="flex p-2 justify-center items-center">
                {
                    loading && <ActivityIndicator size='large' />
                }
                {
                    error && <Text className="text-lg text-slate-950">Error: {error}</Text>
                }
                <FlatList
                    ListHeaderComponent={
                        <View>
                            <Button title='Move Next' onPress={navigateToHome} />
                        </View>
                    }
                    data={data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => <Item id={item.id} title={item.title} body={item.body} userId={item.id} />}
                />
                {/* {data.map((item) => (
                        <View key={item.id}>
                            <Text>{item.title}</Text>
                            <Text>{item.body}</Text>
                        </View>
                    ))} */}
            </View>
        </SafeAreaView>
    );
};

const mapStateToProps = (state: RootState) => ({
    data: state.dummy.data,
    loading: state.dummy.loading,
    error: state.dummy.error,
});

const mapDispatchToProps = {
    fetchData: fetchDummyData,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);