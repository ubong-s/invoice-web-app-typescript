export interface GlobalState {
   darkMode: boolean;
   InvoiceModal: boolean;
   filter: boolean;
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
