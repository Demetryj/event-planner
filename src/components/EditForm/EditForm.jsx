import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Formik } from 'formik';
import { object, string, number, date } from 'yup';
import { nanoid } from 'nanoid';
import { Box } from 'components/Box';
import { InputForm } from 'components/ElementsForm/InputForm';
import { TextAreaForm } from 'components/ElementsForm/TextAreaForm';
import { SelectForm } from 'components/ElementsForm/SelectForm';
import { useMedia } from 'hooks/useMedia';
import { clearCastomInputs } from 'utils/clearCastomInputs';
import { clearInputs } from 'utils/clearInputs';
import { addEvent } from 'redux/events/eventsSlice';
import imgDefault from 'images/default-H@2x.jpg';
import { FormWrap, Button } from './EditForm.styled';

const editSchema = object({
  title: string()
    // .min(4, 'Min 4 characters')
    // .max(30, 'Max 30 characters')
    .matches(/^[a-zA-Z]+$/, 'Invalid input'),

  description: string(),
  // .min(4, 'Min 4 characters')
  // .max(105, 'Max 105 characters')
  // .required('Required'),
  date: date(),
  // .required('Required'),
  time: number(),
  // .required('Required'),
  location: string().matches(/^[a-zA-Z]+$/, 'Invalid input'),
  //   .min(4, 'Min 4 characters')
  //   .max(15, 'Max 15 characters')
  //   .required('Required'),
  category: string(),
  // .required('Required'),
  picture: string(),
  priority: string(),
  // .required('Required'),
});

const initialValues = {
  title: '',
  description: '',
  date: '',
  time: '',
  location: '',
  category: '',
  picture: '',
  priority: '',
};

export const EditForm = () => {
  const { isDesktop } = useMedia();
  const dispatch = useDispatch();

  useEffect(() => {
    clearInputs();
  }, []);

  const handleSubmit = (values, actions) => {
    const newEvent = { ...values, picture: imgDefault, id: nanoid() };
    dispatch(addEvent(newEvent));
    clearCastomInputs(['category', 'priority'], values);
    actions.resetForm();
  };

  return (
    <Formik
      validationSchema={editSchema}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      {({ errors, values }) => {
        return (
          <>
            {!isDesktop ? (
              <FormWrap autoComplete="off">
                <Box display={{ md: 'flex', lg: 'none' }}>
                  <Box
                    display={{ md: 'block', lg: 'none' }}
                    mr={25}
                    width="100%"
                  >
                    <InputForm
                      title="Title"
                      name="title"
                      errors={errors}
                      values={values}
                    />
                    <TextAreaForm
                      title="Description"
                      name="description"
                      errors={errors}
                      values={values}
                    />

                    <SelectForm title="Select date" name="date" />
                    <SelectForm title="Select time" name="time" />
                  </Box>

                  <Box display={{ md: 'block', lg: 'none' }} width="100%">
                    <InputForm
                      title="Location"
                      name="location"
                      errors={errors}
                      values={values}
                    />
                    <SelectForm
                      title="Category"
                      name="category"
                      values={values}
                    />
                    <SelectForm
                      title="Add picture"
                      name="picture"
                      values={values}
                    />
                    <SelectForm
                      title="Priority"
                      name="priority"
                      values={values}
                    />
                  </Box>
                </Box>

                <Button type="submit">Add event</Button>
              </FormWrap>
            ) : (
              <FormWrap autoComplete="off">
                <Box display="flex">
                  <Box width="100%" mr={42}>
                    <InputForm
                      title={'Title'}
                      name="title"
                      errors={errors}
                      values={values}
                    />
                    <TextAreaForm
                      title={'Description'}
                      name="description"
                      errors={errors}
                      values={values}
                    />
                  </Box>

                  <Box width="100%" mr={42}>
                    <SelectForm title="Select date" name="date" />
                    <SelectForm title="Select time" name="time" />
                    <InputForm
                      title={'Location'}
                      name="location"
                      errors={errors}
                      values={values}
                    />
                  </Box>

                  <Box width="100%">
                    <SelectForm
                      title="Category"
                      name="category"
                      values={values}
                    />
                    <SelectForm
                      title="Add picture"
                      name="picture"
                      values={values}
                    />
                    <SelectForm
                      title="Priority"
                      name="priority"
                      values={values}
                    />
                  </Box>
                </Box>

                <Button type="submit">Add event</Button>
              </FormWrap>
            )}
          </>
        );
      }}
    </Formik>
  );
};
