import React, {memo} from 'react';
import {View, Text, Button} from 'react-native';

type TodoProps = {
  todos: string[];
  addTodo: any;
};

const Todos = (todoProps: TodoProps) => {
  return (
    <View>
      <Text>To Do List</Text>
      {todoProps.todos.map(todo => {
        return <Text key={todo}>{todo}</Text>;
      })}
      <Button title="Add Todo" onPress={todoProps.addTodo} />
    </View>
  );
};

export default memo(Todos);
