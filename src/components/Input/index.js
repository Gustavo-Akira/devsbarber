import React from 'react';
import {DefaultInput, InputArea} from './styled';

const Input = ({IconSvg, placeholder, value, onChangeText,password}) => {
  return (
    <InputArea>
      <IconSvg width="24" height="24" fill="#268596" />
      <DefaultInput
        placeholder={placeholder}
        placeholderTextColor="#268596"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password}
      />
    </InputArea>
  );
};

export default Input;
