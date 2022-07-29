import styled from 'styled-components';
import { Formik, Form } from 'formik';
import { breakpoints, misc, typography } from '../../styles/globalStyles';
import { initialValues, paymentTermsOptions } from '../../data/formData';
import InputElement from './InputElement';
import SelectElement from './SelectElement';
import ItemList from './ItemList';
import { ItemProps } from '../../types';
import { validate } from '../../utils/validate';
import { useAppDispatch } from '../../app/hooks';
import { toggleInvoiceModal } from '../../features/global/globalSlice';

const InvoiceForm = () => {
   const dispatch = useAppDispatch();

   const handleSubmit = async (values: any) => {
      console.log('submitted');

      console.log({
         ...values,
         items: values.items.map((item: ItemProps) => ({
            ...item,
            total: Number(item?.price) * Number(item?.quantity),
         })),
      });
   };

   return (
      <InvoiceFormRoot>
         <h2>New Invoice</h2>

         <Formik
            initialValues={initialValues}
            validate={validate}
            onSubmit={handleSubmit}
         >
            {({ values, handleChange, errors, touched, resetForm }) => {
               console.log(errors);

               return (
                  <>
                     <Form id='invoice'>
                        {/* Bills From */}
                        <fieldset>
                           <legend>Bill From</legend>
                           <InputElement
                              name='senderAddress.street'
                              type='text'
                              label='Street Address'
                              value={values.senderAddress.street}
                              handleChange={handleChange}
                              error={errors.senderAddress?.street}
                           />
                           <ThreeColumns>
                              <InputElement
                                 name='senderAddress.city'
                                 type='text'
                                 label='City'
                                 value={values.senderAddress.city}
                                 handleChange={handleChange}
                                 error={
                                    errors.senderAddress?.city &&
                                    touched.senderAddress?.city
                                       ? errors.senderAddress?.city
                                       : ''
                                 }
                              />
                              <InputElement
                                 name='senderAddress.postCode'
                                 type='text'
                                 label='Post Code'
                                 value={values.senderAddress.postCode}
                                 handleChange={handleChange}
                                 error={errors.senderAddress?.postCode}
                              />
                              <InputElement
                                 name='senderAddress.country'
                                 type='text'
                                 label='Country'
                                 value={values.senderAddress.country}
                                 handleChange={handleChange}
                                 error={errors.senderAddress?.country}
                              />
                           </ThreeColumns>
                        </fieldset>

                        {/* Bills To */}
                        <fieldset>
                           <legend>Bill To</legend>
                           <InputElement
                              name='clientName'
                              type='text'
                              label={`Client's Name`}
                              value={values.clientName}
                              handleChange={handleChange}
                              error={errors.clientName}
                           />
                           <InputElement
                              name='clientEmail'
                              type='text'
                              label={`Client's Email`}
                              value={values.clientEmail}
                              handleChange={handleChange}
                              error={errors.clientEmail}
                           />
                           <InputElement
                              name='clientAddress.street'
                              type='text'
                              label='Street Address'
                              value={values.clientAddress.street}
                              handleChange={handleChange}
                              error={errors.clientAddress?.street}
                           />

                           <ThreeColumns>
                              <InputElement
                                 name='clientAddress.city'
                                 type='text'
                                 label='City'
                                 value={values.clientAddress.city}
                                 handleChange={handleChange}
                                 error={errors.clientAddress?.city}
                              />
                              <InputElement
                                 name='clientAddress.postCode'
                                 type='text'
                                 label='Post Code'
                                 value={values.clientAddress.postCode}
                                 handleChange={handleChange}
                                 error={errors.clientAddress?.postCode}
                              />
                              <InputElement
                                 name='clientAddress.country'
                                 type='text'
                                 label='Country'
                                 value={values.clientAddress.country}
                                 handleChange={handleChange}
                                 error={errors.clientAddress?.country}
                              />
                           </ThreeColumns>
                        </fieldset>

                        {/* Invoice */}
                        <fieldset>
                           <TwoColumns>
                              <InputElement
                                 type='date'
                                 name='createdAt'
                                 label='Invoice Date'
                                 value={values.createdAt}
                                 handleChange={handleChange}
                                 error={errors.createdAt}
                              />
                              <SelectElement
                                 name='paymentTerms'
                                 label='Payment Terms'
                                 value={values.paymentTerms}
                                 handleChange={handleChange}
                                 options={paymentTermsOptions}
                              />
                           </TwoColumns>

                           <InputElement
                              name='description'
                              type='text'
                              label='Project Description'
                              value={values.description}
                              handleChange={handleChange}
                              error={errors.description}
                           />
                        </fieldset>

                        <ItemList
                           items={values.items}
                           handleChange={handleChange}
                        />

                        {Object.keys(errors).length > 0 && (
                           <small className='all-errors'>
                              - All fields must be filled.
                           </small>
                        )}
                     </Form>
                     <FormButtons>
                        <button
                           type='button'
                           className='discard'
                           onClick={() => {
                              resetForm();
                              dispatch(toggleInvoiceModal());
                           }}
                        >
                           Discard
                        </button>
                        <span>
                           <button type='button' className='draft'>
                              save as draft
                           </button>
                           <button
                              type='submit'
                              form='invoice'
                              className='save'
                           >
                              Save & send
                           </button>
                        </span>
                     </FormButtons>
                  </>
               );
            }}
         </Formik>
      </InvoiceFormRoot>
   );
};

export default InvoiceForm;

const FormButtons = styled.div`
   padding: 2rem 1rem;
   background-color: ${(props) => props.theme.btnWrap};
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 1rem;
   position: absolute;
   left: 0;
   bottom: 0;
   width: 100%;
   box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;

   @media screen and (min-width: ${breakpoints.tablet}) {
      padding: 2rem 2rem;
   }
`;

const InvoiceFormRoot = styled.div`
   padding: 1rem 1rem 0;
   height: 100%;
   margin: auto;
   z-index: 30;
   position: relative;

   form {
      margin: 1rem 0 0;
      max-height: 60vh;
      overflow-y: scroll;
      padding-right: 1rem;
      padding-bottom: 1rem;

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
         margin-bottom: 0.25rem;
      }

      input,
      select {
         width: 100%;
         height: 100%;
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

      input {
         &::-webkit-outer-spin-button,
         &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
         }

         &[type='number'] {
            -moz-appearance: textfield;
         }
      }

      .all-errors {
         display: block;
         color: ${(props) => props.theme.red};
         margin-top: 1rem;
      }
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      padding: 2rem 2rem 0;

      form {
         max-height: 65vh;
      }
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      form {
         max-height: 63vh;
      }
   }
`;

const TwoColumns = styled.div`
   display: grid;
   align-items: center;
   column-gap: 1.5rem;
   grid-template-columns: repeat(2, 1fr);
`;

const ThreeColumns = styled.div`
   display: grid;
   align-items: center;
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
