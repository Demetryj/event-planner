import { Field } from 'formik';
import { InputError } from '../InputError';
import {
  WrapperTextArea,
  Title,
  Label,
  TextArea,
  RemoveIcon,
} from './TextAreaForm.styled';

const CastomTextArea = props => {
  return <TextArea {...props} />;
};

export const TextAreaForm = props => {
  const { title, name, values, errors } = props;
  return (
    <WrapperTextArea>
      <Label htmlFor={name}>
        <Title>{title}</Title>
        <Field
          id={name}
          type="text"
          name={name}
          placeholder="Input"
          err={errors[name]}
          as={CastomTextArea}
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
    </WrapperTextArea>
  );
};
