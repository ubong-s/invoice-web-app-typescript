import { log } from 'console';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints, misc, typography } from '../../styles/globalStyles';
import { InvoiceCardProps } from '../../types';

const InvoiceCard = ({
   id,
   clientName,
   paymentDue,
   status,
   total,
}: InvoiceCardProps) => {
   const formatDate = (date: string) => {
      return new Date(date).toLocaleString('en-us', {
         day: 'numeric',
         month: 'short',
         year: 'numeric',
      });
   };

   return (
      <Link to={`/invoice/${id}`}>
         <InvoiceCardRoot>
            <InvoiceCardTop>
               <p className='id'>
                  <span>#</span>
                  {id}
               </p>
               <p className='date'>Due {formatDate(paymentDue)}</p>
               <p className='client'>{clientName}</p>
            </InvoiceCardTop>

            <InvoiceCardBtm>
               <p>
                  <span className='date'>Due {formatDate(paymentDue)}</span>
                  <span className='amount'>£{total.toFixed(2)}</span>
               </p>
               <div className={`badge ${status}`}>
                  <span className='circle'></span>
                  {status}
               </div>
               <span className='arrow-right'>
                  <svg width='7' height='10' xmlns='http://www.w3.org/2000/svg'>
                     <path
                        d='M1 1l4 4-4 4'
                        stroke='#7C5DFA'
                        strokeWidth='2'
                        fill='none'
                        fillRule='evenodd'
                     />
                  </svg>
               </span>
            </InvoiceCardBtm>
         </InvoiceCardRoot>
      </Link>
   );
};

export default InvoiceCard;

const InvoiceCardRoot = styled.article`
   display: grid;
   gap: 1.5rem;
   padding: 1.5rem;
   background-color: ${(props) => props.theme.cardBody};
   color: ${(props) => props.theme.text};
   border-radius: ${misc.rounded.xs};
   border: 1px solid transparent;
   transition: ${misc.transition.ease};
   box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;

   a {
      color: ${(props) => props.theme.text};
      font-weight: ${typography.weight.light};
   }

   &:hover {
      border: 1px solid ${(props) => props.theme.accent};
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      grid-template-columns: 1.5fr 1fr;
      align-items: center;
      padding: 1rem 1.5rem;
   }
`;

const InvoiceCardTop = styled.div`
   display: grid;
   gap: 1.5rem;
   grid-template-columns: repeat(2, 1fr);
   align-items: center;

   p {
      margin-bottom: 0;

      &.id {
         font-weight: ${typography.weight.semibold};
         color: ${(props) => props.theme.boldText};

         span {
            color: ${(props) => props.theme.cardText};
         }
      }

      &.date {
         display: none;
      }

      &.client {
         justify-self: end;
      }
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      grid-template-columns: 0.5fr 1fr 1fr;

      p {
         &.date {
            display: block;
         }

         &.client {
            justify-self: start;
         }
      }
   }
`;

const InvoiceCardBtm = styled.div`
   display: grid;
   grid-template-columns: 2fr 1fr;
   gap: 1.5rem;
   align-items: flex-end;

   p {
      display: flex;
      flex-direction: column;
      margin-bottom: 0;

      .amount {
         font-weight: ${typography.weight.semibold};
         font-size: 1.25rem;
         margin-top: 1rem;
         line-height: 0.5;
         color: ${(props) => props.theme.boldText};
      }
   }

   .badge {
      display: flex;
      gap: 0.5rem;
      align-items: center;
      justify-content: center;
      padding: 0.65rem 0.75rem;
      border-radius: ${misc.rounded.xs};
      text-transform: capitalize;
      font-weight: ${typography.weight.semibold};
      font-size: 1rem;
      background-color: gray;
      width: 100%;

      .circle {
         width: 7px;
         height: 7px;
         border-radius: 50%;
         background-color: black;
      }

      &.paid {
         background-color: rgba(51, 214, 159, 0.1);
         color: ${(props) => props.theme.green};

         .circle {
            background-color: ${(props) => props.theme.green};
         }
      }

      &.pending {
         background-color: rgba(255, 143, 0, 0.1);
         color: ${(props) => props.theme.orange};

         .circle {
            background-color: ${(props) => props.theme.orange};
         }
      }

      &.draft {
         background-color: ${(props) => props.theme.draftBadgeBG};
         color: ${(props) => props.theme.boldText};

         .circle {
            background-color: ${(props) => props.theme.boldText};
         }
      }
   }

   .arrow-right {
      display: none;
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      align-items: center;
      grid-template-columns: 1fr 1fr auto;

      p {
         display: unset;
         flex-direction: unset;
         text-align: right;

         .date {
            display: none;
         }

         .amount {
            margin-top: 0;
            line-height: unset;
         }
      }

      .arrow-right {
         display: block;
      }
   }
`;
