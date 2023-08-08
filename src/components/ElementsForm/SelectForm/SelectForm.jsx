import { useState, useRef } from 'react';
import { SelectMenu } from 'components/SelectMenu';
import { getValueForSelectInput } from 'utils/getValueForSelectInput';
import { category, priority } from 'data/menuFilter';
import { useClickOutside } from 'hooks/useClickOutside';
import imgDefault from 'images/default-H@2x.jpg';
import {
  WrapperInput,
  Label,
  Title,
  Input,
  ArrowDown,
  ArrowUp,
} from './SelectForm.styled';

export const SelectForm = ({ title, name, values }) => {
  const [isOpen, setIsopen] = useState(false);
  const menuRef = useRef(null);

  useClickOutside(menuRef, () => {
    setIsopen(false);
  });

  const handleClickArrow = () => {
    if (name === 'picture') {
      return;
    }
    setIsopen(!isOpen);
  };

  return (
    <WrapperInput ref={menuRef}>
      <Label htmlFor={name}>
        <Title name={name}>{title}</Title>
        <Input
          id={name}
          type="text"
          name={name}
          placeholder={isOpen ? getValueForSelectInput(name) : 'Select'}
          readOnly
          isopen={isOpen ? 1 : 0}
          onClick={handleClickArrow}
        />
      </Label>
      {!isOpen ? (
        <ArrowDown name={name} onClick={handleClickArrow} />
      ) : (
        <ArrowUp onClick={handleClickArrow} />
      )}
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
