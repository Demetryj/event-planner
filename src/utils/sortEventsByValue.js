import moment from 'moment/moment';

export const sortEventsByValue = (events, sortValue) => {
  switch (sortValue) {
    case 'by name up':
      return [...events].sort((a, b) => a.title.localeCompare(b.title));

    case 'by name down':
      return [...events].sort((a, b) => b.title.localeCompare(a.title));

    case 'by date up':
      return [...events].sort(
        (a, b) => moment(a.date, 'DD.MM') - moment(b.date, 'DD.MM')
      );

    case 'by date down':
      return [...events].sort(
        (a, b) => moment(b.date, 'DD.MM') - moment(a.date, 'DD.MM')
      );

    case 'by priority up':
      const priorityOrderUp = { Low: 1, Medium: 2, High: 3 };

      return [...events].sort(
        (a, b) => priorityOrderUp[a.priority] - priorityOrderUp[b.priority]
      );

    case 'by priority down':
      const priorityOrderDown = { Low: 1, Medium: 2, High: 3 };

      return [...events].sort(
        (a, b) => priorityOrderDown[b.priority] - priorityOrderDown[a.priority]
      );

    default:
      break;
  }
};
