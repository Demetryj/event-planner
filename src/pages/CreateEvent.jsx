import { ArrowBack } from 'components/ArrowBack';
import { MainTitle } from 'components/MainTitle';
import { EditForm } from 'components/EditForm';

const CreateEvent = () => {
  return (
    <>
      <ArrowBack />
      <MainTitle>Create new event</MainTitle>
      <EditForm />
    </>
  );
};

export default CreateEvent;
