// rnfes
// extension ajouter en plus l'extension 
import { StyleSheet, Text, View , Button , TextInput } from 'react-native'
import React, { useState } from 'react'
const FormCreate = () => {

 const [age, setAge]= useState ("");
 const [nom, setNom]= useState ("0");
 const [email, setEmail]= useState ("");

 const handleSubmit = ()=>{
    console.log(nom,age,email);
 }

  return (
    <View>
      <Text>Créer un nouveau profil étudiant</Text>
      <TextInput placeholder="nom" onChangeText={function(text){setAge(text)}} value={age} style={styles.input} />
      <TextInput placeholder="age" onChangeText={function(text){setNom(text)}} value={nom} style={styles.input}/>
      <TextInput placeholder="email" onChangeText={function(text){setEmail(text)}} value={email} style={styles.input}/>
      <Button title="créer" onPress={handleSubmit} />
    </View>
  )
}
export default FormCreate
const styles = StyleSheet.create({
    input : {
        borderColor : "black" , padding : 10 , borderWidth : 2 , marginVertical : 10
    }
})