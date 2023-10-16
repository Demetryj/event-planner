export const getCorrectDate = value => {
  if (!value) {
    return '';
  }

  const parts = value.split('/');

  const day = parts[0];
  const month = parts[1];

  const formattedDate = `${day}.${month}`;

  return formattedDate;
};
