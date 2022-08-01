import styled from 'styled-components';
import { useAppDispatch } from '../../app/hooks';
import { toggleInvoiceModal } from '../../features/global/globalSlice';
import { NewInvoice } from './InvoicesHeader';

const EmptyInvoices = () => {
   const dispatch = useAppDispatch();

   return (
      <EmptyInvoicesWrap>
         <img src='/assets/illustration-empty.svg' alt='' />
         <h2>There is nothing here.</h2>
         <p>Create an invoice by clicking the New button and get started.</p>

         <NewInvoice onClick={() => dispatch(toggleInvoiceModal())}>
            <span className='icon'>
               <svg width='11' height='11' xmlns='http://www.w3.org/2000/svg'>
                  <path
                     d='M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z'
                     fill='#7C5DFA'
                     fillRule='nonzero'
                  />
               </svg>
            </span>
            <span>
               New <span className='inner'>Invoice</span>
            </span>
         </NewInvoice>
      </EmptyInvoicesWrap>
   );
};

export default EmptyInvoices;

const EmptyInvoicesWrap = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;

   img {
      margin-bottom: 1rem;
   }
`;
