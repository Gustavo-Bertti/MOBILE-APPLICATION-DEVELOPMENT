import {useState} from 'react';
import {View, TextInput, Button, Text} from 'react-native';

const IMC = () => {
  const [weight, setWeight] = useState<string>();
  const [height, setHeight] = useState<string>();
  const [imc, setIMC] = useState<number>();

  const calculate = () => {
    if (!weight || !height) {
      return;
    }

    const numericWeight = parseFloat(weight);
    const numericHeight = parseFloat(height);

    const result = numericWeight / (numericHeight * numericHeight);
    setIMC(result);
  };

  const handleWeightChange = (text: string) => {
    setWeight(text);
    calculate();
  };

  const handleHeightChange = (text: string) => {
    setHeight(text);
    calculate();
  };

  return (
    <View>
      <Text>Peso</Text>
      <TextInput onChangeText={handleWeightChange} keyboardType="number-pad" />
      <Text>Altura</Text>
      <TextInput onChangeText={handleHeightChange} keyboardType="number-pad" />
      <Text>O seu IMC é: {imc}</Text>
    </View>
  );
};

export default IMC;
