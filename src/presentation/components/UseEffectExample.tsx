import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import container from '../../dependencies/dependencies';
import {PostClient} from '../../networking/post/PostClient';
import {Post} from '../../model/Post';

const initPost: Post[] = [];

const UseEffectExample = () => {
  const [reload, setReload] = useState(0);
  const postApi = container.get<PostClient>('PostClient');
  useEffect(() => {
    postApi.fetchPost().then(posts => {
      setPosts(posts);
    });
  }, [reload]);
  const [posts, setPosts] = useState(initPost);
  return (
    <>
      <View>
        <Button title="Reload" onPress={() => setReload(reload + 1)} />
        {posts.map((prop, key) => {
          return <Text>{prop.title}</Text>;
        })}
      </View>
    </>
  );
};

export default UseEffectExample;
