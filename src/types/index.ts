export interface GlobalState {
   darkMode: boolean;
   invoiceModal: boolean;
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
   id: string;
   name: string;
   quantity: string;
   price: string;
}

export enum PaymentStatus {
   paid = 'paid',
   pending = 'pending',
   draft = 'draft',
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
   single_invoice?: Invoice;
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
