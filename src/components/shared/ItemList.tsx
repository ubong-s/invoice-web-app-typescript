import { FieldArray, useFormikContext } from 'formik';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { ItemProps } from '../../types';

interface ItemListProps {
   items: ItemProps[];
   handleChange: (e: React.ChangeEvent<any>) => void;
}

const ItemList = ({ items, handleChange }: ItemListProps) => {
   return (
      <Items>
         <h4>Item List</h4>

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
                        <div className='items-grid' key={index}>
                           <input
                              aria-label={`items.${index}.name`}
                              name={`items.${index}.name`}
                              type='text'
                              value={item.name}
                              onChange={handleChange}
                           />
                           <input
                              aria-label={`items.${index}.quantity`}
                              name={`items.${index}.quantity`}
                              type='number'
                              value={item.quantity}
                              onChange={handleChange}
                           />
                           <input
                              aria-label={`items.${index}.price`}
                              name={`items.${index}.price`}
                              type='number'
                              value={item.price}
                              onChange={handleChange}
                           />

                           <div>
                              {(
                                 Number(item.price) * Number(item.quantity)
                              ).toFixed(2)}
                           </div>

                           <button
                              aria-label='delete item'
                              type='button'
                              name='delete item'
                              className='delete-item'
                              onClick={() => remove(index)}
                           >
                              <svg
                                 width='13'
                                 height='16'
                                 xmlns='http://www.w3.org/2000/svg'
                              >
                                 <path
                                    d='M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z'
                                    fill='#888EB0'
                                    fillRule='nonzero'
                                 />
                              </svg>
                           </button>
                        </div>
                     ))}
                  <button
                     onClick={() =>
                        push({
                           name: '',
                           quantity: '',
                           price: '',
                        })
                     }
                     className='add-item-btn'
                     type='button'
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
`;
