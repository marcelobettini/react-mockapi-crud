export function formatDate(stringDate) {
  return new Date(stringDate).toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
