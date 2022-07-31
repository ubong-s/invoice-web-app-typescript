import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Invoice, InvoiceState } from '../../types';
import data from '../../data/data.json';

const initialState: InvoiceState = {
   data: [...data.invoices],
   filtered_data: [...data.invoices],
   filterQuery: '',
};

export const invoiceSlice = createSlice({
   name: 'invoices',
   initialState,
   // The `reducers` field lets us define reducers and generate associated actions
   reducers: {
      filterInvoices: (state, action) => {},
      updateFilter: (state, action: PayloadAction<string>) => {
         state.filterQuery = action.payload;
      },
      fetchSingleInvoice: (
         state,
         action: PayloadAction<string | undefined>
      ) => {
         const temp = state.data.find((item) => item.id === action.payload);

         if (temp) state.single_invoice = temp;
      },
      updateFIlteredData: (state) => {
         if (state.filterQuery) {
            const tempData = state.data.filter(
               (invoice) => invoice.status === state.filterQuery
            );

            state.filtered_data = tempData;
         } else {
            state.filtered_data = state.data;
         }
      },

      markInvoiceAsPaid: (state, action) => {
         const id = action.payload;

         const temp = state.data.map((item) => {
            if (item.id === id) {
               return { ...item, status: 'paid' };
            }

            return item;
         });

         state.data = temp;
         state.filtered_data = temp;
      },
      deleteInvoice: (state, action) => {
         const id = action.payload;

         const temp = state.data.filter((item) => item.id !== id);

         state.data = temp;
         state.filtered_data = temp;
      },
      saveDraftInvoice: (state, action) => {
         const temp = state.data.find((item) => item.id === action.payload.id);

         if (temp) {
            let tempData = state.data.map((item) => {
               if (item.id === action.payload.id) {
                  return action.payload;
               }
               return item;
            });
            state.data = tempData;
            state.filtered_data = tempData;
         } else {
            state.data = [...state.data, action.payload];
            state.filtered_data = [...state.filtered_data, action.payload];
         }
      },
      savePendingInvoice: (state, action) => {
         const temp = state.data.find((item) => item.id === action.payload.id);

         if (temp) {
            let tempData = state.data.map((item) => {
               if (item.id === action.payload.id) {
                  return action.payload;
               }
               return item;
            });
            state.data = tempData;
            state.filtered_data = tempData;
         } else {
            state.data = [...state.data, action.payload];
            state.filtered_data = [...state.filtered_data, action.payload];
         }
      },
   },
});

export const {
   filterInvoices,
   updateFilter,
   fetchSingleInvoice,
   updateFIlteredData,
   markInvoiceAsPaid,
   deleteInvoice,
   saveDraftInvoice,
   savePendingInvoice,
} = invoiceSlice.actions;

export default invoiceSlice.reducer;
