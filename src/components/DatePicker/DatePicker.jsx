import { useState } from 'react';
import { nanoid } from 'nanoid';
import moment from 'moment';
import { useTranslation } from 'react-i18next';
import { Box } from 'components/Box';
import { getMonthDates, areEqual } from 'utils/calendar';
import { useTranslateMonth } from 'hooks/useTranslateMonth';
import {
  Wrapper,
  Header,
  Table,
  MonthYear,
  ArrowLeft,
  ArrowRight,
  DayOfWeek,
  DateNumber,
  ButtonCancel,
  ButtonChooseDate,
} from './DatePicker.styled';

export const DatePicker = ({ closeDatePicker, values, name }) => {
  const [monthAndYear, setMonthAndYear] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const currentDate = new Date();
  const { translatedMonth } = useTranslateMonth(monthAndYear);

  const { t } = useTranslation();
  const weekDays = t('calendar.weekDays', { returnObjects: true });

  const monthDates = getMonthDates(
    monthAndYear.getFullYear(),
    monthAndYear.getMonth()
  );

  const handlePrevMonthButtonClick = () => {
    const date = new Date(
      monthAndYear.getFullYear(),
      monthAndYear.getMonth() - 1
    );

    setMonthAndYear(date);
  };

  const handleNextMonthButtonClick = () => {
    const date = new Date(
      monthAndYear.getFullYear(),
      monthAndYear.getMonth() + 1
    );

    setMonthAndYear(date);
  };

  const handleDayClick = date => {
    console.log(date);
    setSelectedDate(date);
  };

  const handleButtonCancelClick = () => closeDatePicker(false);

  const handleButtonChooseDateClick = () => {
    values[name] = moment(selectedDate).format('DD/MM/YYYY');
    closeDatePicker(false);
  };

  return (
    <Wrapper>
      <Header>
        <ArrowLeft onClick={handlePrevMonthButtonClick} />
        <MonthYear>
          {`${translatedMonth} ${moment(monthAndYear).format('YYYY')}`}
        </MonthYear>
        <ArrowRight onClick={handleNextMonthButtonClick} />
      </Header>

      <Table>
        <thead>
          <tr>
            {weekDays.map(name => (
              <DayOfWeek key={name} day={name}>
                {name}
              </DayOfWeek>
            ))}
          </tr>
        </thead>

        <tbody>
          {monthDates.map((week, index) => (
            <tr key={index}>
              {week.map(date =>
                date ? (
                  <DateNumber
                    key={nanoid()}
                    date={date}
                    isCurrent={areEqual(date, currentDate)}
                    isSelected={areEqual(date, selectedDate)}
                    onClick={() => handleDayClick(date)}
                  >
                    {date.getDate()}
                  </DateNumber>
                ) : (
                  <DateNumber key={nanoid()} />
                )
              )}
            </tr>
          ))}
        </tbody>
      </Table>

      <Box display={{ md: 'flex' }} justifyContent={{ md: 'flex-end' }}>
        <ButtonCancel type="button" onClick={handleButtonCancelClick}>
          {t('calendar.cancelBtn')}
        </ButtonCancel>
        <ButtonChooseDate type="button" onClick={handleButtonChooseDateClick}>
          {t('calendar.chooseDateBtn')}
        </ButtonChooseDate>
      </Box>
    </Wrapper>
  );
};
