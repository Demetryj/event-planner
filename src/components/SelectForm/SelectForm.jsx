import { useState } from 'react';
import { Label, Title, Input, ArrowDown, ArrowUp } from './SelectForm.styled';

export const SelectForm = ({ title, name }) => {
  const [isOpen, setIsopen] = useState(false);

  const handleClickArrow = () => {
    if (name === 'picture') {
      return;
    }
    setIsopen(!isOpen);
  };

  const getValueForSelectInput = nameInput => {
    switch (nameInput) {
      case 'date':
        return 'Select date';

      case 'time':
        return 'Select time';

      case 'category':
        return 'Select category';

      case 'priority':
        return 'Select priority';

      default:
        return;
    }
  };

  return (
    <Label htmlFor={name}>
      <Title name={name}>{title}</Title>
      <Input
        type="text"
        name={name}
        // value={isOpen ? getValueForSelectInput(name) : ''}
        placeholder={isOpen ? getValueForSelectInput(name) : 'Select'}
        disabled={name === 'picture'}
        isOpen={isOpen}
      />
      {!isOpen ? (
        <ArrowDown onClick={handleClickArrow} name={name} />
      ) : (
        <ArrowUp onClick={handleClickArrow} />
      )}
    </Label>
  );
};
