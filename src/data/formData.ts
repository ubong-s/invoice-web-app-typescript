import { SingleItemProps } from '../types';
import { addDays } from '../utils/helpers';

export const initialValues = {
   id: '',
   senderAddress: {
      street: '',
      city: '',
      postCode: '',
      country: '',
   },
   clientName: '',
   clientEmail: '',
   clientAddress: {
      street: '',
      city: '',
      postCode: '',
      country: '',
   },
   createdAt: new Date().toJSON().slice(0, 10),
   paymentTerms: 1,
   paymentDue: addDays(new Date().toJSON().slice(0, 10), 1),
   description: '',
   items: [] as SingleItemProps[],
   total: 0,
   status: 'pending',
};

export const paymentTermsOptions = [
   { value: 1, text: 'Net 1 Day' },
   { value: 7, text: 'Net 7 Days' },
   { value: 14, text: 'Net 14 Days' },
   { value: 30, text: 'Net 30 Days' },
];
