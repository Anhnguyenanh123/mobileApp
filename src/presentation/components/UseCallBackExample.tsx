import React, {useCallback, useState} from 'react';
import {Button, Text, View} from 'react-native';
import Todos from './TodoList';

const initTodos: string[] = [];

export const UseCallBackExample = () => {
  const [todos, setTodos] = useState(initTodos);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const addTodo = useCallback(() => {
    setTodos(t => [...t, 'New Todo' + Math.random()]);
  }, [todos]);

  return (
    <>
      <Todos todos={todos} addTodo={addTodo} />
      <Text>{count}</Text>
      <Button title="Increment" onPress={increment} />
    </>
  );
};
