import { FlatList, Text, View } from 'react-native';
import { EventCard } from '../components/EventCard';


export const HorizontalSlider = ({ title, events }) => {
    return (
        <View style = {{ 
                height: (title) ? 260 : 220, 
                paddingTop:10 
        }} >
            {
                title && <Text style={{ fontSize:16, fontWeight:'bold', marginBottom:10 }} > { title } </Text>
            }    
            <FlatList 
                data = { events }
                renderItem = { 
                    ({item}) =>  <EventCard event={item} width={140} height={200} /> 
                }
                keyExtractor = { (item) => item.id.toString() }
                horizontal = { true }
                showsHorizontalScrollIndicator = { false }
            />
        </View>
    );
};