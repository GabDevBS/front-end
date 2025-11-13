import { StyleSheet, Text, View, TextInput,TouchableOpacity } from 'react-native'
import { React, useState } from 'react'
import { Link } from 'expo-router'

export default function index() {
const [nome, setNome] = useState ('')
const [email, setEmail] = useState ('')

  return (
    <View style={styles.background}>
      <View style={styles.div}>
        <Text style={{
          fontSize: '15px',
          fontWeight: 'bold',
          marginBottom: '5px'
        }}>Bem-Vindo(a)</Text>
        <Text>Nome</Text>
        <TextInput
        placeholder='Digite seu nome completo'
        placeholderTextColor={'#999'}
        onChangeText={setNome}
        value= {nome}
        />

        <Text>Email</Text>
        <TextInput
        placeholder='nome@exemplo.com'
        placeholderTextColor={'#999'}
        onChangeText={setEmail}
        value= {email}
        />
        <Link href={'/home'}>
        <TouchableOpacity>Sign In</TouchableOpacity>
        </Link>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    backgroundColor:'#f7f4f9',
    justifyContent:'center',
    alignItems:'center'
  },
  div:{
    backgroundColor:'#e9e4ed',
    padding: '70px',
    width: '50%',
    borderRadius: '10px',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 3,
  },
  label:{
    fontSize: '15px',
    fontWeight: 'bold',
    marginBottom: '5px'
  },
})


