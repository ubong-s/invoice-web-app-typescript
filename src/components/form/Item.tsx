import { useFormikContext } from 'formik';
import { useEffect } from 'react';
import styled from 'styled-components';
import { Invoice, SingleItemProps } from '../../types';

interface Props {
   index: number;
   item: SingleItemProps;
   handleChange: (e: React.ChangeEvent<any>) => void;
   remove: (index: number) => void;
}

const Item = ({ index, item, handleChange, remove }: Props) => {
   const {
      values: { items },
      setFieldValue,
   } = useFormikContext<Invoice>();

   const fetchTotals = () => {
      const allTotals = items.reduce((acc, item) => {
         acc += item.total;

         return acc;
      }, 0);

      setFieldValue(`total`, allTotals);
   };

   useEffect(
      () => {
         const itemTotal = Number(item.quantity) * Number(item.price);
         setFieldValue(`items[${index}].total`, itemTotal);
      },
      // eslint-disable-next-line
      [items[index].quantity, items[index].price]
   );

   useEffect(
      () => {
         fetchTotals();
      },
      // eslint-disable-next-line
      [items[index].total]
   );

   return (
      <ItemRoot className='items-grid'>
         <input
            aria-label={`items.${index}.name`}
            name={`items.${index}.name`}
            type='text'
            value={item.name}
            onChange={handleChange}
            required
            className={item.name.length === 0 ? 'active' : ''}
         />
         <input
            aria-label={`items.${index}.quantity`}
            name={`items.${index}.quantity`}
            type='number'
            value={item.quantity}
            onChange={handleChange}
            required
            className={item.price.toString().length === 0 ? 'active' : ''}
         />
         <input
            aria-label={`items.${index}.price`}
            name={`items.${index}.price`}
            type='number'
            value={item.price}
            onChange={handleChange}
            required
            className={item.quantity.toString().length === 0 ? 'active' : ''}
         />

         <p className='total'>{item.total.toFixed(2)}</p>

         <button
            aria-label='delete item'
            type='button'
            name='delete item'
            className='delete-item'
            onClick={() => remove(index)}
         >
            <svg width='13' height='16' xmlns='http://www.w3.org/2000/svg'>
               <path
                  d='M11.583 3.556v10.666c0 .982-.795 1.778-1.777 1.778H2.694a1.777 1.777 0 01-1.777-1.778V3.556h10.666zM8.473 0l.888.889h3.111v1.778H.028V.889h3.11L4.029 0h4.444z'
                  fill='#888EB0'
                  fillRule='nonzero'
               />
            </svg>
         </button>
      </ItemRoot>
   );
};

export default Item;

const ItemRoot = styled.div`
   .total {
      width: 100%;
      overflow-x: scroll;
      margin-bottom: -0.25rem;

      &::-webkit-scrollbar {
         height: 0.25rem;
      }

      &::-webkit-scrollbar-thumb {
         background-color: ${(props) => props.theme.scrollBar};
         border-radius: 10px;
      }
   }
`;
