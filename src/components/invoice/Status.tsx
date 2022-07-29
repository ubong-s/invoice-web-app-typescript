import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { breakpoints, misc } from '../../styles/globalStyles';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';

const Status = () => {
   const navigate = useNavigate();
   const { single_invoice: invoice } = useSelector(
      (state: RootState) => state.invoice
   );

   return (
      <StatusRoot className='container'>
         <button
            type='button'
            name='back btn'
            className='back'
            onClick={() => navigate(-1)}
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
                  <button type='button' className='edit'>
                     Edit
                  </button>
                  <button type='button' className='delete'>
                     Delete
                  </button>
                  <button type='button' className='paid'>
                     Mark as paid
                  </button>
               </div>
            </StatusBar>
         )}
         <MobileBtnContainer>
            <div className='container'>
               <button type='button' className='edit'>
                  Edit
               </button>
               <button type='button' className='delete'>
                  Delete
               </button>
               <button type='button' className='paid'>
                  Mark as paid
               </button>
            </div>
         </MobileBtnContainer>
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
