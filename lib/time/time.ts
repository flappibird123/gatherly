

export function mergeDateTime(date: string, time: string): string {
    return `${date}T${time}:00`;
}

export function objDateTime(dateTime: string): Date {
    return new Date(dateTime);
}

export function convertToDate(dateTime: Date): string {
  const [year, month, day] = dateTime.toISOString().split('T')[0].split('-');
  return `${day}/${month}/${year}`;
}


export function convertToTime(dateTime: Date): string {
    return dateTime.toTimeString().split(' ')[0].slice(0, 5);
}