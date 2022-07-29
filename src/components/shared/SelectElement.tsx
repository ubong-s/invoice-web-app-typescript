import { useFormikContext } from 'formik';
import styled from 'styled-components';
import { misc } from '../../styles/globalStyles';
import { paymentTermsProps } from '../../types';

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
   const { values, setFieldValue } = useFormikContext();

   console.log(values);

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
