import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useAppDispatch } from '../../app/hooks';
import { RootState } from '../../app/store';
import { toggleInvoiceModal } from '../../features/global/globalSlice';
import { breakpoints, misc } from '../../styles/globalStyles';
import InvoiceForm from './InvoiceForm';

const InvoiceModal = () => {
   const dispatch = useAppDispatch();
   const { invoiceModal } = useSelector((state: RootState) => state.global);

   return (
      <InvoiceModalRoot className={invoiceModal ? 'active' : ''}>
         <div
            className='overlay'
            onClick={() => dispatch(toggleInvoiceModal())}
         ></div>
         <InvoiceModalInner>
            <InvoiceForm />
            {/* <Form>
            </Form> */}
         </InvoiceModalInner>
      </InvoiceModalRoot>
   );
};

export default InvoiceModal;

const InvoiceModalRoot = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   /* background-color: rgba(0, 0, 0, 0.5); */
   z-index: 20;
   transform: translateX(-100vw);
   transition: ${misc.transition.ease};

   .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
   }

   &.active {
      transform: translateX(0);
   }
`;
const InvoiceModalInner = styled.div`
   position: relative;
   background-color: ${(props) => props.theme.body};
   padding: 2rem 0;
   width: 100%;
   height: 100%;
   z-index: 30;

   @media screen and (min-width: ${breakpoints.tablet}) {
      width: 70%;
      border-radius: 0 20px 20px 0;
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      width: 50%;
   }
`;

const Form = styled.div`
   position: relative;
   padding: 2rem 0;
   width: 90%;
   height: 100%;
   margin: auto;
   z-index: 30;

   @media screen and (min-width: ${breakpoints.tablet}) {
      padding: 3rem 1rem;
   }
`;
