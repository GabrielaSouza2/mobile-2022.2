import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-elements';



export default function Principal({navigation}) {

  const entrar = () => {
    navigation.reset(
        {
            index: 0,
            routes: [{name: "Menu"}]
        }
    )

    
  }


  return (
    <View style={styles.container}>
      <Text>Gabriela Maria Melo de Souza</Text>
      <Button 
      title="Clica aqui pra ve foto"
      onPress={() => entrar()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
