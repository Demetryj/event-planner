import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { Box } from 'components/Box';
import { InputForm } from 'components/ElementsForm/InputForm';
import { TextAreaForm } from 'components/ElementsForm/TextAreaForm';
import { SelectForm } from 'components/ElementsForm/SelectForm';
import { useMedia } from 'hooks/useMedia';
import { FormWrap, Button } from './EventForm.styled';

export const EditForm = ({
  initialValues,
  editSchema,
  typeForm,
  onButtonClick,
}) => {
  const { isDesktop } = useMedia();

  const { t } = useTranslation();

  const handleSubmit = (values, actions) => {
    onButtonClick(values);

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
                      title={t('eventForm.title')}
                      name="title"
                      errors={errors}
                      values={values}
                    />
                    <TextAreaForm
                      title={t('eventForm.description')}
                      name="description"
                      errors={errors}
                      values={values}
                    />

                    <SelectForm
                      title={t('eventForm.date')}
                      name="date"
                      values={values}
                    />

                    <InputForm
                      title={t('eventForm.time')}
                      name="time"
                      errors={errors}
                      values={values}
                    />
                  </Box>

                  <Box display={{ md: 'block', lg: 'none' }} width="100%">
                    <InputForm
                      title={t('eventForm.location')}
                      name="location"
                      errors={errors}
                      values={values}
                    />
                    <SelectForm
                      title={t('eventForm.category')}
                      name="category"
                      values={values}
                    />
                    <SelectForm
                      title={t('eventForm.addPicture')}
                      name="picture"
                      values={values}
                    />
                    <SelectForm
                      title={t('eventForm.priority')}
                      name="priority"
                      values={values}
                    />
                  </Box>
                </Box>

                <Button
                  type="submit"
                  disabled={errors.title || errors.location}
                >
                  {typeForm}
                </Button>
              </FormWrap>
            ) : (
              <FormWrap autoComplete="off">
                <Box display="flex">
                  <Box width="100%" mr={42}>
                    <InputForm
                      title={t('eventForm.title')}
                      name="title"
                      errors={errors}
                      values={values}
                    />
                    <TextAreaForm
                      title={t('eventForm.description')}
                      name="description"
                      errors={errors}
                      values={values}
                    />
                  </Box>

                  <Box width="100%" mr={42}>
                    <SelectForm
                      title={t('eventForm.date')}
                      name="date"
                      values={values}
                    />

                    <InputForm
                      title={t('eventForm.time')}
                      name="time"
                      errors={errors}
                      values={values}
                    />

                    <InputForm
                      title={t('eventForm.location')}
                      name="location"
                      errors={errors}
                      values={values}
                    />
                  </Box>

                  <Box width="100%">
                    <SelectForm
                      title={t('eventForm.category')}
                      name="category"
                      values={values}
                    />
                    <SelectForm
                      title={t('eventForm.addPicture')}
                      name="picture"
                      values={values}
                      disabled
                    />
                    <SelectForm
                      title={t('eventForm.priority')}
                      name="priority"
                      values={values}
                    />
                  </Box>
                </Box>

                <Button
                  type="submit"
                  disabled={errors.title || errors.location}
                >
                  {typeForm}
                </Button>
              </FormWrap>
            )}
          </>
        );
      }}
    </Formik>
  );
};
