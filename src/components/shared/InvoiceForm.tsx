const InvoiceForm = () => {
   return (
      <div>
         <h2>New Invoice</h2>

         <div className='from-address'>
            <div className='form-group'>
               <label htmlFor='from_street'>Street Address</label>
               <input type='text' name='from_street' id='from_street' />
            </div>
            <div className='form-group-two-columns'>
               <div className='form-group'>
                  <label htmlFor='from_city'>City</label>
                  <input type='text' name='from_city' id='from_city' />
               </div>
               <div className='form-group'>
                  <label htmlFor='from_post_code'>Post Code</label>
                  <input
                     type='text'
                     name='from_post_code'
                     id='from_post_code'
                  />
               </div>
            </div>
            <div className='form-group'>
               <label htmlFor='from_country'>Country</label>
               <input type='text' name='from_country' id='from_country' />
            </div>
         </div>

         <div className='client'>
            <div className='form-group'>
               <label htmlFor='client_name'>Client's Name</label>
               <input type='text' name='client_name' id='client_name' />
            </div>
            <div className='form-group'>
               <label htmlFor='client_email'>Client's Email</label>
               <input type='email' name='client_email' id='client_email' />
            </div>

            <div className='form-group'>
               <label htmlFor='to_street'>Street Address</label>
               <input type='text' name='to_street' id='to_street' />
            </div>
            <div className='form-group-two-columns'>
               <div className='form-group'>
                  <label htmlFor='to_city'>City</label>
                  <input type='text' name='to_city' id='to_city' />
               </div>
               <div className='form-group'>
                  <label htmlFor='to_post_code'>Post Code</label>
                  <input type='text' name='to_post_code' id='to_post_code' />
               </div>
            </div>
            <div className='form-group'>
               <label htmlFor='to_country'>Country</label>
               <input type='text' name='to_country' id='to_country' />
            </div>
         </div>
      </div>
   );
};

export default InvoiceForm;
