import { ActivityIndicator, View, Dimensions, Text, ScrollView } from 'react-native';
import { useEvents } from '../hooks/useEvents';
import { EventCard } from '../components/EventCard';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';

export const HomeScreen = () => {

    // Obtenemos el ancho de nuestra pantalla
    const { width } = Dimensions.get('window');

    // Desestructuramos los states de nuestro hook personalizado 
    const { nowPlaying, popular, topRated, upcoming, isLoading } = useEvents();

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
        <ScrollView>
            <View>
                { /* Carousel de cabecera */ }            
                <View style={{ marginTop: top + 30 }} >    
                <Text style={{ fontSize:20, fontWeight:'bold', paddingVertical:10 }}> Eventos próximos </Text>        
                    <Carousel 
                        data = { nowPlaying }
                        renderItem = { 
                            ({item}) =>  <EventCard event = { item } /> 
                        }
                        sliderWidth = { width }
                        itemWidth = { 300 }
                        inactiveSlideOpacity={0.3}
                    />
                </View>

                { /* Listado de footer */ }  

                <HorizontalSlider 
                    title="Mejores calificados" 
                    events={ topRated }
                />  

                <HorizontalSlider 
                    title="Agenda de eventos" 
                    events={ upcoming }
                />   

                <HorizontalSlider 
                    title="Eventos populares" 
                    events={ popular }
                />   

                                   
                
            </View>
        </ScrollView>

    );
    
};