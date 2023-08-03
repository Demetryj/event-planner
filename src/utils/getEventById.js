export const getEventById = (events, id) => {
  return events.find(item => item.id === id);
};
