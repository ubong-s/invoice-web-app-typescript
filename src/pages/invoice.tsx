import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { slide } from '../animations';
import { RootState } from '../app/store';
import {
   InvoiceInfo,
   InvoiceModal,
   Status,
   Seo,
   EmptyInvoice,
} from '../components';

const Invoice = () => {
   const { id } = useParams();
   const { data } = useSelector((state: RootState) => state.invoice);

   const invoice = data.find((item) => item.id === id);

   return (
      <motion.div
         variants={slide}
         initial='initial'
         animate='animate'
         exit='exit'
      >
         {invoice ? (
            <>
               <Seo
                  title={`${invoice.id} ${invoice.description.substring(
                     0,
                     15
                  )}...`}
               />
               <InvoiceModal invoice={invoice} />
               <Status invoice={invoice} />
               <InvoiceInfo invoice={invoice} />
            </>
         ) : (
            <EmptyInvoice />
         )}
      </motion.div>
   );
};

export default Invoice;
