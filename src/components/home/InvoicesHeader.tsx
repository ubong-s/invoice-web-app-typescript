import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';
import { useAppDispatch } from '../../app/hooks';
import { RootState } from '../../app/store';
import { updateFilter } from '../../features/invoice/invoiceSlice';
import { breakpoints, misc, typography } from '../../styles/globalStyles';
import filterData from '../../data/filterData.json';
import { toggleInvoiceModal } from '../../features/global/globalSlice';

const InvoicesHeader = () => {
   const dispatch = useAppDispatch();
   const { filtered_data, filterQuery } = useSelector(
      (state: RootState) => state.invoice
   );
   const [filterOpen, setFilterOpen] = useState(false);

   const toggleFilter = () => {
      setFilterOpen(!filterOpen);
   };

   return (
      <InvoicesHeaderRoot className='container'>
         <Title>
            <h1>Invoices</h1>
            <p>
               <span>There are </span> {filtered_data.length}{' '}
               <span>total </span>
               invoices
            </p>
         </Title>

         <FilterRoot
            onClick={toggleFilter}
            filterOpen={filterOpen ? 'active' : null}
         >
            <div className='filter'>
               Filter <span>by status</span>{' '}
               <svg width='11' height='7' xmlns='http://www.w3.org/2000/svg'>
                  <path
                     d='M1 1l4.228 4.228L9.456 1'
                     stroke='#7C5DFA'
                     strokeWidth='2'
                     fill='none'
                     fillRule='evenodd'
                  />
               </svg>
            </div>

            <fieldset>
               {filterData.filters.map((filter) => (
                  <label key={filter.id} htmlFor={filter.status}>
                     <input
                        type='checkbox'
                        name='status'
                        id={filter.status}
                        value={filter.status}
                        checked={filterQuery === filter.status}
                        onChange={(e) =>
                           e.target.value === filterQuery
                              ? dispatch(updateFilter(''))
                              : dispatch(updateFilter(e.target.value))
                        }
                     />
                     {filter.status}
                  </label>
               ))}
            </fieldset>
         </FilterRoot>

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
      </InvoicesHeaderRoot>
   );
};

export default InvoicesHeader;

const InvoicesHeaderRoot = styled.section`
   padding-top: 3rem;
   display: grid;
   grid-template-columns: 1fr auto auto;
   align-items: center;
   gap: 1.5rem;

   @media screen and (min-width: ${breakpoints.tablet}) {
      padding-top: 4rem;
      gap: 2.5rem;
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      gap: 3.5rem;
      padding-top: 5rem;
   }
`;

const Title = styled.div`
   h1 {
      font-size: 2rem;
   }

   p {
      margin-bottom: 0;

      span {
         display: none;
      }
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      h1 {
         font-size: 3rem;
      }
      p {
         span {
            display: initial;
         }
      }
   }
`;

const FilterRoot = styled.div<{ filterOpen: string | null }>`
   position: relative;

   .filter {
      cursor: pointer;
      span {
         display: none;
      }

      svg {
         margin-left: 0.5rem;
         transition: ${misc.transition.ease};
      }
   }

   fieldset {
      position: absolute;
      padding: 1.25rem;
      margin-top: 0.5rem;
      right: 0;
      width: 150px;
      border: none;
      background-color: ${(props) => props.theme.cardBody};
      border-radius: ${misc.rounded.sm};
      box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
      z-index: -2;
      opacity: 0;
      transition: ${misc.transition.ease};

      label {
         display: grid;
         grid-template-columns: auto 1fr;
         gap: 0.75rem;
         text-transform: capitalize;

         input {
            position: relative;
            z-index: 10;
         }
      }
   }

   ${({ filterOpen }) =>
      filterOpen &&
      css`
         fieldset {
            z-index: 10;
            opacity: 1;
         }

         .filter {
            svg {
               transform: rotate(180deg);
            }
         }
      `}

   @media screen and (min-width: ${breakpoints.tablet}) {
      .filter {
         span {
            display: initial;
         }
      }

      fieldset {
         left: 0;
         width: 150px;
      }
   }
`;

export const NewInvoice = styled.button`
   cursor: pointer;
   display: flex;
   align-items: center;
   border: none;
   outline: none;
   gap: 1rem;
   background-color: ${(props) => props.theme.accent};
   color: white;
   border-radius: ${misc.rounded.full};
   padding: 0.5rem 1rem 0.5rem 0.5rem;
   font-size: 1rem;
   font-weight: ${typography.weight.semibold};

   .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      width: 35px;
      height: 35px;
      background-color: white;
   }

   span {
      .inner {
         display: none;
      }
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      span {
         .inner {
            display: initial;
         }
      }
   }
`;
