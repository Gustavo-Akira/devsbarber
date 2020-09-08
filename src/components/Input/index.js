import React from 'react';
import {DefaultInput} from './styled';

const Input = ({value, setValue}) => {
  return <DefaultInput value={value} onChangeText={(e) => setValue(e)} />;
};

export default Input;
