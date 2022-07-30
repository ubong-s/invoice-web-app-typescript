import styled from 'styled-components';
import { Formik, Form } from 'formik';
import { breakpoints } from '../../styles/globalStyles';
import { initialValues, paymentTermsOptions } from '../../data/formData';
import { InputElement, SelectElement, DateElement, ItemList } from '..';
import { ItemProps, InvoiceFormProps } from '../../types';
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
         <div className='intro'>
            <h2>New Invoice</h2>
         </div>

         <Formik
            initialValues={initialValues as InvoiceFormProps}
            validate={validate}
            onSubmit={handleSubmit}
         >
            {({ values, handleChange, errors, touched, resetForm }) => {
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
                              error={
                                 errors.senderAddress?.street &&
                                 touched.senderAddress?.street
                                    ? errors.senderAddress?.street
                                    : ''
                              }
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
                                 error={
                                    errors.senderAddress?.postCode &&
                                    touched.senderAddress?.postCode
                                       ? errors.senderAddress?.postCode
                                       : ''
                                 }
                              />
                              <InputElement
                                 name='senderAddress.country'
                                 type='text'
                                 label='Country'
                                 value={values.senderAddress.country}
                                 handleChange={handleChange}
                                 error={
                                    errors.senderAddress?.country &&
                                    touched.senderAddress?.country
                                       ? errors.senderAddress?.country
                                       : ''
                                 }
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
                              error={
                                 errors.clientName && touched.clientName
                                    ? errors.clientName
                                    : ''
                              }
                           />
                           <InputElement
                              name='clientEmail'
                              type='text'
                              label={`Client's Email`}
                              value={values.clientEmail}
                              handleChange={handleChange}
                              error={
                                 errors.clientEmail && touched.clientEmail
                                    ? errors.clientEmail
                                    : ''
                              }
                           />
                           <InputElement
                              name='clientAddress.street'
                              type='text'
                              label='Street Address'
                              value={values.clientAddress.street}
                              handleChange={handleChange}
                              error={
                                 errors.clientAddress?.street &&
                                 touched.clientAddress?.street
                                    ? errors.clientAddress?.street
                                    : ''
                              }
                           />

                           <ThreeColumns>
                              <InputElement
                                 name='clientAddress.city'
                                 type='text'
                                 label='City'
                                 value={values.clientAddress.city}
                                 handleChange={handleChange}
                                 error={
                                    errors.clientAddress?.city &&
                                    touched.clientAddress?.city
                                       ? errors.clientAddress?.city
                                       : ''
                                 }
                              />
                              <InputElement
                                 name='clientAddress.postCode'
                                 type='text'
                                 label='Post Code'
                                 value={values.clientAddress.postCode}
                                 handleChange={handleChange}
                                 error={
                                    errors.clientAddress?.postCode &&
                                    touched.clientAddress?.postCode
                                       ? errors.clientAddress?.postCode
                                       : ''
                                 }
                              />
                              <InputElement
                                 name='clientAddress.country'
                                 type='text'
                                 label='Country'
                                 value={values.clientAddress.country}
                                 handleChange={handleChange}
                                 error={
                                    errors.clientAddress?.country &&
                                    touched.clientAddress?.country
                                       ? errors.clientAddress?.country
                                       : ''
                                 }
                              />
                           </ThreeColumns>
                        </fieldset>

                        {/* Invoice */}
                        <fieldset>
                           <TwoColumns>
                              <DateElement
                                 name='createdAt'
                                 label='Invoice Date'
                                 value={values.createdAt}
                                 handleChange={handleChange}
                                 error={
                                    errors.createdAt && touched.createdAt
                                       ? errors.createdAt
                                       : ''
                                 }
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
                              error={
                                 errors.description && touched.description
                                    ? errors.description
                                    : ''
                              }
                           />
                        </fieldset>

                        <ItemList
                           items={values.items}
                           error={errors.items}
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
   padding: 0 1rem;
   background-color: ${(props) => props.theme.btnWrap};
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 1rem;
   left: 0;
   bottom: 0;
   width: 100%;
   height: 15%;
   box-shadow: hsla(0, 0%, 0%, 0.15) 0px 5px 15px 0px;

   @media screen and (min-width: ${breakpoints.tablet}) {
      padding: 0 2rem;
      height: 15%;
   }
`;

const InvoiceFormRoot = styled.div`
   height: calc(100vh - 80px);
   margin: auto;
   z-index: 30;
   position: relative;
   line-height: 1;
   margin-bottom: 0;

   .intro {
      height: 10%;
      padding: 0.5rem 1rem 0;
      display: flex;
      align-items: center;
   }

   form {
      padding: 0 1rem 2rem;
      height: 75%;
      overflow-y: scroll;
      padding-right: 1rem;
      padding-bottom: 1rem;

      &::-webkit-scrollbar {
         width: 0.5em;
      }

      &::-webkit-scrollbar-thumb {
         background-color: ${(props) => props.theme.scrollBar};
         border-radius: 10px;
      }

      label {
         display: flex;
         justify-content: space-between;
         align-items: center;
         margin-bottom: 0.25rem;
      }

      .all-errors {
         display: block;
         color: ${(props) => props.theme.red};
         margin-top: 1rem;
      }
   }

   @media screen and (min-width: ${breakpoints.tablet}) {
      height: 100vh;

      .intro {
         height: 15%;
         padding: 0 2rem;
      }

      form {
         height: 70%;
         padding: 2rem;
         margin-right: 1rem;
      }
   }

   @media screen and (min-width: ${breakpoints.desktop}) {
      .intro {
         padding: 1rem 2rem 0;
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
