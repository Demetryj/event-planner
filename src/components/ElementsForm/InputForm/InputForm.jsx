import { InputError } from '../InputError';
import { WrapperInput, Label, Input, RemoveIcon } from './InputForm.styled';

export const InputForm = props => {
  const { title, name, values, errors } = props;

  return (
    <WrapperInput>
      <Label htmlFor={name}>{title}</Label>
      <Input
        id={name}
        type="text"
        name={name}
        err={errors[name]}
        placeholder=" "
      />
      <RemoveIcon
        disabled={values[name] === ''}
        err={errors[name]}
        onClick={() => {
          values[name] = '';
          document.getElementById(name).value = '';
        }}
      />

      {errors[name] && <InputError name={name} />}
    </WrapperInput>
  );
};
