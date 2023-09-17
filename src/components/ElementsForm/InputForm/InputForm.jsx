import { InputError } from '../InputError';
import { WrapperInput, Title, Input, RemoveIcon } from './InputForm.styled';

export const InputForm = props => {
  const { title, name, values, errors } = props;

  return (
    <WrapperInput>
      <label htmlFor={name}>
        <Title>{title}</Title>
        <Input id={name} type="text" name={name} err={errors[name]} />
        <RemoveIcon
          disabled={values[name] === ''}
          err={errors[name]}
          onClick={() => {
            values[name] = '';
            document.getElementById(name).value = '';
          }}
        />
      </label>
      {errors[name] && <InputError name={name} />}
    </WrapperInput>
  );
};
