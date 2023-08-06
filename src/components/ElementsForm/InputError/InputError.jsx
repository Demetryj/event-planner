import { ErrorMessage } from 'formik';
import { ErrorText } from './InputError.styled';

export const InputError = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={messege => <ErrorText>{messege}</ErrorText>}
    />
  );
};
