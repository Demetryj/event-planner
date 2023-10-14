export const getVisibleEvents = (page = 1, events) => {
  if (events.length > 0) {
    const startIndex = (page - 1) * 8;
    const endIndex = startIndex + 8;
    return events.slice(startIndex, endIndex);
  } else {
    return [];
  }
};
