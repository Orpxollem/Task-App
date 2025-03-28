import { StatusBar } from 'expo-status-bar';
import {useState} from 'react'
import { StyleSheet, Text, View, Image, TextInput, ScrollView, FlatList, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const profileImage = require('./assets/images/profileImage.png');
const category1 = require('./assets/images/category1.png');
const category2 = require('./assets/images/category2.png');
const category3 = require('./assets/images/category3.png');
const category4 = require('./assets/images/category4.png');
const category5 = require('./assets/images/category5.png');
const category6 = require('./assets/images/category6.png');
const category7 = require('./assets/images/category7.png');
const category8 = require('./assets/images/category8.png');


export default function App() {

  const[task, setTask] = useState([
    {name: 'Mobile Application Development', key:'1'},
    {name: 'Web Development', key:'2'},
    {name: 'Push Ups', key:'3'},
    {name: 'Squats', key:'4'},
    {name: 'Complete Assignment', key:'5'},
    {name: 'Play a Game', key:'6'},
    {name: 'Watch a movie', key:'7'},
    {name: 'Prepare for project presentation', key:'8'},
    {name: 'Organize closet', key:'9'},
    {name: 'Cook a meal', key:'10'},
    {name: 'Prepare for Computational Methods Slides', key:'11'},
    {name: 'Prepare for Data Structures IA', key:'12'},
    {name: 'Finish up on Expo project', key:'13'},
    {name: 'Read on the change and demands concerning programming languages', key:'14'},
    {name: 'Prepare clothes and study material for class', key:'15'},
  ]);

  return (
      <View style={styles.container}>

        <View style={styles.header}>
          <View>
            <Text style={{fontFamily: 'Lato', fontSize: 30, fontWeight: 'bold'}}>Hello, Devs</Text>
            <Text>15 Tasks today</Text>
          </View>
            <Image source={profileImage}/>
        </View>

        <View style={styles.searchBox}>
          <View>
            <Icon name='search' size={20}/>
            <TextInput placeholder='Search' style={{fontWeight: 'bold', marginLeft: 30, marginTop: -18}}/>
          </View>
          
          <View>
          <TextInput editable={false} selectTextOnFocus={false} style={styles.filter}><Icon name='options-sharp' color='white' size={34}/></TextInput>
          </View>
        </View>

        <ScrollView>
        
          <Text style={styles.Header2}>Categories</Text>

          <View style={styles.Box}>  
            <View>
              <TextInput editable={false} selectTextOnFocus={false} style={styles.categoryBox}/>
              <Text style={{fontWeight: 'bold', marginTop: -180, marginLeft: 12}}>Excercise</Text>
              <Text style={{marginLeft: 12}}>2 Tasks</Text>
              <Image style={{ marginLeft: 25}} source={category1}/>
            </View>

            <View style={{marginLeft: 10}}>
              <TextInput editable={false} selectTextOnFocus={false} style={styles.categoryBox}/>
              <Text style={{fontWeight: 'bold', marginTop: -180, marginLeft: 12}}>Study</Text>
              <Text style={{marginLeft: 12}}>4 Tasks</Text>
              <Image style={{ marginLeft: 25}} source={category2}/>
            </View>
          </View>

          <View style={styles.Box}>  
            <View>
              <TextInput editable={false} selectTextOnFocus={false} style={styles.categoryBox}/>
              <Text style={{fontWeight: 'bold', marginTop: -180, marginLeft: 12}}>Code</Text>
              <Text style={{marginLeft: 12}}>3 Tasks</Text>
              <Image style={{ marginLeft: 25}} source={category3}/>
            </View>

            <View style={{marginLeft: 10}}>
              <TextInput editable={false} selectTextOnFocus={false} style={styles.categoryBox}/>
              <Text style={{fontWeight: 'bold', marginTop: -180, marginLeft: 12}}>Cook</Text>
              <Text style={{marginLeft: 12}}>1 Task</Text>
              <Image style={{ marginLeft: 25}} source={category4}/>
            </View>
          </View>

          <View style={styles.Box}>  
            <View>
              <TextInput editable={false} selectTextOnFocus={false} style={styles.categoryBox}/>
              <Text style={{fontWeight: 'bold', marginTop: -180, marginLeft: 12}}>Research</Text>
              <Text style={{marginLeft: 12}}>1 Task</Text>
              <Image style={{ marginLeft: 25}} source={category5}/>
            </View>

            <View style={{marginLeft: 10}}>
              <TextInput editable={false} selectTextOnFocus={false} style={styles.categoryBox}/>
              <Text style={{fontWeight: 'bold', marginTop: -180, marginLeft: 12}}>Chores</Text>
              <Text style={{marginLeft: 12}}>2 Tasks</Text>
              <Image style={{ marginLeft: 25}} source={category6}/>
            </View>
          </View>

          <View style={styles.Box}>  
            <View>
              <TextInput editable={false} selectTextOnFocus={false} style={styles.categoryBox}/>
              <Text style={{fontWeight: 'bold', marginTop: -180, marginLeft: 12}}>Hobby</Text>
              <Text style={{marginLeft: 12}}>1 Task</Text>
              <Image style={{ marginLeft: 25}} source={category7}/>
            </View>

            <View style={{marginLeft: 10}}>
              <TextInput editable={false} selectTextOnFocus={false} style={styles.categoryBox}/>
              <Text style={{fontWeight: 'bold', marginTop: -180, marginLeft: 12}}>Entertainment</Text>
              <Text style={{marginLeft: 12}}>1 Task</Text>
              <Image style={{ marginLeft: 25}} source={category8}/>
            </View>
          </View>
        
          <Text style={styles.Header2}>Ongoing Task</Text>

          <View>
            <FlatList
            data={task}
            renderItem={({item}) => (
              <View style={styles.taskList}>
                <Button title={item.name} color='black' onPress={() => {}}/>
              </View>
            )}
            />
          </View>
          
        </ScrollView>
      </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F0E8',
    paddingHorizontal: 20,
    paddingVertical: 100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: '#000000',
    fontFamily: 'Lato',
    marginBottom: 30,
  },
  profileImage: {
    width: 50,
    height: 52,
  },
  searchBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 10,
    width: 260,
    height: 40,
  },
  filter: {
    backgroundColor: '#F0522F',
    padding: 5,
    borderRadius: 13,
    width: 45,
    height: 42,
    marginTop: -10,
    marginLeft: 215,
  },
  Header2: {
    marginTop: 45,
    marginBottom: 10,
    fontFamily: 'Lato',
    fontSize: 23,
    lineHeight: 30,
    fontWeight: '700',
  },
  Box: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  categoryBox: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 10,
    width: 175,
    height: 192,
  },
  taskList: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    marginTop: 20,
    borderRadius: 10,
    width: 350,
    height: 110,
    wrapText: true,
  },
});
