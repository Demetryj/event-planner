import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { SelectMenu } from 'components/SelectMenu';
import { DatePicker } from 'components/DatePicker';
import { InputError } from '../InputError';
import { getValueForSelectInput } from 'utils/getValueForSelectInput';
import { useClickOutside } from 'hooks/useClickOutside';
import {
  WrapperInput,
  Label,
  Input,
  ArrowDown,
  ArrowUp,
} from './SelectForm.styled';

export const SelectForm = ({ title, name, values, errors }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef(null);

  const { t } = useTranslation();
  const categoryList = t('categoryList', { returnObjects: true });
  const priorityList = t('priorityList', { returnObjects: true });

  useClickOutside(menuRef, () => {
    setIsOpen(false);
  });

  const handleClickArrow = () => {
    if (name === 'picture') {
      return;
    }
    setIsOpen(!isOpen);
  };

  return (
    <WrapperInput ref={menuRef}>
      <Label htmlFor={name} name={name} visible={!isOpen}>
        {title}
      </Label>

      <Input
        id={name}
        type="text"
        name={name}
        placeholder={isOpen ? getValueForSelectInput(name) : ' '}
        err={errors[name]}
        readOnly
        isopen={isOpen ? 1 : 0}
        onClick={handleClickArrow}
      />

      {!isOpen ? (
        <ArrowDown name={name} onClick={handleClickArrow} />
      ) : (
        <ArrowUp onClick={handleClickArrow} />
      )}

      {isOpen && (name === 'category' || name === 'priority') && (
        <SelectMenu
          array={name === 'category' ? categoryList : priorityList}
          closeMenu={setIsOpen}
          values={values}
          name={name}
        />
      )}

      {isOpen && name === 'date' && (
        <DatePicker closeDatePicker={setIsOpen} values={values} name={name} />
      )}

      {errors[name] && <InputError name={name} />}
    </WrapperInput>
  );
};
