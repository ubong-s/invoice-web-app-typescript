import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints } from '../../styles/globalStyles';

const EmptyInvoice = () => {
   return (
      <EmptyInvoiceWrap>
         <div className='container'>
            <img src='/assets/illustration-empty.svg' alt='' />
            <h2>Oops..., Invoice cannot be found</h2>
            <Link to='/'>
               <button className='btn paid'>Back to Invoices</button>
            </Link>
         </div>
      </EmptyInvoiceWrap>
   );
};

export default EmptyInvoice;

const EmptyInvoiceWrap = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
   height: calc(100vh - 80px);

   img {
      margin-bottom: 1rem;
   }

   h2 {
      margin-bottom: 1.5rem;
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      height: 100vh;
   }
`;
