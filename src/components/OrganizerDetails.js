import { Text, View, StyleSheet, Image, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export const OrganizerDetails = ({ actor }) => {

    const uri =  `https://image.tmdb.org/t/p/w500${ actor.profile_path }`;
    console.log(actor);

    return (
        <ScrollView>
            <View style={ styles.imageContainer }>
                {
                    actor.profile_path &&
                    <Image 
                        style={ styles.posterImage }
                        source={{ uri }}
                    />
                }                
                <Text style={ styles.subtitle }> 
                    {actor.name}
                </Text>
                <Text style={ styles.content }> 
                    {actor.character}
                </Text>
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
        height: 250,
        marginVertical: 20
    },
    marginContainer: {
        marginHorizontal: 20,
        marginTop: 20
    },
    subtitle: {
        fontSize: 18,
        fontWeight: 'bold',
        opacity: 0.5
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    content: {
        fontSize: 16
    },
    backButton: {
        position: 'absolute',
        zIndex: 999,
        elevation: 9,
        top: 50
    }
});