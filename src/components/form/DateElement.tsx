import styled from 'styled-components';

interface DateProps {
   name: string;
   label?: string;
   value: string;
   handleChange: (e: React.ChangeEvent<any>) => void;
   error?: string;
}

const DateElement = ({
   name,
   label,
   value,
   handleChange,
   error,
}: DateProps) => {
   return (
      <DateRoot className={error && 'error'}>
         <label htmlFor={name}>
            {label}
            <small>{error}</small>
         </label>
         <input
            name={name}
            id={name}
            type='date'
            value={value}
            onChange={handleChange}
         />
      </DateRoot>
   );
};

export default DateElement;

const DateRoot = styled.div`
   padding: 0.75rem 0;

   &.error {
      input {
         border-color: ${(props) => props.theme.red};
      }

      small {
         color: ${(props) => props.theme.red};
      }
   }
`;
