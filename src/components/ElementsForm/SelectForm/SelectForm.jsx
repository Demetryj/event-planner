import { useState } from 'react';
import {
  WrapperInput,
  Label,
  Title,
  Input,
  ArrowDown,
  ArrowUp,
} from './SelectForm.styled';
import { SelectMenu } from 'components/SelectMenu';
import { getValueForSelectInput } from 'utils/getValueForSelectInput';
import { category, priority } from 'data/menuFilter';

export const SelectForm = ({ title, name, values }) => {
  const [isOpen, setIsopen] = useState(false);

  const handleClickArrow = () => {
    if (name === 'picture') {
      return;
    }
    setIsopen(!isOpen);
  };

  return (
    <WrapperInput>
      <Label htmlFor={name}>
        <Title name={name}>{title}</Title>
        <Input
          id={name}
          type="text"
          name={name}
          placeholder={isOpen ? getValueForSelectInput(name) : 'Select'}
          readOnly
          isopen={isOpen ? 1 : 0}
        />
        {!isOpen ? (
          <ArrowDown onClick={handleClickArrow} name={name} />
        ) : (
          <ArrowUp onClick={handleClickArrow} />
        )}
      </Label>
      {isOpen && (
        <SelectMenu
          array={name === 'category' ? category : priority}
          closeMenu={setIsopen}
          values={values}
          name={name}
        />
      )}
    </WrapperInput>
  );
};
