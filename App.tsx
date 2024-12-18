import React from 'react';
import {UseMemoExample} from './src/presentation/components/UseMemoExample';
import {Provider} from 'react-redux';
import {store} from './src/store';
import {CounterExample} from './src/presentation/components/CounterExample';

function App(): React.JSX.Element {
  return (
    <>
      <Provider store={store}>
        <CounterExample />
      </Provider>
    </>
  );
}

export default App;
