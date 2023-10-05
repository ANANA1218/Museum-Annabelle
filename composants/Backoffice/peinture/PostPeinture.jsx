import { StyleSheet, Text, View, Button, TextInput, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import { schemaOeuvres } from '../../../verif/oeuvres';
import db from '../../../config';
import { collection, addDoc } from 'firebase/firestore';
import * as ImagePicker from 'expo-image-picker';


const PostPeinture = () => {
  const [nom, setNom] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [auteur, setAuteur] = useState("");
  const [dateCreation, setDateCreation] = useState("");
  const [userId, setUserId] = useState("");

  const handleSubmit = () => {
      console.log(nom, description, image, auteur, dateCreation, userId);

      const oeuvre = {
          nom,
          description,
          image,
          auteur,
          dateCreation: dateCreation,
          userId: userId
      };

      const { error } = schemaOeuvres.validate(oeuvre, { abortEarly: false });

      console.log(error);

      if (!error) {
          addDoc(collection(db, "oeuvres"), oeuvre);
      }
  }

  return (
      <View>
          <Text>Créer une nouvelle oeuvre</Text>
          <TextInput
              placeholder="nom"
              onChangeText={text => setNom(text)}
              value={nom}
              style={styles.input}
          />
          <TextInput
              placeholder="description"
              onChangeText={text => setDescription(text)}
              value={description}
              style={styles.input}
          />
          <TextInput
              placeholder="image"
              onChangeText={text => setImage(text)}
              value={image}
              style={styles.input}
          />
          <TextInput
              placeholder="auteur"
              onChangeText={text => setAuteur(text)}
              value={auteur}
              style={styles.input}
          />
          <TextInput
              placeholder="date de création"
              onChangeText={text => setDateCreation(text)}
              value={dateCreation}
              style={styles.input}
          />
          <TextInput
              placeholder="user id"
              onChangeText={text => setUserId(text)}
              value={userId}
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
