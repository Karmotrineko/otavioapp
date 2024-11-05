import { Link } from 'expo-router';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      {/* Avatar Image */}
      <Image
        source={require('../assets/images/logouvv.png')} // Substitua pelo caminho da imagem do avatar
        style={styles.avatar}
      />

      {/* Username Input */}
      <TextInput
        style={styles.input}
        placeholder="username"
        placeholderTextColor="#000"
      />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="senha"
        secureTextEntry
        placeholderTextColor="#000"
      />

      {/* Login Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>

      {/* Links for "Forgot Password" and "Sign Up" */}
      <View style={styles.linkContainer}>
        <Text style={styles.link}>Esqueci minha senha</Text>
        <Link href={"/register"}>Cadastro</Link>
      </View>

      {/* Diamond Image */}
      <Image
        source={require('../assets/images/logocompany.png')} // Substitua pelo caminho da imagem do diamante
        style={styles.diamond}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'ligthblue',
  },
  avatar: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  button: {
    width: '80%',
    height: 40,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginVertical: 10,
  },
  link: {
    color: '#000',
    textDecorationLine: 'underline',
  },
  diamond: {
    width: 30,
    height: 30,
    marginTop: 20,
  },
});
