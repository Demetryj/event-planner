export const countPagination = (
  events,
  page,
  per_page,
  onChangeVisibleEvents
) => {
  if (page === 1) {
    onChangeVisibleEvents(events.slice(0, per_page));
  } else {
    onChangeVisibleEvents(events.slice(per_page * (page - 1), per_page * page));
  }
};
