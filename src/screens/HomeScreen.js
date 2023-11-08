import { ActivityIndicator, Text, View } from 'react-native';
import { Button } from 'react-native-web';
import { useEvents } from '../hooks/useEvents';

export default function HomeScreen({ navigation }) {

    const { actualEvents, isLoading } = useEvents();

    if(isLoading) {
        return (
            <View style={{ 
                flex: 1,
                justifyContent: 'center',
                alignContent: 'center'
             }}>
                <ActivityIndicator color="blue" size={ 100 } />
            </View>
        )
    } else {
        console.log(actualEvents[1]?.title);
    }

    

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