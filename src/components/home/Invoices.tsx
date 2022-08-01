import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import InvoiceCard from './InvoiceCard';
import { breakpoints } from '../../styles/globalStyles';
import EmptyInvoices from './EmptyInvoices';

const Invoices = () => {
   const { filtered_data: invoices } = useSelector(
      (state: RootState) => state.invoice
   );

   return (
      <InvoicesRoot className='container'>
         {invoices.length === 0 ? (
            <EmptyInvoices />
         ) : (
            <>
               {invoices.map((invoice) => (
                  <InvoiceCard key={invoice.id} {...invoice} />
               ))}
            </>
         )}
      </InvoicesRoot>
   );
};

export default Invoices;

export const InvoicesRoot = styled.section`
   display: grid;
   gap: 1rem;
   padding: 3rem 0;

   @media screen and (min-width: ${breakpoints.tablet}) {
      padding: 4rem 0;
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      padding: 5rem 0;
   }
`;
