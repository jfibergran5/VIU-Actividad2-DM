import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/core'


export const EventCard = ({ event, height = 420, width = 300}) => {
    //console.log(event);
    // Esta ruta siempre es la misma para mostrar la imagen
    const uri =  `https://image.tmdb.org/t/p/w500${event.poster_path}` 
    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            onPress={ () => navigation.navigate('DetailScreen', event) }
            style={{
                width,
                height,
                marginHorizontal: 5
            }}
        >
            <View style={ styles.imageContainer }>
                <Image 
                    source = {{
                        uri: uri
                    }}
                    style={
                        styles.image
                    }
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 18,
    },
    imageContainer: {
        flex: 1,
        borderRadius: 18,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 7,

        elevation: 9,
    }
})