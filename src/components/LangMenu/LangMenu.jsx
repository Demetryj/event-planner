import { LangList, LangItem, Text } from './LangMenu.styled';

const languages = ['UK', 'EN'];

export const LangMenu = () => {
  return (
    <LangList>
      {languages.map(language => (
        <LangItem key={language}>
          <Text>{language}</Text>
        </LangItem>
      ))}
    </LangList>
  );
};
