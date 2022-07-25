import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../app/hooks';
import { RootState } from '../app/store';
import { Invoices, InvoicesHeader } from '../components';
import { updateFIlteredData } from '../features/invoice/invoiceSlice';

const Home = () => {
   const dispatch = useAppDispatch();
   const { filterQuery } = useSelector((state: RootState) => state.invoice);

   useEffect(() => {
      dispatch(updateFIlteredData());
   }, [filterQuery]);

   return (
      <>
         <InvoicesHeader />
         <Invoices />
      </>
   );
};

export default Home;
