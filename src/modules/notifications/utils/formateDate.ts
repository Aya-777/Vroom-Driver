export function formatNotificationDateTime(isoString: string) {
  const dateObj = new Date(isoString);

  const date = dateObj.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  const time = dateObj.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  return { date, time };
}
