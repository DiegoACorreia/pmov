import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';



export default function () {
    return (
    <View>
        <Text style={styles.container}>Hello World</Text>
    </View>
    )
}

const styles = StyleSheet.create( {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItens: 'center',
    },
    }
);