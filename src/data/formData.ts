import { ItemProps } from '../types';

export const initialValues = {
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
   paymentTerms: '1',
   paymentDue: '',
   description: '',
   items: [] as ItemProps[],
   total: 0,
};

export const paymentTermsOptions = [
   { value: 1, text: 'Net 1 Day' },
   { value: 7, text: 'Net 7 Days' },
   { value: 14, text: 'Net 14 Days' },
   { value: 30, text: 'Net 30 Days' },
];
