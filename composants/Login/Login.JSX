import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
  },
};

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Ajoutez votre logique de connexion ici
    console.log('Email:', email);
    console.log('Password:', password);
  }

  return (
    <View>
      <TextInput
        label="Email"
        value={email}
        onChangeText={text => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        label="Password"
        secureTextEntry
        value={password}
        onChangeText={text => setPassword(text)}
        style={styles.input}
      />
      <Button mode="contained" onPress={handleLogin} style={styles.button}>Connexion</Button>
    </View>
  );
}

export default LoginForm;
