import { useState } from 'react';
import './App.css';
import { Button, Text } from './ui';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Button /> */}
      <Text>Hello world</Text>
    </>
  );
}

export default App;
