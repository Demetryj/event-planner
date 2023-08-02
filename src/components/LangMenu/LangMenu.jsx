import { LangList, LangItem, Text } from './LangMenu.styled';

export const LangMenu = ({ languages }) => {
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
