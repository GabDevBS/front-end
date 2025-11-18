import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import { React, useEffect, useState } from 'react'
import { Link, useRouter } from 'expo-router'

export default function index() {
  const router = useRouter();
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [visivel, setVisivel] =useState(false)

  const Login = () => {
    const dados = {
      email,
      senha
    }
    fetch('http://localhost:8800/login',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
      })
      .then(res => res.json())
      .then(dados => {
        if (dados.token) {
          router.replace('/home')
        } else {
          alert("Usuário e/ou senha incorretos")
        }
      })
  }
  return (
    <View style={styles.background}>
      <View style={styles.div}>
        <Text style={{
          fontSize: '25px',
          fontWeight: 'bold',
          marginBottom: '5px'
        }}>Bem-Vindo(a)</Text>
        <Text>Email</Text>
        <TextInput
          placeholder='nome@exemplo.com'
          placeholderTextColor={'#999'}
          onChangeText={setEmail}
          value={email}
          style={styles.input}
        />
        <Text>Senha</Text>
        <TextInput
          placeholder='Digite sua senha'
          placeholderTextColor={'#999'}
          onChangeText={setSenha}
          value={senha}
          style={styles.input}
          secureTextEntry={!visivel}
        />
        <TouchableOpacity onPress={() => setVisivel(!visivel)} style={styles.buttonVisivel}>
          <Text style={{color:'#f2eef5'}}>{visivel ? 'Ocultar' : 'Mostrar'}</Text>
        </TouchableOpacity>
        <br />
        <Text style={styles.textbutton}>
          <TouchableOpacity activeOpacity={0.6} style={styles.button} onPress={Login}>Sign In</TouchableOpacity>
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#f7f4f9',
    justifyContent: 'center',
    alignItems: 'center'
  },
  div: {
    backgroundColor: '#e9e4ed',
    padding: '70px',
    width: '50%',
    borderRadius: '10px',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontSize: '15px',
    fontWeight: 'bold',
    marginBottom: '5px'
  },
  textbutton: {
    fontSize: '20px',
    color: '#f2eef5',
  },
  button: {
    backgroundColor: '#68507b',
    textAlign: 'center',
    padding: '20px',
    width: '100%',
    borderRadius: '10px'
  },
  input: {
    backgroundColor: '#fff',
    height: 45,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16
  },
  buttonVisivel:{
    flex:1,
    padding: 5,
    width: 100,
    backgroundColor:'#68507b',
    borderRadius:5,
    alignItems:'center'
  }
})


