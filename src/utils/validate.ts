import { Invoice, ItemProps } from '../types';

interface Props {
   senderAddress: {
      street: string;
      city: string;
      postCode: string;
      country: string;
   };
   clientName: string;
   clientEmail: string;
   clientAddress: {
      street: string;
      city: string;
      postCode: string;
      country: string;
   };
   createdAt: string;
   paymentTerms: string;
   description: string;
   // items: any | undefined;
}

export const validate = (values: Props) => {
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

   // if (values.items.length === 0) {
   //    errors.items = ['An item must be added'];
   // }

   // if (values.items.length > 0) {
   //    errors.items = [];
   //    errors.items = [...errors.items].map((item: any, index: number) => {
   //       if (!values.items[index].name) {
   //          item.name = `can't be empty`;
   //       }

   //       if (!values.items[index].price) {
   //          item.price = `can't be empty`;
   //       }

   //       if (!values.items[index].quantity) {
   //          item.quantity = `can't be empty`;
   //       }

   //       return item;
   //    });
   // }

   return errors;
};
