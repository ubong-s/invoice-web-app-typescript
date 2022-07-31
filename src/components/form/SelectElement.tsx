import { useFormikContext } from 'formik';
import { useEffect } from 'react';
import styled from 'styled-components';
import { Invoice, paymentTermsProps } from '../../types';

interface SelectProps {
   name: string;
   label: string;
   options: paymentTermsProps[];
   value: string | number | undefined;
   handleChange: (e: React.ChangeEvent<any>) => void;
   error?: string;
}

const SelectElement = ({
   name,
   label,
   value,
   options,
   handleChange,
   error,
}: SelectProps) => {
   const {
      values: { createdAt },
      setFieldValue,
   } = useFormikContext<Invoice>();

   function addDays(date: string, days: number) {
      var result = new Date(date);
      result.setDate(result.getDate() + days);

      return result.toISOString().substring(0, 10);
   }

   useEffect(() => {
      const tempDate = addDays(createdAt, Number(value));
      setFieldValue(`paymentDue`, tempDate);

      // eslint-disable-next-line
   }, [value, createdAt]);

   return (
      <SelectRoot>
         <label htmlFor={name}>{label}</label>
         <select name={name} id={name} value={value} onChange={handleChange}>
            {options.map((opt) => (
               <option value={opt.value} key={opt.value}>
                  {opt.text}
               </option>
            ))}
         </select>
      </SelectRoot>
   );
};

export default SelectElement;

const SelectRoot = styled.div`
   padding: 0.75rem 0;
`;
