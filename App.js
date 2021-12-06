import { StyleSheet, Text, Image, ScrollView, TextInput } from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [text,setText] = useState('')
  return (
    <ScrollView>
      <Text>Some text</Text>
      <Text>{text}</Text>
      <Image 
        source={{
          uri:'https://reactnative.dev/docs/assets/p_cat2.png',
        }}
        style={{ width: 200, height:200}}
      />

      <TextInput 
        style={{
          height:50,
          borderColor:'grey',
          borderWidth:1
        }}
        defaultValue="You cant type me"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <Text style={styles.newtext}>{text}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  newtext:{
    color:'red',
    fontWeight:'bold'
  }
})