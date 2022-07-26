import styled from 'styled-components';
import { breakpoints, misc, typography } from '../../styles/globalStyles';
import InputElement from './InputElement';

const InvoiceForm = () => {
   return (
      <InvoiceFormRoot>
         <h2>New Invoice</h2>

         <Form>
            {/* Bills From */}
            <fieldset>
               <legend>Bill From</legend>
               <InputElement
                  name='from_street'
                  type='text'
                  label='Street Address'
               />
               <ThreeColumns>
                  <InputElement name='from_city' type='text' label='City' />
                  <InputElement
                     name='from_post_code'
                     type='text'
                     label='Post Code'
                  />
                  <InputElement
                     name='from_country'
                     type='text'
                     label='Country'
                  />
               </ThreeColumns>
            </fieldset>

            {/* Bills To */}
            <fieldset>
               <legend>Bill To</legend>
               <InputElement
                  name='client_name'
                  type='text'
                  label={`Client's Name`}
               />
               <InputElement
                  name='client_email'
                  type='text'
                  label={`Client's Email`}
               />
               <InputElement
                  name='to_street'
                  type='text'
                  label='Street Address'
               />

               <ThreeColumns>
                  <InputElement name='to_city' type='text' label='City' />
                  <InputElement
                     name='to_post_code'
                     type='text'
                     label='Post Code'
                  />
                  <InputElement name='to_country' type='text' label='Country' />
               </ThreeColumns>
            </fieldset>

            {/* Invoice */}
            <fieldset>
               <TwoColumns>
                  <InputElement
                     name='invoice_date'
                     type='date'
                     label='Invoice Date'
                  />
                  <div className='form-group'>
                     <label htmlFor='payment_terms'>Payment Terms</label>
                     <select name='payment_terms' id='payment_terms'>
                        <option value='Net 1 Day'>Net 1 Day</option>
                        <option value='Net 7 Days'>Net 7 Days</option>
                        <option value='Net 14 Days'>Net 14 Days</option>
                        <option value='Net 30 Days'>Net 30 Days</option>
                     </select>
                  </div>
               </TwoColumns>

               <InputElement
                  name='project_desc'
                  type='text'
                  label='Project Description'
               />
            </fieldset>
         </Form>
      </InvoiceFormRoot>
   );
};

export default InvoiceForm;

const InvoiceFormRoot = styled.div`
   padding: 1rem 0;
   width: 90%;
   height: 100%;
   margin: auto;
   z-index: 30;
`;

const Form = styled.form`
   margin: 2rem 0;
   max-height: 65vh;
   overflow-y: scroll;
   padding-right: 1rem;

   &::-webkit-scrollbar {
      width: 0.5em;
   }

   &::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.scrollBar};
      border-radius: 10px;
      /* outline: 1px solid slategrey; */
   }

   fieldset {
      border: none;
   }

   legend {
      padding: 2rem 0 0.5rem;
      font-weight: ${typography.weight.semibold};
      color: ${(props) => props.theme.accent};
   }

   label {
      display: flex;
      justify-content: space-between;
      align-items: center;
   }

   input,
   select {
      width: 100%;
      padding: 1rem;
      border-radius: 5px;
      border: 1px solid transparent;
      outline: none;
      background-color: ${(props) => props.theme.cardBody};
      color: ${(props) => props.theme.boldText};
      transition: ${misc.transition.ease};

      &:hover,
      &:focus {
         border: 1px solid ${(props) => props.theme.accent};
      }
   }

   .form-group {
      padding: 0.75rem 0;
   }
`;

const TwoColumns = styled.div`
   display: grid;
   column-gap: 1.5rem;
   grid-template-columns: repeat(2, 1fr);
`;

const ThreeColumns = styled.div`
   display: grid;
   column-gap: 1.5rem;
   grid-template-columns: repeat(2, 1fr);

   div:last-of-type {
      grid-column: 1 /3;
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      grid-template-columns: repeat(3, 1fr);

      div:last-of-type {
         grid-column: unset;
      }
   }
`;
