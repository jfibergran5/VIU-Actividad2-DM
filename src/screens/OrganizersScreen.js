import { Text, View, StyleSheet, Image, Dimensions, FlatList, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { OrganizerDetails } from '../components/OrganizerDetails';

const height = Dimensions.get('screen').height;

export default function OrganizersScreen ({ navigation, route }) {

    const cast = route.params;
    console.log(cast);

    return (
        <ScrollView>
            <View style={ styles.contentCast } >
                <Text style={ styles.title }> 
                    Organizadores
                </Text>
                {
                    <FlatList 
                        data={cast}
                        keyExtrator={ (item) => item.id }
                        renderItem={ ({item}) => <OrganizerDetails actor={ item } /> }
                        horizontal={ false }
                    />     
                }                                                               
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
        fontWeight: 'bold',
        marginTop: 40,
        marginBottom: 20
    },
    contentCast: {
        marginHorizontal: 20,
        marginTop: 20
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
    backButton: {
        position: 'absolute',
        zIndex: 999,
        elevation: 9,
        top: 80
    }
});