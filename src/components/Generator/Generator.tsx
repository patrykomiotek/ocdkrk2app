import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { Button, Text } from '../../ui';

export const Generator = () => {
  // let id = uuidv4();
  const [id, setId] = useState(uuidv4());

  const handleClick = () => {
    // id = uuidv4();
    // console.log('id: ', id);
    setId(uuidv4());
  };

  return (
    <div>
      <Text>{id}</Text>

      <Button onClick={handleClick}>Refresh</Button>
    </div>
  );
};
