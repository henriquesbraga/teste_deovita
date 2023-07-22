function formatDate(inputDate: string): string {
  const date = new Date(inputDate);
  date.setUTCHours(date.getUTCHours() - 3);
  return date.toLocaleString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'UTC'
  }).replace(',', '');
}


export default formatDate;