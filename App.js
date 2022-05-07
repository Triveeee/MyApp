import React from 'react';
import { Text, Image , TextInput , View } from 'react-native';

//variabile globale
let nome2 = "variabile globale"


//una funzione non puo restituire piu di un valore come in python
//nelle parentesi quadre non c'e bisogno di specificare il tipo di parametro
//parametro e un ogetto che contiene tutti i parametri che specifichiamo all'interno dell Tag
function Helloword (parametro) {
    let nome = parametro.name;
    return (
        <Text>Ciao mondo {nome}</Text>
    )
}

//funzione javaScript 
function getName (){

}

//main
function App () {
  return (

    <View>
      <Helloword name = "Riccardo"></Helloword>
      <Helloword name = {nome2}></Helloword>

      <Image
        source = {{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}} 
        style = {{width : 100 , height : 100}}
      />
      <TextInput 
        style = {{height : 80 , borderColor : 'gray' , borderWidth : 5 , textAlign : 'center' , margin: 10}} 
        defaultValue = "puoi scrivere"
      />
    </View>
  )
}

export default App