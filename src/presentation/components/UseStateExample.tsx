import {useState} from 'react';
import {View, Text, Button} from 'react-native';
const UseStateExample = () => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Text>{count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default UseStateExample;
