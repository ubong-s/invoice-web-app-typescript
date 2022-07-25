import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAppDispatch } from '../app/hooks';
import { RootState } from '../app/store';
import { fetchSingleInvoice } from '../features/invoice/invoiceSlice';
import { InvoiceInfo, Status } from '../components';

const Invoice = () => {
   const dispatch = useAppDispatch();
   const { id } = useParams();
   const { data, single_invoice: invoice } = useSelector(
      (state: RootState) => state.invoice
   );

   useEffect(() => {
      dispatch(fetchSingleInvoice(id));
   }, [data]);

   return (
      <>
         {invoice ? (
            <>
               <Status />
               <InvoiceInfo />
            </>
         ) : (
            'Invoice not found'
         )}
      </>
   );
};

export default Invoice;
