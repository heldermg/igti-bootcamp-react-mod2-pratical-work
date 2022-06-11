import { format } from 'date-fns';

export function formatDate(year, month) {
   return format(new Date(year, month - 1, 1), 'LLL/yyyy');
 }

 const currencyOptions = {
   style: 'currency',
   currency: 'BRL',
   minimumFractionDigits: 2,
 }

 const percentOptions = {
   style: 'percent',
   signDisplay: 'exceptZero',
   minimumFractionDigits: 2,
 }

 export const currencyNumberFormat = Intl.NumberFormat('pt-BR', currencyOptions)
 export const percentNumberFormat = Intl.NumberFormat('pt-BR', percentOptions)