import { ActivityIndicator, Text, View } from 'react-native';
import { useEvents } from '../hooks/useEvents';
import {EventCard} from '../components/EventCard';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const HomeScreen = () => {

    // Desestructuramos los states de nuestro hook personalizado 
    const { actualEvents, isLoading } = useEvents();

    // Desestructuramos un valor que viene en useSafeAreaInsets();
    const { top } = useSafeAreaInsets();

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
    } 

    return (
        <View style={{ marginTop: top + 20 }} >
            <EventCard 
                event = {
                    actualEvents[0]
                }
            />
        </View>
    );
    
    
};