import { useState } from 'react';

const useBooleanState = () => {
  const [bool, setBool] = useState(false);

  const setTrue = () => {
    setBool(true);
  };

  const setFalse = () => {
    setBool(false);
  };

  const toggle = () => {
    setBool((bool) => !bool);
  };

  return [bool, setTrue, setFalse, toggle];
};

export default useBooleanState;
