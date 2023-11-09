import { StyleSheet, Text, View, Image } from 'react-native';


export const EventCard = ( { event } ) => {

    //console.log(event);
    // Esta ruta siempre es la misma para mostrar la imagen
    const uri =  `https://image.tmdb.org/t/p/w500${event.poster_path}` 

    return (
        <View style={{
            width: 300,
            height: 420
        }}>
            <Image 
                source = {{
                    uri: uri
                }}

                style={
                    styles.image
                }
            />
        </View>
    )

}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    }
})