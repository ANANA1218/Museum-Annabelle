import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const styles = {
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
  },
};

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = () => {
    // Ajoutez votre logique de récupération de mot de passe ici
    console.log('Email:', email);
  }

  return (
    <View>
      <TextInput
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
      />
      <Button mode="contained" onPress={handleForgotPassword} style={styles.button}>Réinitialiser le mot de passe</Button>
    </View>
  );
}

export default ForgotPasswordForm;
