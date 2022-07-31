import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useAppDispatch } from '../../app/hooks';
import { RootState } from '../../app/store';
import { toggleInvoiceModal } from '../../features/global/globalSlice';
import { breakpoints, misc } from '../../styles/globalStyles';
import { CreateInvoiceForm, EditInvoiceForm } from '..';
import { useLocation } from 'react-router-dom';
import { Invoice } from '../../types';

interface Props {
   invoice?: Invoice;
}

const InvoiceModal = ({ invoice }: Props) => {
   const location = useLocation();
   const dispatch = useAppDispatch();
   const { invoiceModal } = useSelector((state: RootState) => state.global);

   return (
      <InvoiceModalRoot className={invoiceModal ? 'active' : ''}>
         <div
            className='overlay'
            onClick={() => dispatch(toggleInvoiceModal())}
         ></div>
         <InvoiceModalInner>
            {location.pathname === '/' ? (
               <CreateInvoiceForm />
            ) : (
               <EditInvoiceForm invoice={invoice} />
            )}
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
   height: calc(100vh - 80px);
   height: 100vh;
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

   @media screen and (min-width: ${breakpoints.desktop}) {
      height: 100vh;
   }
`;

const InvoiceModalInner = styled.div`
   position: relative;
   background-color: ${(props) => props.theme.body};
   width: 100%;
   height: 100%;
   z-index: 30;
   overflow: hidden;

   @media screen and (min-width: ${breakpoints.tablet}) {
      width: 70%;
      border-radius: 0 20px 20px 0;
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      width: 50%;
   }
`;
