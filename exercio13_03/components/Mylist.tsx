import React, {useState} from 'react';
import {View, TextInput, Text, Button} from 'react-native';



const TextInputExample = () => {
const [lembrete, onChangeText] = React.useState('');
const [listaLembrete, setListaLembrete] = useState<string[]>([]);
const handlePress = () => {
       setListaLembrete([...listaLembrete, lembrete]);
};
    


return (
<View>
    <Text style={{
        textAlign: 'center'
        
    }}>Digite seu lembrete:</Text>
      <TextInput
        style={{ height: 40, margin: 12, borderWidth: 1 }}
        onChangeText={onChangeText}
        value={lembrete}
      />
      <Button title='Adicionar lembrete' onPress={handlePress} />
      
      <Text>Lembretes adicionados: {listaLembrete.join(', ')}</Text>
    </View>
);
};
export default TextInputExample;