// import { useState } from 'react';
import { Formik } from 'formik';
// import { object, string } from 'yup';
import { Box } from 'components/Box';
import { InputForm } from 'components/InputForm';
import { SelectForm } from 'components/SelectForm';
import { useMedia } from 'hooks/useMedia';
import { FormWrap, Button } from './EditForm.styled';

const intialValues = {
  title: '',
  description: '',
  date: '',
  time: '',
  place: '',
  category: '',
  picture: '',
  priority: '',
};
export const EditForm = () => {
  const { isDesktop } = useMedia();

  const handleSubmit = (values, actions) => {
    console.log(values);

    actions.resetForm();
  };

  return (
    <Formik initialValues={intialValues} onSubmit={handleSubmit}>
      {!isDesktop ? (
        <FormWrap autoComplete="off">
          <Box display={{ md: 'flex', lg: 'none' }}>
            <Box display={{ md: 'block', lg: 'none' }} mr={25} width="100%">
              <InputForm title="text" name="title" as="input" />
              <InputForm title="text" name="description" as="textarea" />
              <SelectForm title="Select date" name="date" />
              <SelectForm title="Select time" name="time" />
            </Box>

            <Box display={{ md: 'block', lg: 'none' }} width="100%">
              <InputForm title="text" name="place" as="input" />
              <SelectForm title="Category" name="category" />
              <SelectForm title="Add picture" name="picture" />
              <SelectForm title="Priority" name="priority" />
            </Box>
          </Box>

          <Button type="submit">Add event</Button>
        </FormWrap>
      ) : (
        <FormWrap autoComplete="off">
          <Box display="flex">
            <Box width="100%" mr={42}>
              <InputForm title="text" name="title" as="input" />
              <InputForm title="text" name="description" as="textarea" />
            </Box>

            <Box width="100%" mr={42}>
              <SelectForm title="Select date" name="date" />
              <SelectForm title="Select time" name="time" />
              <InputForm title="text" name="place" as="input" />
            </Box>

            <Box width="100%">
              <SelectForm title="Category" name="category" />
              <SelectForm title="Add picture" name="picture" />
              <SelectForm title="Priority" name="priority" />
            </Box>
          </Box>

          <Button type="submit">Add event</Button>
        </FormWrap>
      )}
    </Formik>
  );
};
