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
   createdAt: '',
   paymentTerms: '1',
   description: '',
   items: [] as ItemProps[],
};

export const paymentTermsOptions = [
   { value: 1, text: 'Net 1 Day' },
   { value: 7, text: 'Net 7 Days' },
   { value: 14, text: 'Net 14 Days' },
   { value: 30, text: 'Net 30 Days' },
];
