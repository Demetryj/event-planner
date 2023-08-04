import { useState } from 'react';
import { Title, Label, Input, RemoveIcon } from './InputForm.styled';

export const InputForm = ({ title, name, as }) => {
  const [value, setValue] = useState('');

  const handleClickClear = () => setValue('');

  return (
    <Label htmlFor={name}>
      <Title>{title}</Title>
      <Input
        type="text"
        name={name}
        value={value}
        placeholder="Input"
        onChange={e => setValue(e.target.value)}
        as={as}
      />
      <RemoveIcon
        disabled={value === ''}
        onClick={() => handleClickClear('title')}
      />
    </Label>
  );
};
