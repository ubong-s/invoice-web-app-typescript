import styled from 'styled-components';
import { breakpoints, misc, typography } from '../../styles/globalStyles';
import { formatDate } from '../../utils/helpers';
import { Invoice } from '../../types';

interface InvoiceInfoProps {
   invoice: Invoice;
}

const InvoiceInfo = ({ invoice }: InvoiceInfoProps) => {
   return (
      <InvoiceInfoRoot>
         <InvoiceInner className='container'>
            {invoice && (
               <>
                  <InvoiceInfoTop>
                     <div>
                        <p className='id'>
                           <span>#</span>
                           {invoice.id}
                        </p>
                        <p>{invoice.description}</p>
                     </div>
                     <p className='address'>
                        <span>{invoice.senderAddress.street}</span>
                        <span>{invoice.senderAddress.city}</span>
                        <span>{invoice.senderAddress.postCode}</span>
                        <span>{invoice.senderAddress.country}</span>
                     </p>
                  </InvoiceInfoTop>
                  <InvoiceInfoBottom>
                     <div className='date'>
                        <p>
                           <span>Invoice Date</span>
                           <span className='bold'>
                              {formatDate(invoice.createdAt)}
                           </span>
                        </p>
                        <p>
                           <span>Payment Due</span>
                           <span className='bold'>
                              {formatDate(invoice.paymentDue)}
                           </span>
                        </p>
                     </div>
                     <div className='bill'>
                        <p>
                           <span>Bill To</span>
                           <span className='bold'>{invoice.clientName}</span>
                           <span>
                              {invoice.clientAddress.street} <br />
                              {invoice.clientAddress.city} <br />
                              {invoice.clientAddress.postCode} <br />
                              {invoice.clientAddress.country}
                           </span>
                        </p>
                     </div>
                     <div>
                        <p>
                           <span>Sent to</span>
                           <span className='bold'>
                              {invoice.clientEmail
                                 ? invoice.clientEmail
                                 : 'Unavailable'}
                           </span>
                        </p>
                     </div>
                  </InvoiceInfoBottom>
                  <InvoiceTable>
                     <thead>
                        <tr>
                           <th>Item Name</th>
                           <th className='qty'>QTY</th>
                           <th className='price'>Price</th>
                           <th className='total'>Total</th>
                        </tr>
                     </thead>
                     <tbody>
                        {invoice?.items.map((item: any, index: number) => (
                           <tr key={index}>
                              <td className='mobile'>
                                 {item.name}{' '}
                                 <span>
                                    {item.quantity} x £{' '}
                                    {item.total && item.total.toFixed(2)}
                                 </span>
                              </td>
                              <td className='tablet name'>{item.name}</td>
                              <td className='tablet qty'>{item.quantity}</td>
                              <td className='tablet price'>
                                 £ {item.price && item.price.toFixed(2)}
                              </td>
                              <td className='total'>
                                 £ {item.total && item.total.toFixed(2)}
                              </td>
                           </tr>
                        ))}
                     </tbody>
                     <tbody className='footer'>
                        <tr>
                           <th scope='row'>Amount Due</th>
                           <td>£ {invoice.total.toFixed(2)}</td>
                        </tr>
                     </tbody>
                  </InvoiceTable>
               </>
            )}
         </InvoiceInner>
      </InvoiceInfoRoot>
   );
};

export default InvoiceInfo;

const InvoiceInfoRoot = styled.div`
   padding-bottom: 10rem;

   @media screen and (min-width: ${breakpoints.tablet}) {
      padding-bottom: 5rem;
   }
`;
const InvoiceInner = styled.div`
   padding: 1.5rem;
   background-color: ${(props) => props.theme.cardBody};
   color: ${(props) => props.theme.text};
   border-radius: ${misc.rounded.xs};

   @media screen and (min-width: ${breakpoints.tablet}) {
      padding: 2rem;
   }
`;

const InvoiceInfoTop = styled.div`
   display: flex;
   flex-direction: column;
   gap: 2rem;
   margin-bottom: 2rem;

   p {
      margin-bottom: 0;

      &.id {
         font-weight: ${typography.weight.semibold};
         color: ${(props) => props.theme.boldText};

         span {
            color: ${(props) => props.theme.cardText};
         }
      }
   }

   .address {
      span {
         display: block;
      }
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      flex-direction: row;
      justify-content: space-between;

      .address {
         text-align: right;
      }
   }
`;

const InvoiceInfoBottom = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   margin-bottom: 2rem;

   p {
      span {
         display: block;

         &.bold {
            font-size: 1.25rem;
            font-weight: ${typography.weight.semibold};
            color: ${(props) => props.theme.boldText};
         }
      }
   }

   .date {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      grid-template-columns: 1fr 1fr 1.25fr;
   }
`;

const InvoiceTable = styled.table`
   position: relative;
   background-color: ${(props) => props.theme.bodyAlt};
   width: 100%;
   border-radius: ${misc.rounded.xs};
   text-align: left;
   border: none;
   outline: none;
   padding-top: 1.5rem;
   overflow: hidden;

   tr {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: ${(props) => props.theme.boldText};
      font-weight: ${typography.weight.semibold};
      padding: 0 1.5rem 1.5rem;
   }

   .mobile {
      color: ${(props) => props.theme.boldText};
      font-weight: ${typography.weight.semibold};

      span {
         display: block;
         color: ${(props) => props.theme.text};
      }
   }

   .tablet {
      display: none;
   }

   thead {
      display: none;
   }

   tbody {
      display: grid;
   }

   .footer {
      height: 85px;
      tr {
         position: absolute;
         left: 0;
         bottom: 0;
         height: 85px;
         background-color: #0c0e16;
         color: white;
         width: 100%;
         display: flex;
         align-items: center;
         justify-content: space-between;
         padding-bottom: 0;

         th {
            font-weight: ${typography.weight.normal};
         }

         td {
            font-size: 2rem;
         }
      }
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      tr {
         display: grid;
         grid-template-columns: 2fr 1fr 1fr 1fr;
      }

      .mobile {
         display: none;
      }

      .tablet {
         display: initial;
      }

      thead {
         display: initial;

         th {
            color: ${(props) => props.theme.text};
            font-weight: ${typography.weight.normal};
         }
      }

      .qty {
         justify-self: center;
      }

      .price,
      .total {
         justify-self: flex-end;
      }
   }

   tfoot {
   }
`;
