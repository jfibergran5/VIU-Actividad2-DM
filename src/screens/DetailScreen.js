import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
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
                    : <EventDetails eventFull={ eventFull } cast={ cast } />
                }
               
                
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
    }
})