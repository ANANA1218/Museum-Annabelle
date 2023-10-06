import { StyleSheet, Text, View, Button, TextInput, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import { schemaUsers } from '../../../verif/oeuvres';
import db from '../../../config';
import { collection, addDoc } from 'firebase/firestore';
import * as ImagePicker from 'expo-image-picker';


const PostPeinture = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = () => {
      console.log(email, password, role);

      const user = {
        email,
        password,
        role,
      };

      const { error } = schemaUsers.validate(user, { abortEarly: false });

      console.log(error);

      if (!error) {
          addDoc(collection(db, "users"), user);
      }
  }

  return (
      <View>
          <Text>Créer un nouvelle user</Text>
          <TextInput
              placeholder="email"
              onChangeText={text => setEmail(text)}
              value={email}
              style={styles.input}
          />
          <TextInput
              placeholder="password"
              onChangeText={text => setPassword(text)}
              value={password}
              style={styles.input}
          />
          <TextInput
              placeholder="role"
              onChangeText={text => setRole(text)}
              value={role}
              style={styles.input}
          />
         
          <Button title="créer" onPress={handleSubmit} />
      </View>
  )
}


export default PostPeinture;


const styles = StyleSheet.create({
  input: {
    borderColor: 'black',
    padding: 10,
    borderWidth: 2,
    marginVertical: 10,
  },
  imagePreview: {
    width: 100,
    height: 100,
  },
});
