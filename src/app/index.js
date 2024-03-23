import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import exercises from "../../assets/data/exercises.json"
import ExerciseListItem from '../../src/components/ExerxiseListItem'

export default function App() {
  const exercise = exercises[0]
  return (
    <View style={styles.container}>
      <FlatList
      data={exercises}
      contentContainerStyle={{gap: 10}}
    keyExtractor={(item,index) => item.name + index}
      renderItem={({item}) =><ExerciseListItem key={item} item={item}/>}
      />
     
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'ghostwhite',
   
    justifyContent: 'center',
    padding: 10,
  },

});