import { Text, View, StyleSheet, SafeAreaView } from 'react-native';

export const EventDetails = ({ eventFull }) => {
    return (
        <SafeAreaView>
            <View style={ styles.imageContainer }>             
                <Text style={ styles.subtitle }> 
                    {eventFull.original_title} 
                </Text>
                <Text style={ styles.title }> 
                    {eventFull.title} 
                </Text>
                <Text style={ styles.content }> 
                    Calificación:  {eventFull.vote_average} 
                </Text>
                <Text style={ styles.content }> 
                    Asistencias:  {eventFull.budget} 
                </Text>
                <Text style={ styles.content }> 
                    Categorías: { eventFull.genres.map( g => g.name ).join(', ') } 
                </Text>
                <Text style={ styles.title }> 
                    Descripción
                </Text>
                <Text style={ styles.content }> 
                    {eventFull.overview} 
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    posterImage: {
        flex: 1
    },
    imageContainer: {
        width: '100%',
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
    content: {
        fontSize: 16
    }
});