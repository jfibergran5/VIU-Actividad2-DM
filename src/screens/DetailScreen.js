import { ActivityIndicator, Button, Dimensions, FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useEventsDetails } from '../hooks/useEventsDetails';
import { EventDetails } from '../components/EventDetails';

const height = Dimensions.get('screen').height;

export default function DetailScreen ({ navigation, route }) {

    const event = route.params;
    //console.log(event.title);
    const uri =  `https://image.tmdb.org/t/p/w500${event.poster_path}`;

    // Hook personalizado
    const { isLoading, cast, eventFull } = useEventsDetails(event.id);
    console.log(isLoading);

    return (
        <ScrollView>
            <View style={{ marginBottom: 100 }} >
                <View style={ styles.imageContainer }>
                    <Image 
                        source={{ uri }}
                        style={ styles.posterImage }
                    />
                </View>
                <View style={ styles.marginContainer }>
                    {
                        isLoading
                        ? <ActivityIndicator size={100} color="grey" />
                        : <EventDetails eventFull={ eventFull } />
                    }                        
                </View>
                <View style={ styles.button }>
                    <Button                                   
                        onPress={ () => navigation.navigate('OrganizersScreen', cast) }
                        title='Click aquí para ver organizadores'                            
                    />  
                </View>                
            </View>

            { /* Boton de volver atrás */ }
            <View style={ styles.backButton }>
                <Button                    
                    title='<-- Atrás'
                    onPress={ () => navigation.pop() }
                />
            </View>          

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    posterImage: {
        flex: 1
    },
    imageContainer: {
        width: '100%',
        height: height  * 0.7
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20
    },
    subtitle: {
        fontSize: 18,
        opacity: 0.8
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    contentCast: {
        marginHorizontal: 20,
        marginTop: 20
    },
    button: {
        marginTop: 30,
        marginBottom: 100,
    },
    backButton: {
        position: 'absolute',
        zIndex: 999,
        elevation: 9,
        top: 50
    }
})