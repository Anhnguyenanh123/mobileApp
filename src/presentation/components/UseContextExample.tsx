import React, {useContext, useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';

const userContext = React.createContext('John Doe');

export const UseContextExample = () => {
  const [userName, setUserName] = useState('John Doe');
  return (
    <>
      <View>
        <userContext.Provider value={userName}>
          <ProfileComponent />
        </userContext.Provider>
      </View>
    </>
  );
};

const ProfileComponent = () => {
  return <HeaderComponent />;
};

const HeaderComponent = () => {
  return <AvatarComponent />;
};

const AvatarComponent = () => {
  const userName = useContext(userContext);
  return (
    <View>
      <Text>{userName}</Text>
    </View>
  );
};
