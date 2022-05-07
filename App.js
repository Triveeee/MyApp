import React from 'react';
import { Text, Image , TextInput , View } from 'react-native';
import { useState } from 'react/cjs/react.production.min';

//variabile globale
let nome2 = "ciao"


//una funzione non puo restituire piu di un valore come in python
//nelle parentesi quadre non c'e bisogno di specificare il tipo di parametro
//parametro e un ogetto che contiene tutti i parametri che specifichiamo all'interno dell Tag

function Component (parametro) {

    let nome = parametro.name;

    return (
        <Text>Ciao mondo {nome}</Text>
    )
}

//funzione javaScript 
function getName (name1 , name2) {
    return (name1 + " , " + name2);
}

//main
function App () {
  return (

    <View>
      <Component name = "Riccardo"></Component>
      <Component name = {nome2}></Component>
      <Component name = {getName("Riccardo" , "Trivellato")}></Component>

      <Image
        source = {{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}} 
        style = {{width : 200 , height : 200}}
      />
      <TextInput 
        style = {{height : 80 , borderColor : 'gray' , borderWidth : 5 , textAlign : 'center' , margin: 10}} 
        defaultValue = "puoi scrivere"
      />
    </View>
  );
}

export default App