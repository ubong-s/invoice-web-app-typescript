export interface GlobalState {
   darkMode: boolean;
   invoiceModal: boolean;
   deleteModal: boolean;
   myModal: boolean;
}

export interface AddressProps {
   street: string;
   city: string;
   postCode: string;
   country: string;
}

export interface SingleItemProps {
   name: string;
   quantity: number;
   price: number;
   total: number;
}

export interface paymentTermsProps {
   value: number;
   text: string;
}

export interface ItemProps {
   name: string;
   quantity: string;
   price: string;
   total: number;
}

export enum PaymentStatus {
   paid = 'paid',
   pending = 'pending',
   draft = 'draft',
}

export interface InvoiceFormValidateProps {
   senderAddress: AddressProps;
   clientName: string;
   clientEmail: string;
   clientAddress: AddressProps;
   createdAt: string;
   paymentTerms: string;
   description: string;
   items: '';
}

export interface Invoice {
   id: string;
   createdAt: string;
   paymentDue: string;
   description: string;
   paymentTerms: number;
   clientName: string;
   clientEmail: string;
   status: string;
   senderAddress: AddressProps;
   clientAddress: AddressProps;
   items: SingleItemProps[];
   total: number;
}

export interface InvoiceState {
   data: Invoice[];
   filtered_data: Invoice[];
   filterQuery: string;
}

export interface LayoutProps {
   children: React.ReactNode;
}

export interface InvoiceCardProps {
   id: string;
   clientName: string;
   paymentDue: string;
   status: string;
   total: number;
}
