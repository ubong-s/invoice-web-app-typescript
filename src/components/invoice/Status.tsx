import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { breakpoints, misc, typography } from '../../styles/globalStyles';
import { useAppDispatch } from '../../app/hooks';
import {
   markInvoiceAsPaid,
   deleteInvoice,
} from '../../features/invoice/invoiceSlice';
import {
   toggleDeleteModal,
   toggleInvoiceModal,
} from '../../features/global/globalSlice';
import { Invoice } from '../../types';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

interface StatusProps {
   invoice: Invoice;
}

const Status = ({ invoice }: StatusProps) => {
   const navigate = useNavigate();
   const dispatch = useAppDispatch();
   const { deleteModal } = useSelector((state: RootState) => state.global);

   const deleteSelected = (id: any) => {
      navigate('/');
      dispatch(deleteInvoice(id));
   };

   return (
      <StatusRoot className='container'>
         <button
            type='button'
            name='back btn'
            className='back'
            onClick={() => navigate('/')}
         >
            <svg width='7' height='10' xmlns='http://www.w3.org/2000/svg'>
               <path
                  d='M6.342.886L2.114 5.114l4.228 4.228'
                  stroke='#9277FF'
                  strokeWidth='2'
                  fill='none'
                  fillRule='evenodd'
               />
            </svg>
            Go back
         </button>
         {invoice && (
            <StatusBar>
               <div className='left'>
                  <p>Status</p>

                  <div className={`badge ${invoice.status}`}>
                     <span className='circle'></span>
                     {invoice.status}
                  </div>
               </div>

               <div className='right'>
                  <button
                     type='button'
                     className='edit'
                     onClick={() => {
                        dispatch(toggleInvoiceModal());
                     }}
                  >
                     Edit
                  </button>
                  <button
                     type='button'
                     className='delete'
                     onClick={() => dispatch(toggleDeleteModal())}
                  >
                     Delete
                  </button>
                  {invoice?.status !== 'paid' && invoice?.status !== 'draft' && (
                     <button
                        type='button'
                        className='paid'
                        onClick={() => dispatch(markInvoiceAsPaid(invoice?.id))}
                     >
                        Mark as paid
                     </button>
                  )}
               </div>
            </StatusBar>
         )}
         <MobileBtnContainer>
            <div className='container'>
               <button
                  type='button'
                  className='edit'
                  onClick={() => {
                     dispatch(toggleInvoiceModal());
                  }}
               >
                  Edit
               </button>
               <button
                  type='button'
                  className='delete'
                  onClick={() => dispatch(toggleDeleteModal())}
               >
                  Delete
               </button>
               {invoice?.status !== 'paid' && invoice?.status !== 'draft' && (
                  <button
                     type='button'
                     className='paid'
                     onClick={() => dispatch(markInvoiceAsPaid(invoice?.id))}
                  >
                     Mark as paid
                  </button>
               )}
            </div>
         </MobileBtnContainer>

         <DeleteModal className={deleteModal ? 'active' : ''}>
            <div
               className='overlay'
               onClick={() => {
                  dispatch(toggleDeleteModal());
               }}
            ></div>
            <div className='content'>
               <h2>Confirm Deletion</h2>
               <p>
                  Are you sure you want to delete <span>#{invoice.id}</span>{' '}
                  invoice? This action cannot be undone.
               </p>
               <div className='buttons'>
                  <button
                     type='button'
                     className='edit'
                     onClick={() => {
                        dispatch(toggleDeleteModal());
                     }}
                  >
                     Cancel
                  </button>
                  <button
                     type='button'
                     className='delete'
                     onClick={() => {
                        deleteSelected(invoice?.id);
                        dispatch(toggleDeleteModal());
                     }}
                  >
                     Delete
                  </button>
               </div>
            </div>
         </DeleteModal>
      </StatusRoot>
   );
};

export default Status;

const MobileBtnContainer = styled.div`
   position: fixed;
   left: 0;
   bottom: 0;
   background-color: ${(props) => props.theme.cardBody};
   padding: 1.5rem 0;
   width: 100%;
   z-index: 10;

   .container {
      display: flex;
      justify-content: flex-end;
      gap: 0.5rem;
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      display: none;
   }
`;

const StatusRoot = styled.div`
   gap: 1rem;
   padding: 3rem 0 1rem;

   .back {
      cursor: pointer;
      background: transparent;
      border: none;
      outline: none;
      color: ${(props) => props.theme.text};
      margin-bottom: 2rem;

      svg {
         margin-right: 1rem;
      }
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      padding-top: 4rem;
   }
`;

const StatusBar = styled.div`
   padding: 1.5rem;
   background-color: ${(props) => props.theme.cardBody};
   color: ${(props) => props.theme.text};
   border-radius: ${misc.rounded.xs};

   .left {
      display: grid;
      grid-template-columns: 2fr 1fr;
      align-items: center;

      p {
         margin-bottom: 0;
      }
   }

   .right {
      display: none;
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      display: grid;
      grid-template-columns: auto 1fr;

      .left {
         display: flex;
         align-items: center;
         gap: 1rem;

         .badge {
            width: auto;
            height: auto;
         }
      }

      .right {
         display: flex;
         gap: 0.75rem;
         justify-self: flex-end;
      }
   }
`;

const DeleteModal = styled.div`
   position: absolute;
   left: 0;
   top: 0;
   width: 100%;
   height: calc(100vh - 80px);
   display: flex;
   align-items: center;
   justify-content: center;
   transform: scale(0);
   opacity: 0;
   transition: ${misc.transition.ease};
   z-index: 50;

   .overlay {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: ${(props) => props.theme.body};
      opacity: 0.9;
   }

   .content {
      position: relative;
      width: 90%;
      max-width: 500px;
      background-color: ${(props) => props.theme.cardBody};
      border-radius: 10px;
      padding: 2.5rem 2rem;
      text-align: left;

      p {
         margin: 1rem 0;
         span {
            font-weight: ${typography.weight.semibold};
         }
      }

      .buttons {
         display: flex;
         gap: 1rem;
         justify-content: flex-end;
         margin-top: 2rem;
      }
   }

   &.active {
      transform: scale(1);
      opacity: 1;
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      height: 100vh;

      .content {
         padding: 3rem;

         h2 {
            font-size: 28px;
         }
      }
   }
`;
