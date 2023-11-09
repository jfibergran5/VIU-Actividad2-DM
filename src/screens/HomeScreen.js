import { ActivityIndicator, View, Dimensions, FlatList, Text } from 'react-native';
import { useEvents } from '../hooks/useEvents';
import { EventCard } from '../components/EventCard';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';

export const HomeScreen = () => {

    // Obtenemos el ancho de nuestra pantalla
    const { width } = Dimensions.get('window');

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
        <View>
            { /* Carousel de cabecera */ }            
            <View style={{ marginTop: top + 20 }} >    
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}> Eventos próximos </Text>        
                <Carousel 
                    data = { actualEvents }
                    renderItem = { ({item}) =>  <EventCard event = { item } /> }
                    sliderWidth = { width }
                    itemWidth = { 300 }
                />
            </View>

            { /* Listado de footer */ }
            <Text style={{ fontSize: 30, fontWeight: 'bold' }} > Agenda de eventos </Text>
            <View style={{ height:230 }} >
                <FlatList 
                    data = { actualEvents }
                    renderItem = { ({item}) =>  <EventCard event = { item } /> }
                    keyExtractor = { (item) => item.id.toString() }
                    horizontal = { true }
                />
            </View>
        </View>
        

        
    );
    
    
};