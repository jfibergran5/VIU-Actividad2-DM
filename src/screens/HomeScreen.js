import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';
import { useNavigation } from '@react-navigation/core';

export default function HomeScreen({ navigation }) {

    return (
        <View>
            <Text>HELLO HOMESCREEN</Text>
            <Button
                title = "Ir a pantalla detalle"
                onPress= { () => navigation.navigate('DetailScreen') }
            />
        </View>
    );
};