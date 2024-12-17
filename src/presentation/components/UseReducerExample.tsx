import React, {useReducer, useState} from 'react';
import {Button, Text, View} from 'react-native';

type Todo = {
  id: number;
  title: string;
  complete: boolean;
};

type Action = {
  type: 'COMPLETE';
  id: number;
};

const initialTodos: Todo[] = [
  {
    id: 1,
    title: 'Todo 1',
    complete: false,
  },
  {
    id: 2,
    title: 'Todo 2',
    complete: false,
  },
  {
    id: 3,
    title: 'Todo 3',
    complete: false,
  },
];

const reducer = (state: Todo[], action: Action) => {
  switch (action.type) {
    case 'COMPLETE':
      return state.map(t => {
        if (t.id === action.id) {
          return {...t, complete: !t.complete};
        }
        return t;
      });
    default:
      return state;
  }
};

export const UseReducerExample = () => {
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  const handleConflict = (todo: any) => {
    dispatch({type: 'COMPLETE', id: todo.id});
  };
  return (
    <>
      {todos.map(todo => (
        <View
          key={todo.id}
          style={{
            backgroundColor: todo.complete ? 'green' : 'red',
            flexDirection: 'row',
          }}>
          <Button
            title={todo.complete ? 'Complete' : 'Incomplete'}
            onPress={() => {
              handleConflict(todo);
            }}
          />
          <Text>{todo.title}</Text>
        </View>
      ))}
    </>
  );
};
