import { Formik, Form } from 'formik';
import { initialValues, paymentTermsOptions } from '../../data/formData';
import { InputElement, SelectElement, DateElement, ItemList } from '..';
import { Invoice } from '../../types';
import { validate } from '../../utils/validate';
import { useAppDispatch } from '../../app/hooks';
import { toggleInvoiceModal } from '../../features/global/globalSlice';
import {
   saveDraftInvoice,
   saveInvoice,
} from '../../features/invoice/invoiceSlice';
import { generateIDs } from '../../utils/helpers';
import {
   FormButtons,
   InvoiceFormRoot,
   ThreeColumns,
   TwoColumns,
} from './InvoiceForm.styles';

const CreateInvoiceForm = () => {
   const dispatch = useAppDispatch();

   const handleSubmit = async (values: Invoice) => {
      const temp = values.id
         ? { ...values, status: 'pending' }
         : { ...values, status: 'pending', id: generateIDs() };
      dispatch(saveInvoice(temp));
      dispatch(toggleInvoiceModal());
   };

   const submitDraft = (values: Invoice) => {
      const temp = values.id
         ? { ...values, status: 'draft' }
         : { ...values, status: 'draft', id: generateIDs() };
      dispatch(saveDraftInvoice(temp));
      dispatch(toggleInvoiceModal());
   };

   return (
      <InvoiceFormRoot>
         <div className='intro'>
            <h2>New Invoice</h2>
         </div>

         <Formik
            initialValues={initialValues as Invoice}
            validate={validate}
            onSubmit={(values, { resetForm }) => {
               handleSubmit(values);
               resetForm({ values: initialValues });
            }}
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

                        <input
                           type='text'
                           hidden
                           onChange={handleChange}
                           value={values.total}
                        />
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
                           <button
                              type='button'
                              className='draft'
                              onClick={() => {
                                 submitDraft(values);
                                 resetForm();
                              }}
                           >
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

export default CreateInvoiceForm;
