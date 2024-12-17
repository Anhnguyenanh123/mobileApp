import React, {useEffect, useRef, useState} from 'react';
import {TextInput, View, Text} from 'react-native';

export const UseRefExample = () => {
  const [inputValue, setInputValue] = useState('');
  const count = useRef(0);
  useEffect(() => {
    count.current++;
  }, [inputValue]);
  return (
    <>
      <Text>{count.current}</Text>
      <TextInput
        style={{height: 40, backgroundColor: 'black', color: 'red'}}
        value={inputValue}
        onChangeText={e => setInputValue(e)}
      />
    </>
  );
};
