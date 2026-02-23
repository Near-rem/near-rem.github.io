import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView, Linking, ViewStyle } from 'react-native';

// Componente para o efeito §k (Minecraft Obfuscated) com prefixo
const ObfuscatedText = ({ length }) => {
  const [glitchText, setGlitchText] = useState('');
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()бвгджзклмнпрстфхцчшщ';

  useEffect(() => {
    const interval = setInterval(() => {
      let result = '';
      for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      setGlitchText(result);
    }, 50); 
    return () => clearInterval(interval);
  }, [length]);

  return (
    <Text style={styles.bio}>
      Código de segurança: <Text style={{fontWeight: 'bold'}}>{glitchText}</Text>
    </Text>
  );
};

export default function App() {
  
  const projects = [
    { id: 1, title: 'Meu Discord', url: 'https://discord.com/users/688116774092144669' },
    { id: 2, title: 'Hacks', url: 'https://discord.com/users/688116774092144669' },
    { id: 3, title: 'Zap', url: 'https://wa.me/5521971839439' },
    { id: 4, title: 'Projetos (DEMO)', url: 'https://discord.gg/q6fjFP6y9f' },
  ];

  const handlePress = (url) => {
    Linking.openURL(url).catch((err) => console.error("Erro ao abrir link", err));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        
        {/* Espaço para sua Foto */}
        <View style={styles.photoContainer}>
          <Image 
            source={{ uri: 'https://images.steamusercontent.com/ugc/1707411824065086559/2A529F1C69440493566E31AB4242623DC50F8875/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false' }} 
            style={styles.photo} 
          />
        </View>

        {/* Nome */}
        <Text style={styles.name}>Near Rem</Text>
        
        {/* Bio com prefixo + efeito §k e cor Verde */}
        <ObfuscatedText length={10} />

        {/* Lista de Botões */}
        <View style={styles.buttonContainer}>
          {projects.map((project) => (
            <TouchableOpacity 
              key={project.id} 
              style={styles.button}
              onPress={() => handlePress(project.url)}
              activeOpacity={0.7}
            >
              <Text style={styles.buttonText}>{project.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000', 
  },
  content: {
    alignItems: 'center',
    paddingVertical: 50,
  },
  photoContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#1a1a1a', 
    marginBottom: 20,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#007AFF', 
  },
  photo: {
    width: '100%',
    height: '100%',
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#FFFFFF', 
    letterSpacing: 1,
  },
  bio: {
    fontSize: 14, // Diminuí um pouco para caber a frase toda em uma linha
    color: '#00FF00', 
    marginBottom: 30,
    marginTop: 10,
    fontFamily: 'monospace',
    textAlign: 'center',
  },
  buttonContainer: {
    width: '85%',
  },
  button: {
    backgroundColor: '#1A1A1A', 
    padding: 18,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333', 
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
