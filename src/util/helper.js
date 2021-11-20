export function formatDate(timestamp) {
  const date = new Date(timestamp);
  const timePart = date.toLocaleTimeString();
  const datePart = date.toLocaleDateString();

  return `  ${datePart} - ${timePart}  `;
}
