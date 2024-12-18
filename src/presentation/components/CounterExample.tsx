import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Store} from '../../store';
import {increment, decrement} from '../../slice/counterSlice';
import {Button, Text} from 'react-native';

export const CounterExample = () => {
  const count = useSelector((state: Store) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <Text style={{color: 'red', fontSize: 30}}>{count}</Text>
      <Button title="Increment" onPress={() => dispatch(increment())} />
      <Button title="Decrement" onPress={() => dispatch(decrement())} />
    </>
  );
};
