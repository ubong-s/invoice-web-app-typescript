import { FieldArray, FormikErrors } from 'formik';
import React from 'react';
import styled from 'styled-components';
import { SingleItemProps } from '../../types';
import Item from './Item';

interface ItemListProps {
   items: SingleItemProps[];
   error: string | string[] | FormikErrors<SingleItemProps>[] | undefined;
   handleChange: (e: React.ChangeEvent<any>) => void;
}

const ItemList = ({ items, error, handleChange }: ItemListProps) => {
   return (
      <Items>
         <h4>Item List</h4>
         {error && typeof error === 'string' && (
            <p className='error'>{error}</p>
         )}

         {items.length > 0 && (
            <div className='items-grid'>
               <span>Item List</span>
               <span>Qty.</span>
               <span>Price</span>
               <span>Total</span>
            </div>
         )}
         <FieldArray name='items'>
            {({ insert, remove, push }) => (
               <div className='items'>
                  {items?.length > 0 &&
                     items?.map((item, index) => (
                        <Item
                           key={index}
                           index={index}
                           handleChange={handleChange}
                           remove={remove}
                           item={item}
                        />
                     ))}
                  <button
                     onClick={() =>
                        push({
                           name: '',
                           quantity: '',
                           price: '',
                           total: 0,
                        })
                     }
                     className='add-item-btn'
                  >
                     <svg
                        width='11'
                        height='11'
                        xmlns='http://www.w3.org/2000/svg'
                     >
                        <path
                           d='M6.313 10.023v-3.71h3.71v-2.58h-3.71V.023h-2.58v3.71H.023v2.58h3.71v3.71z'
                           fill='#7C5DFA'
                           fillRule='nonzero'
                        />
                     </svg>
                     Add New Item{' '}
                  </button>
               </div>
            )}
         </FieldArray>
      </Items>
   );
};

export default ItemList;

const Items = styled.div`
   padding-top: 2rem;
   display: grid;
   gap: 1rem;

   h4 {
      color: ${(props) => props.theme.text};
      font-size: 1.2rem;
   }

   .error {
      color: ${(props) => props.theme.red};
   }

   .items {
      display: grid;
      gap: 1rem;
   }

   .items-grid {
      display: grid;
      align-items: center;
      gap: 1rem;
      grid-template-columns: 5fr 1.5fr 3fr 2fr 1fr;
   }

   input {
      /* pointer-events: none; */

      &.active {
         border-color: ${(props) => props.theme.red};
      }
   }
`;
