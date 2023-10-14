import { Field } from 'formik';
import { InputError } from '../InputError';
import {
  WrapperTextArea,
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
      <Label htmlFor={name}>{title} </Label>
      <Field
        id={name}
        type="text"
        name={name}
        err={errors[name]}
        as={CastomTextArea}
        placeholder=" "
      />
      <RemoveIcon
        disabled={values[name] === ''}
        onClick={() => {
          values[name] = '';
          document.getElementById(name).value = '';
        }}
      />

      {errors[name] && <InputError name={name} />}
    </WrapperTextArea>
  );
};
