import { useState } from "react";
import { View, TextInput, Button, FlatList, Text } from "react-native";

const Tasks = () => {
  const [task, setTask] = useState<string>("");
  const [tasks, setTasks] = useState<string[]>([]);

  const add = () => {
    setTasks([...tasks, task]);
    setTask("");
  };

  const clear = () => {
    setTasks([]);
  };

  return (
    <View>
      <TextInput onChangeText={setTask} value={task} />
      <Button title="+" onPress={add} />
      <Button title="Clear" onPress={clear} />
      <FlatList data={tasks} renderItem={({ item }) => <Text>{item}</Text>} />
    </View>
  );
};

export default Tasks;
