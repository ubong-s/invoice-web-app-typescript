import moment from 'moment';

export const formatDate = (date: string) => {
   return moment(date).format('DD MMM YYYY');
};

export const generateIDs = () => {
   let letters = Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, '')
      .substring(0, 2)
      .toUpperCase();

   let numbers = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;

   return `${letters}${numbers}`;
};
export function addDays(date: string, days: number) {
   var result = new Date(date);
   result.setDate(result.getDate() + days);

   return result.toISOString().substring(0, 10);
}
