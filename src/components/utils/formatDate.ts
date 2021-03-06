import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export function formatDate(date: Date | undefined): string | null {
  return date ? format(date, 'dd MMM', { locale: ptBR }).toUpperCase() : null;
}

export function formatFullDate(date: Date | undefined): string | null {
  return date
    ? format(date, 'dd MMM yyyy', { locale: ptBR }).toUpperCase()
    : null;
}

export function formatDateWithBars(date: Date | undefined): string | null {
  return date
    ? format(date, "dd'/'MM'/'yyyy", { locale: ptBR }).toUpperCase()
    : null;
}

export function formatStringDate(
  date: string | undefined,
  formatStr = 'long',
): string {
  if (date) {
    const splitDate = date.split('-');

    const formattedDate = new Date(
      Number(splitDate[0]),
      Number(splitDate[1]) - 1,
    );

    const formatTemplate = formatStr === 'short' ? 'MMM yyyy' : 'MMMM yyyy';

    return format(formattedDate, formatTemplate, {
      locale: ptBR,
    }).toUpperCase();
  }
  return '';
}

export function formatMonthDate(date: Date | undefined): string {
  return date
    ? format(date, 'dd MMM yyyy', { locale: ptBR }).toUpperCase()
    : '';
}

export function formatFullDateToMonthDate(date: Date | undefined): string {
  return date ? format(date, 'MMMM yyyy', { locale: ptBR }).toUpperCase() : '';
}
