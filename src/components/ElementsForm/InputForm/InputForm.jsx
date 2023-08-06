import { InputError } from '../InputError';

import {
  WrapperInput,
  Title,
  Label,
  Input,
  RemoveIcon,
} from './InputForm.styled';

export const InputForm = props => {
  const { title, name, values, errors } = props;
  return (
    <WrapperInput>
      <Label htmlFor={name}>
        <Title>{title}</Title>
        <Input
          id={name}
          type="text"
          name={name}
          placeholder="Input"
          err={errors[name]}
        />
        <RemoveIcon
          disabled={values[name] === ''}
          err={errors[name]}
          onClick={() => {
            values[name] = '';
            document.getElementById(name).value = '';
          }}
        />
      </Label>
      {errors[name] && <InputError name={name} />}
    </WrapperInput>
  );
};
