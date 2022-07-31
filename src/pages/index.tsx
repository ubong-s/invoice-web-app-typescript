import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { slide } from '../animations';
import { useAppDispatch } from '../app/hooks';
import { RootState } from '../app/store';
import { InvoiceModal, Invoices, InvoicesHeader, Seo } from '../components';
import { updateFIlteredData } from '../features/invoice/invoiceSlice';

const Home = () => {
   const dispatch = useAppDispatch();
   const { filterQuery, filtered_data } = useSelector(
      (state: RootState) => state.invoice
   );

   useEffect(() => {
      dispatch(updateFIlteredData());
      // eslint-disable-next-line
   }, [filterQuery]);

   return (
      <motion.div
         variants={slide}
         initial='initial'
         animate='animate'
         exit='exit'
      >
         <Seo title={`Home (${filtered_data.length})`} />
         <InvoiceModal />
         <InvoicesHeader />
         <Invoices />
      </motion.div>
   );
};

export default Home;
