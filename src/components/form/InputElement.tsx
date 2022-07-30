import styled from 'styled-components';

interface InputProps {
   name: string;
   type: string;
   label?: string;
   value: string | number | undefined;
   handleChange: (e: React.ChangeEvent<any>) => void;
   error?: string;
}

const InputElement = ({
   name,
   type,
   label,
   value,
   handleChange,
   error,
}: InputProps) => {
   return (
      <InputRoot className={error && 'error'}>
         <label htmlFor={name}>
            {label}
            <small>{error}</small>
         </label>
         <input
            name={name}
            id={name}
            type={type}
            value={value}
            onChange={handleChange}
         />
      </InputRoot>
   );
};

export default InputElement;

const InputRoot = styled.div`
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
