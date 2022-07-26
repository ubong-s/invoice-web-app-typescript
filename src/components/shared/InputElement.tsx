import styled from 'styled-components';
import { misc } from '../../styles/globalStyles';

interface InputProps {
   name: string;
   type: string;
   label: string;
   error?: string;
}

const InputElement = ({ name, type, label, error }: InputProps) => {
   return (
      <InputRoot>
         <label htmlFor={name}>
            {label}
            <small>{error}</small>
         </label>
         <input name={name} id={name} type={type} />
      </InputRoot>
   );
};

export default InputElement;

const InputRoot = styled.div`
   padding: 0.75rem 0;
`;
