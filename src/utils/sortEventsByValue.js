export const sortEventsByValue = (events, sortValue) => {
  switch (sortValue) {
    case 'by name up':
      return [...events].sort((a, b) => a.title.localeCompare(b.title));

    case 'by name down':
      return [...events].sort((a, b) => b.title.localeCompare(a.title));

    case 'by date up':
      return [...events].sort((a, b) => a.date.localeCompare(b.date));

    case 'by date down':
      return [...events].sort((a, b) => b.date.localeCompare(a.date));

    case 'by priority up':
      return [...events].sort((a, b) => a.priority.localeCompare(b.priority));

    case 'by priority down':
      return [...events].sort((a, b) => b.priority.localeCompare(a.priority));

    default:
      break;
  }
};
