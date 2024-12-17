import React, {useCallback, useMemo, useState} from 'react';
import {Button, Text, View} from 'react-native';
import Todos from './TodoList';

const initTodos: string[] = [];

export const UseMemoExample = () => {
  const [todos, setTodos] = useState(initTodos);
  const [count, setCount] = useState(0);
  const result = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount(count + 1);
  };
  const addTodo = useCallback(() => {
    setTodos(t => [...t, 'New Todo' + Math.random()]);
  }, [todos]);
  return (
    <>
      <View>
        <Todos todos={todos} addTodo={addTodo} />
        <Text>{count}</Text>
        <Text>{result}</Text>
        <Button title="Increment" onPress={increment} />
      </View>
    </>
  );
};

const expensiveCalculation = (count: number) => {
  console.log('Calculating...');
  for (let i = 0; i < 1000000000; i++) {
    count += 1;
  }
  return count;
};
