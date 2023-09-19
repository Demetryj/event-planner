const DAYS_IN_WEEK = 7;

const getDaysInMonth = (year, month) => {
  const date = new Date(year, month + 1, 0);
  return date.getDate();
};

// функція повертає дні відповідного місяця(наприклад з 1 по 30)
export const getMonthDates = (year, month) => {
  const result = [];
  const date = new Date(year, month);
  let day = 1;
  const daysInMonth = getDaysInMonth(year, month); // кількість днів у місяці
  const monthStartOn = date.getDay(); // коли починається місяць (з якого дня)

  // отримуємо кількість тижнів у місяці залежно від кількості днів, на який день припадає перше та останє число місяця
  for (let i = 0; i < (daysInMonth + monthStartOn) / DAYS_IN_WEEK; i += 1) {
    result[i] = [];

    // отримуємо кількість днів у тижні з урахуванням першого та останього числа місяця (на який день тижня припадає)
    for (let j = 0; j < DAYS_IN_WEEK; j += 1) {
      if ((i === 0 && j < monthStartOn) || day > daysInMonth) {
        result[i][j] = undefined;
      } else {
        result[i][j] = new Date(year, month, day++);
      }
    }
  }

  return result;
};

// result буде у вигляді масиву масивів:
// [
//  [undefined, undefined, new Date(), new Date(), new Date(), new Date(), new Date(),],
//  [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), ],
//  [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), ],
//  [new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), new Date(), ],
//  [new Date(), new Date(), new Date(), new Date(), undefined, undefined, undefined, ],
// ];

// Для визначення рівності поточної та обраної дати
export const areEqual = (firstDate, secondDate) => {
  if (
    firstDate.getDate() === secondDate.getDate() &&
    firstDate.getMonth() === secondDate.getMonth() &&
    firstDate.getFullYear() === secondDate.getFullYear()
  ) {
    return true;
  }

  return false;
};
