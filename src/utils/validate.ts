import { InvoiceFormProps } from '../types';

export const validate = (values: InvoiceFormProps) => {
   let errors = {} as any;

   // Sender Validation
   if (!values.senderAddress.street) {
      errors = {
         ...errors,
         senderAddress: {
            ...errors.senderAddress,
            street: `can't be empty`,
         },
      };
   }

   if (!values.senderAddress.country) {
      errors = {
         ...errors,
         senderAddress: {
            ...errors.senderAddress,
            country: `can't be empty`,
         },
      };
   }

   if (!values.senderAddress.postCode) {
      errors = {
         ...errors,
         senderAddress: {
            ...errors.senderAddress,
            postCode: `can't be empty`,
         },
      };
   }

   if (!values.senderAddress.city) {
      errors = {
         ...errors,
         senderAddress: {
            ...errors.senderAddress,
            city: `can't be empty`,
         },
      };
   }

   // Client Validation
   if (!values.clientName) {
      errors.clientName = `can't be empty`;
   }

   if (!values.clientEmail) {
      errors.clientEmail = `can't be empty`;
   } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.clientEmail)
   ) {
      errors.clientEmail = 'Invalid, type a real one';
   }

   if (!values.clientAddress.street) {
      errors = {
         ...errors,
         clientAddress: {
            ...errors.clientAddress,
            street: `can't be empty`,
         },
      };
   }

   if (!values.clientAddress.country) {
      errors = {
         ...errors,
         clientAddress: {
            ...errors.clientAddress,
            country: `can't be empty`,
         },
      };
   }

   if (!values.clientAddress.postCode) {
      errors = {
         ...errors,
         clientAddress: {
            ...errors.clientAddress,
            postCode: `can't be empty`,
         },
      };
   }

   if (!values.clientAddress.city) {
      errors = {
         ...errors,
         clientAddress: {
            ...errors.clientAddress,
            city: `can't be empty`,
         },
      };
   }

   if (!values.description) {
      errors.description = `can't be empty`;
   }

   if (!values.createdAt) {
      errors.createdAt = `can't be empty`;
   }

   if (values.items.length === 0) {
      errors.items = 'An item must be added';
   }

   return errors;
};
